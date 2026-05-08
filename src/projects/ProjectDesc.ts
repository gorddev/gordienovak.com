export default class ProjectDesc {
  public static init(HTMLInnerText: string) {
    this._text = document.getElementById("projects-desc") as HTMLElement;
    this._text.innerHTML = HTMLInnerText;
    this._proj_inner_css = document.querySelector(
      ".project-desc-inner",
    ) as HTMLElement;
    this._proj_desc_css = document.querySelector(
      ".project-desc",
    ) as HTMLElement;
  }

  public static toggleProjecDesc(
    HTMLInnerText: string,
    project_root: HTMLElement,
  ): void {
    if (!this._pinned && this._project !== project_root) {
      this._close_frame = false;
      this._text.innerHTML = HTMLInnerText;
      this._proj_desc_css.classList.add("open");
      this._proj_desc_css.style.height =
        this._proj_desc_css.scrollHeight + "px";

      if (this._project) {
        //this._project.classList.remove("selected");
      }
      this._project = project_root;
    }
  }

  public static removeProjectDesc(project_root: HTMLElement): void {
    if (!this._pinned && this._project === project_root) {
      this._proj_desc_css.style.height =
        this._proj_desc_css.scrollHeight + "px";
      this._close_frame = true;
      requestAnimationFrame(() => {
        if (this._close_frame) {
          this._proj_desc_css.style.height = "0px";
        }
      });
      this._proj_desc_css.classList.remove("open");
      this._project = undefined;
    }
  }

  public static pin(HTMLInnerText: string, project_root: HTMLElement) {
    if (this._pinned && this._project === project_root) {
      //@ts-ignore
      this._project.classList.remove("selected");
      this._pinned = false;
      this.removeProjectDesc(project_root);
      this._project = undefined;
    } else {
      if (this._project) {
        this._project.classList.remove("selected");
      }
      this._pinned = false;
      this.toggleProjecDesc(HTMLInnerText, project_root);
      this._project = project_root;
      this._project.classList.add("selected");
      this._pinned = true;
    }
  }

  public static unpinProject(project_root: HTMLElement) {
    this._project = undefined;
    this._pinned = false;
  }

  static _text: HTMLElement;
  static _project?: HTMLElement;

  private static _pinned: boolean = false;
  private static _close_frame: boolean;

  private static _proj_inner_css: HTMLElement;
  private static _proj_desc_css: HTMLElement;
}
