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

type titleArgs = {
  titleText: string;
  DOMid: string;
};

export default function CreateTitle(args: titleArgs): void {
  createWaveText(args.titleText, args.DOMid);
}
