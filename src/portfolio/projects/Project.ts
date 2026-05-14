// Class that represents all the parameters that make up an individual project I've completed.
import ButtonInterface from "../buttons/ButtonInterface";
import Image from "/src/generics/Image";

type Project = {
  title: string; // title of the project
  brief: string; // brief description of the project
  detail?: string; // longer description of the project.
  tooltip: string; // tooltip on hovering over the project.
  cardImg: Image; // image used for the project card
  bannerImg?: Image; // image used for the banner view of the project.
  HTMLDesc?: string; // raw HTML used for the long description of the project.
  languages?: string; // languages (like c++/java) used in creation of the projects.
  buttons: Array<ButtonInterface>; // buttons that can be used to interact with the project.
};

export default Project;
