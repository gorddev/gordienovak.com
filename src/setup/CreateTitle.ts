interface FloatingLetterOptions {
  floatRange?: number; // Maximum pixels to float up/down
  floatSpeed?: number; // Duration of float cycle in seconds
  reactRange?: number; // Maximum pixels to push away from cursor
  easeFactor?: number; // Speed of transition back to baseline
}

/**
 * Converts text into individual floating spans that react to the cursor.
 * @param text The string content to convert into interactive letters.
 * @param domId The ID of the target element to inject the spans into.
 * @param options Custom tuning for the animation effects.
 */
function createFloatingText(
  text: string,
  domId: string,
  className: string,
  options: FloatingLetterOptions = {},
): void {
  const container = document.getElementById(domId);
  if (!container) return;

  // Configuration defaults
  const {
    floatRange = 1,
    floatSpeed = 2,
    reactRange = 7,
    easeFactor = 0.1,
  } = options;

  const totalSpan = document.createElement("span");
  totalSpan.className = className;

  const letters = text.split("").map((char, index) => {
    const span = document.createElement("span");

    if (char === " ") {
      span.innerHTML = "&nbsp;";
    } else {
      span.textContent = char;
    }

    span.style.display = "inline-block";
    span.style.position = "relative";
    span.style.transition = "transform 0.1s ease-out";
    span.style.transformStyle = "preserve-3d";
    span.style.willChange = "transform";

    // Randomize initial animation offset so letters float asynchronously
    const randomOffset = Math.random() * Math.PI * 2;

    totalSpan.appendChild(span);

    return {
      element: span,
      seed: randomOffset,
      currentX: 0,
      currentY: 0,
      targetX: 0,
      targetY: 0,
    };
  });

  let mouseX = 0;
  let mouseY = 0;

  // move it around when it leaves
  totalSpan.addEventListener("mousemove", (event: MouseEvent) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
  });

  // reset when cursor leaves
  totalSpan.addEventListener("mouseleave", () => {
    letters.forEach((letter) => {
      letter.targetX = 0;
      letter.targetY = 0;
    });
  });

  function animate(): void {
    const time = performance.now() * 0.001;

    letters.forEach((letter) => {
      const rect = letter.element.getBoundingClientRect();

      const letterCenterX = rect.left + rect.width / 2;
      const letterCenterY = rect.top + rect.height / 2;

      const deltaX = letterCenterX - mouseX;
      const deltaY = letterCenterY - mouseY;
      const distance = Math.hypot(deltaX, deltaY);

      const activeRadius = 80;

      if (distance < activeRadius && distance > 0) {
        const force = (activeRadius - distance) / activeRadius;
        const angle = Math.atan2(deltaY, deltaX);

        letter.targetX = Math.cos(angle) * reactRange * force;
        letter.targetY = Math.sin(angle) * reactRange * force;
      } else {
        letter.targetX = 0;
        letter.targetY = 0;
      }

      const sineWave = Math.sin(
        time * ((2 * Math.PI) / floatSpeed) + letter.seed,
      );
      const cosWave = Math.cos(
        time * ((2 * Math.PI) / floatSpeed) * 0.3 + letter.seed * 2,
      );
      const floatY = sineWave * floatRange;
      const floatX = cosWave * floatRange * 0.3;

      letter.currentX += (letter.targetX - letter.currentX) * easeFactor;
      letter.currentY += (letter.targetY - letter.currentY) * easeFactor;

      const finalX = letter.currentX + floatX;
      const finalY = letter.currentY + floatY;

      letter.element.style.transform = `translate3d(${finalX}px, ${finalY}px, 0)`;
    });

    requestAnimationFrame(animate);
  }

  // Initialize loop
  requestAnimationFrame(animate);

  container.appendChild(totalSpan);
}

export default function createTitle(domID: string) {
  createFloatingText("gordie", domID, "gcolor1");
  createFloatingText("novak", domID, "");
  createFloatingText(".com", domID, "smaller", {
    floatRange: 0.2,
    floatSpeed: 0.2,
    reactRange: 5,
    easeFactor: 0.3,
  });
}
