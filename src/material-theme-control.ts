import { html, css, LitElement } from "lit";
import { customElement, state, property, query } from "lit/decorators.js";

import "@material/mwc-icon-button";
import {
  argbFromHex,
  themeFromSourceColor,
  applyTheme,
} from "@material/material-color-utilities";

export const tagName = "material-theme-control";

@customElement(tagName)
export class MaterialThemeControl extends LitElement {
  static styles = css`
    .theme-options {
      font-size: 1.5rem;
      font-family: "Roboto", sans-serif;
    }
    .row {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .row mwc-icon-button,
    .row input {
      margin-left: 10px;
    }
    mwc-icon-button {
      margin-left: 3px;
    }
    dialog {
      border: none;
      border-radius: 8px;
      padding-left: 30px;
      padding-right: 30px;
      padding-bottom: 25px;
    }
    .option {
      height: 45px;
    }
    form {
      margin-top: 20px;
    }
    button {
      padding: 10px 20px;
      border-radius: 16px;
      background-color: var(--md-sys-color-primary-container);
      color: var(--md-sys-color-on-primary-container);
      border: none;
      outline: none;
      cursor: pointer;
    }
    button:hover {
      opacity: 0.8;
    }
    input[type="color"] {
      --input-size: 35px;
      width: var(--input-size);
      height: var(--input-size);
      border-radius: 50%;
      border: none;
      outline: none;
      cursor: pointer;
    }
    input[type="color"]::-webkit-color-swatch-wrapper {
      padding: 0;
    }
    input[type="color"]::-webkit-color-swatch {
      border: none;
      border-radius: var(--input-size);
      border: var(--md-sys-color-outline) solid 1px;
    }
    input[type="color"]:hover {
      opacity: 0.8;
    }
    #source {
      margin-right: 5px;
    }
  `;

  @state() showOptions = false;
  @property({ type: Boolean }) dark =
    localStorage.getItem("theme-dark") === "true";
  @property() color = localStorage.getItem("theme-color") || "#6750A4";
  @query("#theme-options") options!: HTMLDivElement;

  render() {
    return html` <mwc-icon-button
        @click=${this.toggleOptions}
        icon="palette"
      ></mwc-icon-button>
      <dialog id="theme-options" @close=${() => (this.showOptions = false)}>
        <div class="wrapper">
          <div>
            <h2 class="theme-options">Theme Options</h2>
          </div>
          <div class="row option">
            <label for="source">Source Color</label>
            <input
              id="source"
              type="color"
              .value=${this.color}
              @input=${this.onColor}
            />
          </div>
          <div class="row option">
            <label for="shuffle">Random</label>
            <mwc-icon-button
              id="shuffle"
              @click=${this.randomColor}
              icon="shuffle"
            ></mwc-icon-button>
          </div>
          <div class="row option">
            <label for="brightness">Brightness</label>
            <mwc-icon-button
              id="brightness"
              @click=${this.toggle}
              icon="${this.dark ? "light_mode" : "dark_mode"}"
            ></mwc-icon-button>
          </div>

          <form method="dialog">
            <button>Close</button>
          </form>
        </div>
      </dialog>`;
  }

  private toggleOptions() {
    this.showOptions = !this.showOptions;
    if (this.showOptions) {
      // @ts-ignore
      this.options.showModal();
    }
  }

  private toggle() {
    this.dark = !this.dark;
    localStorage.setItem("theme-dark", this.dark.toString());
    this.updateTheme();
  }

  private setColor(val: string) {
    this.color = val;
    localStorage.setItem("theme-color", val);
    this.updateTheme();
  }

  private onColor(e: Event) {
    const target = e.target as HTMLInputElement;
    this.setColor(target.value);
  }

  private randomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    this.setColor(color);
  }

  private updateTheme() {
    const source = this.color;
    const dark = this.dark;
    if (this.dark) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
    const target = this.shadowRoot!.querySelector("main") as HTMLElement;
    const theme = themeFromSourceColor(argbFromHex(source));
    applyTheme(theme, { target, dark });
  }

  firstUpdated() {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
    const dark =
      localStorage.getItem("theme-dark") ?? prefersDark.matches.toString();
    this.dark = dark === "true";
    if (this.dark) {
      document.body.classList.add("dark-theme");
    }
    this.updateTheme();
    prefersDark.addEventListener("change", (e) => {
      this.dark = e.matches;
      this.updateTheme();
    });
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "material-theme-control": MaterialThemeControl;
  }
}
