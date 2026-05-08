import ProjectDesc from "./projects/ProjectDesc";
import CreateProjects from "./setup/CreateProjects";
import CreateTitle from "./setup/CreateTitle";

function main() {
  // Example usage:

  CreateTitle({
    titleText: "gordienovak.com",
    DOMid: "title",
  });

  CreateProjects();
}

document.addEventListener("DOMContentLoaded", main);
