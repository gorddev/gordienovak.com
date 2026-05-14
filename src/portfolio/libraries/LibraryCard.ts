import Library from "./Library";

export default class LibraryCard {
  constructor(lib: Library) {
    this._root = document.createElement("div");
    this._header = document.createElement("div");
    this._title = document.createElement("div");
    this._icon = document.createElement("i");
    this._brief = document.createElement("div");
    this._meta = document.createElement("div");
    this._date = document.createElement("span");
    this._languages = document.createElement("span");
    this._github = document.createElement("a");

    this.applyClasses();

    this._icon.setAttribute("data-lucide", lib.lucideSvg);

    this._title.textContent = lib.title;
    this._brief.textContent = lib.brief;
    this._date.textContent = lib.dateOfCreation;
    this._languages.textContent = lib.languages;

    this._github.href = lib.githubLink;
    this._github.target = "_blank";
    this._github.rel = "noopener noreferrer";

    this._github.textContent = "View Source";

    this._root.tabIndex = 0;

    this._header.appendChild(this._icon);
    this._header.appendChild(this._title);

    this._meta.appendChild(this._date);
    this._meta.appendChild(this._languages);
    this._meta.appendChild(this._github);

    this._root.appendChild(this._header);
    this._root.appendChild(this._brief);
    this._root.appendChild(this._meta);
  }

  private applyClasses() {
    this._root.className = "lib-tag";
    this._header.className = "lib-card-header";
    this._title.className = "lib-card-title";
    this._icon.className = "lib-card-icon";
    this._brief.className = "lib-card-brief";
    this._meta.className = "lib-card-meta";
    this._date.className = "lib-card-date";
    this._languages.className = "lib-card-languages";
    this._github.className = "lib-card-link";
  }

  public appendAsChild(element: HTMLElement): LibraryCard {
    element.appendChild(this._root);
    return this;
  }

  private _root: HTMLDivElement;
  private _header: HTMLDivElement;
  private _title: HTMLDivElement;
  private _icon: HTMLElement;
  private _brief: HTMLDivElement;
  private _meta: HTMLDivElement;
  private _date: HTMLSpanElement;
  private _languages: HTMLSpanElement;
  private _github: HTMLAnchorElement;
}
