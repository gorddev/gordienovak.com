import LibraryCard from "/src/portfolio/libraries/LibraryCard";
import { libraries } from "./data/LibraryData";

export default function CreateLibraries(): void {
  let libraries_div = document.getElementById("library-list");
  if (!libraries_div) throw "libraries_div not found!";

  new LibraryCard(libraries.fstring).appendAsChild(libraries_div);
  new LibraryCard(libraries.StaticFont).appendAsChild(libraries_div);
  new LibraryCard(libraries.pigs).appendAsChild(libraries_div);
}
