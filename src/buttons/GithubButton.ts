import ButtonInterface from "./ButtonInterface";

export default class GithubButton implements ButtonInterface {
  constructor(link: string) {
    // Create elements
    this._root = document.createElement("button");
    this._text = document.createElement("span");
    this._img = document.createElement("img");

    // Initialize objects with correct parameters
    this._text.textContent = "GitHub";
    this._img.src = "https://github.githubassets.com/favicons/favicon.svg";
    this._root.classList.add("project-interact-button", "github-button");
    this._root.addEventListener("mousedown", (e) => {
      e.stopPropagation();
      e.stopImmediatePropagation();
      window.location.href = link;
    });

    this._img.style.height = "1lh";
    this._img.style.marginRight = "0.5em";

    // Create object structure
    this._root.appendChild(this._img);
    this._root.appendChild(this._text);
  }

  appendAsChildOf(element: HTMLElement): void {
    element.appendChild(this._root);
  }

  private _root: HTMLButtonElement;
  private _text: HTMLSpanElement;
  private _img: HTMLImageElement;
}
