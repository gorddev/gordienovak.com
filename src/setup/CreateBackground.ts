export default function CreateBackground() {
  const svgNS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNS, "svg");

  svg.setAttribute("class", "abstract-bg");
  svg.setAttribute("viewBox", "0 0 1440 900");
  svg.setAttribute("preserveAspectRatio", "xMidYMid slice");

  const blobs = [
    {
      d: "M-150,150 Q50,-50 250,150 T650,250 T350,650 Z",
      fill: "rgba(34, 111, 75, 0.05)",
    },
    {
      d: "M1590,50 Q1300,200 1200,450 T1400,850 T1650,550 Z",
      fill: "rgba(50, 175, 91, 0.04)",
    },
    {
      d: "M200,700 Q450,500 700,650 T850,950 T300,1050 Z",
      fill: "rgba(184, 213, 185, 0.05)",
    },
    {
      d: "M600,100 Q800,-50 1000,150 T900,500 T500,400 Z",
      fill: "rgba(50, 175, 91, 0.03)",
    },
    {
      d: "M-50,500 Q150,400 300,600 T150,900 T-100,750 Z",
      fill: "rgba(34, 111, 75, 0.03)",
    },
    {
      d: "M1100,200 Q1250,50 1450,100 T1350,450 T1050,350 Z",
      fill: "rgba(232, 245, 233, 0.06)",
    },
    {
      d: "M450,450 Q650,300 800,500 T650,800 T350,700 Z",
      fill: "rgba(50, 175, 91, 0.02)",
    },
  ];

  blobs.forEach((data) => {
    const path = document.createElementNS(svgNS, "path");
    path.setAttribute("d", data.d);
    path.setAttribute("fill", data.fill);
    svg.appendChild(path);
  });

  document.body.prepend(svg);
}
