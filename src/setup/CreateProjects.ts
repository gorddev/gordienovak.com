import Project from "/src/projects/Project";
import ProjectDesc from "/src/projects/ProjectDesc";
import UseButton from "/src/buttons/UseButton";
import GithubButton from "/src/buttons/GithubButton";
import PlayButton from "/src/buttons/PlayButton";

//@ts-ignore
import FractalVisualizerHTML from "/src/projects/project-htmls/Fractal_Visualizer.html?raw";
//@ts-ignore
import goblinCleanupHTML from "/src/projects/project-htmls/Goblin-Cleanup.html?raw";

export default function CreateProjects(): void {
  let projects = document.getElementById("projects");
  if (!projects) throw "projects div not found!";

  // Fractal VISUALIZER
  new Project({
    link: "projects/fractal-visualizer/Fractal_Visualizer.html",
    title: "Fractal Visualizer",
    brief:
      "Fractal Visualization software build for St. Olaf Complex Analysis Class",
    img: "fractal-visualizer.png",
    img_alt:
      "Image of a fractal rendered with the Fractal Visualizer software.",
    HTMLDesc: FractalVisualizerHTML,
    buttons: [
      new UseButton("/projects/fractal-visualizer/Fractal_Visualizer.html"),
      new GithubButton("https://github.com/gorddev/Complex-Final-Project"),
    ],
  }).appendAsChild(projects);

  // GOBLIN
  new Project({
    link: "projects/goblin-cleanup/Goblin-Cleanup.html",
    title: "Goblin Cleanup",
    brief:
      "Quick SDL2 -> Emscripten project where you click on the goblins to kill them.",
    img: "goblin-cleanup.png",
    img_alt: "Image of the Goblin Cleanup Game",
    HTMLDesc: goblinCleanupHTML,
    buttons: [new PlayButton("/projects/goblin-cleanup/Goblin-Cleanup.html")],
  }).appendAsChild(projects);

  // THIS WEBSITE
  new Project({
    link: "projects/goblin-cleanup/Goblin-Cleanup.html",
    title: "gordienovak.com",
    brief:
      "This website! Built with Vite, Typescript, and Raw HTML with a hybrid OOP approach.",
    img: "gordienovak.png",
    img_alt: "Image just saying `gordienovak.com`",
    HTMLDesc: "<p>It's just this website lol.</p>",
    buttons: [new GithubButton("https://github.com/gorddev/gordienovak.com")],
  }).appendAsChild(projects);

  // Add the project descriptions
  ProjectDesc.init("my description");
}
