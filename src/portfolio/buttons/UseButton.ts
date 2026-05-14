import ButtonInterface from "./ButtonInterface";

export default class UseButton implements ButtonInterface {
  constructor(link: string) {
    this._button = document.createElement("button");
    this._button.textContent = "Use";
    this._button.classList.add("project-interact-button", "use-button");
    this._button.onclick = (e) => {
      window.location.href = link;
    };
  }

  appendAsChildOf(element: HTMLElement): void {
    element.appendChild(this._button);
  }

  clone(): ButtonInterface {
    let newGuy = new UseButton("null");
    newGuy._button.onclick = this._button.onclick;
    return newGuy;
  }

  private _button: HTMLButtonElement;
}
