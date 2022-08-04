import {
    argbFromHex,
    themeFromSourceColor,
    Scheme,
    hexFromArgb,
    TonalPalette,
    Theme,
} from "@material/material-color-utilities";

// Web Worker to handle the theme change
onmessage = function (e) {
    const { source, rgb } = e.data;
    const theme = themeFromSourceColor(argbFromHex(source));
    applySchemes(theme, source, rgb);
    applyPalettes(theme, rgb);
}


function applySchemes(theme: Theme, source: string, rgb: boolean) {
    let sb: string[] = [];
    sb.push(`:root {`);
    sb.push(`  --md-source: ${source};`);

    // Schemes
    const applyScheme = (scheme: Scheme, options?: {
        suffix?: string,
    }) => {
        for (const [key, color] of Object.entries(scheme.toJSON())) {
            const token = key.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
            const tokenName = `--md-sys-color-${token}${options?.suffix ?? ''}`;
            addToken(sb, tokenName, color, rgb);
        }
    };

    // Light theme
    applyScheme(theme.schemes.light, { suffix: '-light' });

    // Dark theme
    applyScheme(theme.schemes.dark, { suffix: '-dark' });

    sb.push(`}`);

    // Apply light theme
    sb.push(`:root, .light-theme {`);
    sb.push(`  color-scheme: light;`);
    applyScheme(theme.schemes.light);
    sb.push(`}`);

    // Set dark theme
    sb.push(`.dark-theme {`);
    sb.push(`  color-scheme: dark;`);
    applyScheme(theme.schemes.dark);
    sb.push(`}`);

    updateStyle('theme', sb.join("\n"));
}

function applyPalettes(theme: Theme, rgb: boolean) {
    const tones = Array.from(Array(101).keys());

    // Palettes
    const applyPalette = (palette: TonalPalette, group: string, tones: number[]) => {
        const sb: string[] = [];
        sb.push(`:root {`);
        for (const tone of tones) {
            const color = palette.tone(tone);
            const tokenName = `--md-ref-palette-${group}${tone}`;
            addToken(sb, tokenName, color, rgb)
        }
        sb.push(`}`);
        return sb.join("\n");
    };

    // Primary
    const primaryPalette = applyPalette(theme.palettes.primary, "primary", tones);;
    updateStyle('palette-primary', primaryPalette);

    // Secondary
    const secondaryPalette = applyPalette(theme.palettes.secondary, "secondary", tones);;
    updateStyle('palette-secondary', secondaryPalette);

    // Tertiary
    const tertiaryPalette = applyPalette(theme.palettes.tertiary, "tertiary", tones);
    updateStyle('palette-tertiary', tertiaryPalette);

    // Error
    const errorPalette = applyPalette(theme.palettes.error, "error", tones);
    updateStyle('palette-error', errorPalette);

    // Neutral
    const neutralPalette = applyPalette(theme.palettes.neutral, "neutral", tones);
    updateStyle('palette-neutral', neutralPalette);

    // Neutral Variant
    const neutralVariantPalette = applyPalette(theme.palettes.neutralVariant, "neutral-variant", tones);
    updateStyle('palette-neutral-variant', neutralVariantPalette);
}

function addToken(sb: string[], token: string, value: number, rgb: boolean) {
    if (rgb) {
        const [r, g, b] = [
            (value >> 16) & 255,
            (value >> 8) & 255,
            value & 255,
        ];
        sb.push(`  ${token}-rgb: ${r}, ${g}, ${b};`);
        sb.push(`  ${token}: rgba(var(${token}-rgb), 1);`);
    } else {
        sb.push(`  ${token}: ${hexFromArgb(value)};`);
    }
}


function updateStyle(id: string, content: string) {
    postMessage({
        id,
        content,
    });
}