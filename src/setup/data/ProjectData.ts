import Project from "../../portfolio/projects/Project";
import PlayButton from "../../portfolio/buttons/PlayButton";
import GithubButton from "../../portfolio/buttons/GithubButton";

//@ts-ignore
import goblinCleanupHTML from "./project-htmls/Goblin-Cleanup.html?raw";
//@ts-ignore
import FractalVisualizerHTML from "./project-htmls/Fractal_Visualizer.html?raw";

import UseButton from "../../portfolio/buttons/UseButton";

export namespace projects {
  export const Fractal_Visualizer: Project = {
    title: "Fractal Visualizer",
    brief: "An online tool for visualizing mathematical geometry.",
    detail:
      "A cross-platform fractal visualization tool that allows for side-by-side investigation of fractals formed from families of iterates.",
    languages: "C++, WASM, OpenGL",
    cardImg: {
      src: "images/fractal-card.png",
      alt: "Image of a fractal rendered with the Fractal Visualizer software.",
    },
    bannerImg: {
      src: "images/fractal-banner.png",
      alt: "Image of the lambda siz of z fractal.",
    },
    tooltip: "fractals are kinda cool lookin'",
    HTMLDesc: FractalVisualizerHTML,
    buttons: [
      new UseButton("/apps/fractal.html"),
      new GithubButton("https://github.com/gorddev/Complex-Final-Project"),
    ],
  };

  export const Goblin_Cleanup: Project = {
    title: "Goblin Cleanup",
    brief:
      "Quick SDL2 -> Emscripten project where you click on the goblins to kill them.",
    cardImg: {
      src: "goblin-cleanup.png",
      alt: "Image of the Goblin Cleanup game.",
    },
    tooltip:
      "Primarily created in C++, this project was a good test of using WASM compilers to create local/web cross-compatable apps.",
    HTMLDesc: goblinCleanupHTML,
    buttons: [new PlayButton("/apps/goblin-cleanup/Goblin-Cleanup.html")],
  };

  // THIS WEBSITE
  export const gordienovak_com: Project = {
    title: "gordienovak.com",
    brief:
      "This website! Built with Vite, Typescript, and Raw HTML with a hybrid OOP approach.",
    cardImg: {
      src: "gordienovak.png",
      alt: "Image literally saying 'gordienovak.com'",
    },
    tooltip: "Woa, check it out, it's gordienovak.com!",
    HTMLDesc: "<p>It's just this website lol.</p>",
    buttons: [new GithubButton("https://github.com/gorddev/gordienovak.com")],
  };

  // Everesting Simulation
  export const everesting: Project = {
    title: "Everesting Simulation",
    brief:
      "Sim of effects of wind speed and environmental conditions on vertical bike climbing",
    cardImg: {
      src: "bike.png",
      alt: "Image of the everesting simulation in action.",
    },
    tooltip: "He's biking so good!",
    HTMLDesc:
      "This is my projects description for everesting that I haven't completed yet. ",
    buttons: [
      new UseButton(
        "https://www.glowscript.org/#/user/novak/folder/Analytical3/program/Classical-Final-Project--Everesting",
      ),
      new GithubButton("https://github.com/gorddev/classical-final-project"),
    ],
  };

  // Mini Platformer
  export const mini_platformer: Project = {
    title: "Mini Platformer",
    brief:
      "Small game made in physics sim. software (VPython) for a challenge!",
    cardImg: {
      src: "platformer.png",
      alt: "Image of the platformer in action.",
    },
    HTMLDesc: "Here's a long-form project description",
    tooltip: "Very unserious project.",
    buttons: [
      new PlayButton(
        "https://www.glowscript.org/#/user/novak/folder/Individual/program/FullLevelAttempt",
      ),
    ],
  };
}
