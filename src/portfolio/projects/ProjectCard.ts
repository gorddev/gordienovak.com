// Contains the constructor for a

import ButtonInterface from "../buttons/ButtonInterface";
import Project from "./Project";

export default class ProjectCard {
  constructor(proj: Project) {
    this._root = document.createElement("div");
    this._image = document.createElement("img");
    this._content = document.createElement("div");
    this._title = document.createElement("div");
    this._brief = document.createElement("div");
    this._buttons = document.createElement("div");

    // Apply classes to each of our elements
    this.applyClasses();

    for (const x of proj.buttons) {
      x.appendAsChildOf(this._buttons);
    }

    this._root.tabIndex = 0;

    this._title.textContent = proj.title;
    this._brief.textContent = proj.brief;
    this._image.src = proj.cardImg.src;
    this._image.alt = proj.cardImg.alt;
    this._tooltip = proj.tooltip;

    // Start building out the structure

    // CONTENT
    this._content.appendChild(this._title);
    this._content.appendChild(this._brief);
    this._content.appendChild(this._buttons);

    // _root
    this._root.appendChild(this._image);
    this._root.appendChild(this._content);

    // Done!
  }

  private applyClasses() {
    this._root.className = "project-card";
    this._image.className = "project-image";
    this._content.className = "project-content";
    this._title.className = "project-title";
    this._brief.className = "project-brief";
    this._buttons.className = "button-container";
  }

  public appendAsChild(element: HTMLElement): ProjectCard {
    element.appendChild(this._root);
    return this;
  }

  public get long_desc(): string {
    return this.long_desc;
  }

  private _tooltip: string;
  private _root: HTMLDivElement;
  private _image: HTMLImageElement;
  private _content: HTMLDivElement;
  private _title: HTMLDivElement;
  private _brief: HTMLDivElement;
  private _buttons: HTMLDivElement;
}
