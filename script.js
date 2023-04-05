const container = document.querySelector("#container");

function generateGrid() {
  container.replaceChildren(); //clear grid
  let size = 101;
  while(size > 100 || size < 2) {
    size = prompt("Input grid size (2-100)");
  }
  for (let i = 0; i < size; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < size; j++) {
      const el = document.createElement("div");
      el.classList.add("grid-element");
      // el.textContent = 'tt';
      el.addEventListener("mouseover", () => el.classList.add("changed"));
      row.appendChild(el);
    }
    // el.textContent = 'tt';
    container.appendChild(row);
  }
}
// for (let i = 0; i < 32; i++) {
//   const row = document.createElement("div");
//   row.classList.add("row");
//   for (let j = 0; j < 32; j++) {
//     const el = document.createElement("div");
//     el.classList.add("grid-element");
//     // el.textContent = 'tt';
//     el.addEventListener("mouseover", () => el.classList.add("changed"));
//     row.appendChild(el);
//   }
//   // el.textContent = 'tt';
//   container.appendChild(row);
// }
