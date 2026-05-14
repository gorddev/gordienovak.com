import ButtonInterface from "./ButtonInterface";

export default class PlayButton implements ButtonInterface {
  constructor(link: string) {
    this._button = document.createElement("button");
    this._button.textContent = "Play";
    this._button.classList.add("project-interact-button", "play-button");
    this._button.onclick = (e) => {
      window.location.href = link;
    };
  }

  appendAsChildOf(element: HTMLElement): void {
    element.appendChild(this._button);
  }

  clone(): ButtonInterface {
    let newGuy = new PlayButton("null");
    newGuy._button.onclick = this._button.onclick;
    return newGuy;
  }

  private _button: HTMLButtonElement;
}
