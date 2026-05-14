import { projects } from "/src/setup/data/ProjectData";
import ProjectCard from "../portfolio/projects/ProjectCard";
import Spotlight from "../portfolio/projects/Spotlight";

export default function CreateProjects(): void {
  let projects_div = document.getElementById("projects");
  let spotlight_div = document.getElementById("spotlight");
  if (!projects_div) throw "projects div not found!";
  if (!spotlight_div) throw "spotlight div not found!";

  // GOBLIN
  new ProjectCard(projects.Goblin_Cleanup).appendAsChild(projects_div);

  // THIS WEBSITE
  new ProjectCard(projects.gordienovak_com).appendAsChild(projects_div);

  // Everesting Simulation
  new ProjectCard(projects.everesting).appendAsChild(projects_div);

  // Mini Platformer
  new ProjectCard(projects.mini_platformer).appendAsChild(projects_div);

  // Fractal VISUALIZER
  new ProjectCard(projects.Fractal_Visualizer).appendAsChild(projects_div);
  new Spotlight(projects.Fractal_Visualizer).appendAsChild(spotlight_div);

  //www.glowscript.org/#/user/novak/folder/Individual/program/FullLevelAttempt
}
