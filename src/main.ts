import GithubButton from "./buttons/GithubButton";
import PlayButton from "./buttons/PlayButton";
import UseButton from "./buttons/UseButton";
import Project from "./projects/Project";
import ProjectDesc from "./projects/ProjectDesc";

function addSpanWaves(arr: Array<string>, container: HTMLElement) {
  arr.forEach((char, i) => {
    const span = document.createElement("span");
    span.textContent = char === " " ? "\u00A0" : char;
    span.style.setProperty("--i", String(i));
    container.appendChild(span);
  });
}

function createWaveText(text: string, elementId: string) {
  const container = document.getElementById(elementId);
  if (!container) {
    console.log("Failed to retrieve container ", elementId);
    return;
  }

  container.textContent = "";
  container.classList.add("wave");

  addSpanWaves([...text], container);

  console.log(container.childNodes);
  console.log(container.classList);

  let mode = {
    dark_mode: false,
    preview_dark_mode: false,
    clicked: false,
    b_colors: ["rgb(255,255,255)", "rgb(30,30,30)"],
    t_colors: ["rgb(5, 5, 5)", "rgb(255, 255, 255)"],
    text: ["gordienovak.com", "gordienovak.com?"],
  };

  let hover = () => {
    if (!mode.clicked) {
      if (mode.dark_mode && mode.preview_dark_mode) {
        document.body.classList.toggle("dark");
        mode.preview_dark_mode = false;
      } else if (!mode.dark_mode && !mode.preview_dark_mode) {
        document.body.classList.toggle("dark");
        mode.preview_dark_mode = true;
      }
    }
  };

  let leave = () => {
    if (mode.dark_mode && !mode.preview_dark_mode) {
      document.body.classList.toggle("dark");
      mode.preview_dark_mode = true;
    } else if (!mode.dark_mode && mode.preview_dark_mode) {
      document.body.classList.toggle("dark");
      mode.preview_dark_mode = false;
    }
    mode.clicked = false;
  };

  let select = () => {
    mode.clicked = false;
    hover();
    mode.clicked = true;
    container.replaceChildren();

    mode.dark_mode = !mode.dark_mode;
    if (mode.dark_mode) {
      addSpanWaves([..."gordienovak.com?"], container);
    } else addSpanWaves([..."gordienovak.com"], container);
  };

  container.addEventListener("mouseover", hover);
  container.addEventListener("mouseleave", leave);
  container.addEventListener("mousedown", select);
  container.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      select();
    }
  });
}

function main() {
  // Example usage:

  createWaveText("gordienovak.com", "title");

  //@ts-ignore

  let e = document.getElementById("projects-desc") as HTMLElement;

  let p = new ProjectDesc("my description");
  p.appendAsChild(e);
}

document.addEventListener("DOMContentLoaded", main);
