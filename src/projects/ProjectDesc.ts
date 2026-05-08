export default class ProjectDesc {
  constructor(HTMLInnerText: string) {
    this._root = document.createElement("div");
    this._text = document.createElement("div");

    this._root.className = "project-desc";

    this._text.innerHTML = HTMLInnerText;

    this._root.appendChild(this._text);
  }

  public appendAsChild(element: HTMLElement): void {
    element.appendChild(this._root);
  }

  private _root: HTMLDivElement;
  private _text: HTMLDivElement;
}
