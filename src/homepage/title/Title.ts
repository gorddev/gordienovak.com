let titleSpeed: number = 0;

export default function CreateTitle(titleText: string, htmlID: string) {
  // First try and get the item with the title
  let e = document.getElementById(htmlID);
  if (!e) {
    console.log(
      "Unable to create title ",
      titleText,
      " because htmlID",
      htmlID,
      " doesn't exist!",
    );
    return;
  }

  e.className = "title-card";

  let spanContainer: HTMLElement = document.createElement("div");
  spanContainer.className = "title-card-text";

  // Now we create two span elements that form our title card.
  let s1: HTMLSpanElement = document.createElement("span");
  let s2: HTMLSpanElement = document.createElement("span");
  s1.ariaLabel = titleText; //< Make sure the screen reader doesn't read out duplicate names.
  s2.ariaHidden = "true"; //< We don't want a screen reader to read it twice

  spanContainer.append(s1, s2);
  e.appendChild(spanContainer);

  // Now we make sure that the title card extends as far out as the user might possibly zoom
  let textContent = titleText + " • ";
  s1.textContent = textContent;
  let count = 0;
  while (s1.scrollWidth < screen.width * 5) {
    textContent += titleText + " • ";
    s1.textContent = textContent;
    count++;
    if (count > 2) break;
  }
  s1.textContent += " ";
  s2.textContent = s1.textContent;

  let p1: number = 0;
  let p2: number = 0;
  let lastTime: number = 0;

  requestAnimationFrame(animate);
  function animate(time: number) {
    let dt = time - lastTime;
    lastTime = time;
    p1 += dt;
    p2 += dt;
    if (p1 > screen.width - s1.offsetWidth * 2) {
      p1 = -s1.offsetWidth;
    } else if (p2 > screen.width - s1.offsetWidth * 3) {
      p2 = -2 * s1.offsetWidth;
    }
    s1.style.transform = `translateX(${p1}px)`;
    s2.style.transform = `translateX(${p2}px)`;
    requestAnimationFrame(animate);
  }
}
