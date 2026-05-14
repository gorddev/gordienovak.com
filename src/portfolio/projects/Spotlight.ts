import ButtonInterface from "../buttons/ButtonInterface";
import Project from "./Project";

export default class Spotlight {
  constructor(proj: Project) {
    this._root = document.createElement("div");
    this._image = document.createElement("img");
    this._content = document.createElement("div");
    this._title = document.createElement("div");
    this._brief = document.createElement("div");
    this._buttons = document.createElement("div");

    this._detail = document.createElement("div");
    this._languages = document.createElement("div");

    this.applyClasses();

    for (const x of proj.buttons) {
      x.clone().appendAsChildOf(this._buttons);
    }

    this._root.tabIndex = 0;

    const spotlightImg = proj.bannerImg || proj.cardImg;
    this._image.src = spotlightImg.src;
    this._image.alt = spotlightImg.alt;

    let spotlightText = document.createElement("span");
    let titleText = document.createElement("span");
    spotlightText.className = "spotlight-badge";
    spotlightText.innerHTML = 'Spotlight<i data-lucide="aperture"></i>';
    titleText.className = "spotlight-title";
    titleText.innerText = proj.title;
    this._title.append(titleText, spotlightText);

    this._brief.textContent = proj.brief;
    this._tooltip = proj.tooltip;

    if (proj.detail) {
      this._detail.textContent = proj.detail;
    }
    if (proj.languages) {
      this._languages.textContent = `Built with: ${proj.languages}`;
    }

    // CONTENT
    this._content.appendChild(this._title);
    this._content.appendChild(this._brief);

    if (proj.detail) {
      this._content.appendChild(this._detail);
    }
    if (proj.languages) {
      this._content.appendChild(this._languages);
    }

    this._content.appendChild(this._buttons);

    // _root
    this._root.appendChild(this._image);
    this._root.appendChild(this._content);

    // Done!
  }

  private applyClasses() {
    this._root.className = "project-spotlight";
    this._image.className = "spotlight-image";
    this._content.className = "spotlight-content";
    this._brief.className = "spotlight-brief";
    this._detail.className = "spotlight-detail";
    this._languages.className = "spotlight-languages";
    this._buttons.className = "button-container";
  }

  public appendAsChild(element: HTMLElement): Spotlight {
    element.appendChild(this._root);
    return this;
  }

  private _tooltip: string;
  private _root: HTMLDivElement;
  private _image: HTMLImageElement;
  private _content: HTMLDivElement;
  private _title: HTMLDivElement;
  private _brief: HTMLDivElement;
  private _detail: HTMLDivElement;
  private _languages: HTMLDivElement;
  private _buttons: HTMLDivElement;
}
