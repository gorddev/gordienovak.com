// Contains the constructor for a

import ButtonInterface from "@/buttons/ButtonInterface";
import ProjectDesc from "./ProjectDesc";

type ProjectArgs = {
  link: string;
  title: string;
  brief: string;
  img: string;
  img_alt: string;
  HTMLDesc: string;
  buttons: Array<ButtonInterface>;
};

const ProjDefaults: ProjectArgs = {
  link: "",
  title: "",
  brief: "",
  img: "",
  img_alt: "",
  HTMLDesc: "",
  buttons: [],
};

export default class Project {
  constructor(p_args: Partial<ProjectArgs> = {}) {
    let args = {
      ...ProjDefaults,
      ...p_args,
    };
    this._root = document.createElement("div");
    this._image = document.createElement("img");
    this._content = document.createElement("div");
    this._title = document.createElement("div");
    this._brief = document.createElement("div");
    this._buttons = document.createElement("div");

    // Apply classes to each of our elements
    this.applyClasses();

    for (const x of args.buttons) {
      x.appendAsChildOf(this._buttons);
    }

    this._root.addEventListener("mouseover", () => {
      ProjectDesc.toggleProjecDesc(this._HTMLDesc, this._root);
    });
    this._root.addEventListener("mouseleave", () => {
      ProjectDesc.removeProjectDesc(this._root);
    });

    this._root.onclick = (e) => {
      let target = e.target as HTMLElement;
      if (target.closest("button")) return;
      ProjectDesc.pin(this._HTMLDesc, this._root);
    };

    this._title.textContent = args.title;
    this._brief.textContent = args.brief;
    this._image.src = args.img;
    this._image.alt = args.img_alt;
    this._HTMLDesc = args.HTMLDesc;

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

  public appendAsChild(element: HTMLElement) {
    element.appendChild(this._root);
  }

  public get long_desc(): string {
    return this.long_desc;
  }

  private _HTMLDesc: string;
  private _root: HTMLDivElement;
  private _image: HTMLImageElement;
  private _content: HTMLDivElement;
  private _title: HTMLDivElement;
  private _brief: HTMLDivElement;
  private _buttons: HTMLDivElement;
}
