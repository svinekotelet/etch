let size = 16;
createGrid(size);

function createGrid(size) {
    const grid = document.querySelector(".grid");

    for (let i = 0; i < size * size; i++) {
        let cell = document.createElement("div");
        cell.classList.add("cell");
        grid.appendChild(cell);
    }

    grid.setAttribute("style", `grid-template-columns: repeat(${size}, 1fr); grid-template-rows: repeat(${size}, 1fr);`);
}