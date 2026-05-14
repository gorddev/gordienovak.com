import Library from "/src/portfolio/libraries/Library";

export namespace libraries {
  // fstring library
  export const fstring: Library = {
    title: "fstring",
    brief:
      "Stack-allocated string library that can be faster than std::string.",
    githubLink: "https://github.com/gorddev/fstring#",
    dateOfCreation: "Dec. 2025",
    lucideSvg: "square-terminal",
    languages: "C++",
  };

  // static font library
  export const StaticFont: Library = {
    title: "StaticFont",
    brief: "SDl2-Renderer enabled zero-dependency font",
    githubLink: "https://github.com/gorddev/StaticFont",
    dateOfCreation: "Apr. 2026",
    lucideSvg: "a-large-small",
    languages: "C++",
  };

  // SDL_API library
  export const pigs: Library = {
    title: "pigs",
    brief: "Cross-platform application engine built with OpenGL & SDL3.",
    githubLink: "https://github.com/gorddev/pigs",
    dateOfCreation: "Mar. 2026",
    lucideSvg: "toolbox",
    languages: "C++, OpenGL",
  };
}
