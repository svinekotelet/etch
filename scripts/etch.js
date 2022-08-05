let size = 16;
const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", () => {
    clearGrid();
});


function createGrid(size) {
    const grid = document.querySelector(".grid");

    for (let i = 0; i < size * size; i++) {
        let cell = document.createElement("div");
        cell.classList.add("cell");
        cell.addEventListener("mouseover", () => {
            cell.style.cssText = "background-color: black";
        });
        grid.appendChild(cell);
    }

    grid.setAttribute("style", `grid-template-columns: repeat(${size}, 1fr); grid-template-rows: repeat(${size}, 1fr);`);
}

function clearGrid() {
    let cells = document.querySelectorAll("div.cell");
    cells.forEach(cell => cell.style.cssText = "background-color: white");
    console.log("why?");
}

createGrid(size);