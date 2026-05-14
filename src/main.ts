import CreateBackground from "./setup/CreateBackground";
import CreateLibraries from "./setup/CreateLibraries";
import CreateProjects from "./setup/CreateProjects";
import CreateTitle from "./setup/CreateTitle";
/**
 * Creates and initializes an isolated morphing canvas instance.
 * @param containerSelector The CSS selector for the specific component container element.
 */
let morphSeed: number = 0;
function createMorphingComponent(containerSelector: string) {
  const container = document.querySelector(containerSelector) as HTMLDivElement;
  if (!container) return;

  const canvas = container.querySelector("canvas") as HTMLCanvasElement;
  const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

  let isHovered: boolean = false;
  let animationFrameId: number;
  let time: number = 0;

  let hoverSpeed = 0.005;
  let seed = morphSeed++;
  const maxHoverSpeed = 0.02;
  const minHoverSpeed = 0.004;

  const defaultAngle = Math.PI / 4;

  function initCanvas(): void {
    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight;
  }
  initCanvas();
  window.addEventListener("resize", initCanvas);

  container.addEventListener("mouseenter", () => {
    isHovered = true;
  });

  container.addEventListener("mouseleave", () => {
    isHovered = false;
  });

  function drawSquare(
    centerX: number,
    centerY: number,
    baseSize: number,
    rotationAngle: number,
    alpha: number,
    colorShift: boolean,
  ): void {
    const rigidMorph = 24;
    const currentHalfSize = (baseSize + rigidMorph) / 2;

    const localVertices = [
      { x: -currentHalfSize, y: -currentHalfSize },
      { x: currentHalfSize, y: -currentHalfSize },
      { x: currentHalfSize, y: currentHalfSize },
      { x: -currentHalfSize, y: currentHalfSize },
    ];

    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.rotate(rotationAngle);
    ctx.globalAlpha = alpha;

    ctx.beginPath();
    localVertices.forEach((vertex, index) => {
      if (index === 0) {
        ctx.moveTo(vertex.x, vertex.y);
      } else {
        ctx.lineTo(vertex.x, vertex.y);
      }
    });
    ctx.closePath();

    const gradient = ctx.createLinearGradient(
      -canvas.width / 2,
      -canvas.height / 2,
      canvas.width / 2,
      canvas.height / 2,
    );

    gradient.addColorStop(0, colorShift ? "#aaee99" : "#226f4b");
    gradient.addColorStop(1, colorShift ? "#22dd55" : "#447f6b");

    ctx.fillStyle = gradient;
    ctx.fill();

    ctx.strokeStyle = colorShift ? "#46cd23" : "#225f4b";
    ctx.lineWidth = 3;
    ctx.stroke();

    ctx.restore();
  }

  let currentRotation: number = defaultAngle;
  let backRotation: number = defaultAngle;
  function animateBackground(): void {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (isHovered) {
      hoverSpeed += (maxHoverSpeed - hoverSpeed) * 0.08;
      time += hoverSpeed;
      const targetBaseRotation = 3.0 * Math.sin(time * 0.1 + 30) + seed;
      const targetBackRotation = -targetBaseRotation * 0.8;
      currentRotation += (targetBaseRotation - currentRotation) * 0.01;
      backRotation += (targetBackRotation - backRotation) * 0.01;
    } else {
      hoverSpeed += (minHoverSpeed - hoverSpeed) * 0.08;
      currentRotation += (defaultAngle - currentRotation) * 0.2;
      backRotation += (defaultAngle - backRotation) * 0.08;
    }

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const baseSize = Math.min(canvas.width, canvas.height) * 0.3;

    drawSquare(centerX, centerY, baseSize * 1.2, backRotation, 0.6, true);
    drawSquare(centerX, centerY, baseSize, currentRotation, 1.0, false);

    animationFrameId = requestAnimationFrame(animateBackground);
  }

  animateBackground();

  return {
    destroy: () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", initCanvas);
    },
  };
}

function main() {
  CreateBackground();
  CreateTitle("title");

  createMorphingComponent("#about");
  createMorphingComponent("#resume");

  let e = document.getElementById("title") as HTMLElement;
  e.addEventListener("mousedown", () => {
    document.body.classList.toggle("dark");
  });

  CreateProjects();
  CreateLibraries();

  (window as any).lucide?.createIcons();
}

document.addEventListener("DOMContentLoaded", main);
