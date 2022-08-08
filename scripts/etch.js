let size = 16;

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", () => {
    clearGrid();
});

// const sizeSlider = document.querySelector(".sizeSlider");
// sizeSlider.addEventListener("input", () => {
//     size = this.value;
//     createGrid(size);
//     console.log(size);
// });


function createGrid(n) {
    const grid = document.querySelector(".grid");

    for (let i = 0; i < n * n; i++) {
        let cell = document.createElement("div");
        cell.classList.add("cell");
        cell.addEventListener("mouseover", () => {
            cell.style.cssText = "background-color: black";
        });
        grid.appendChild(cell);
    }

    grid.setAttribute("style", `grid-template-columns: repeat(${n}, 1fr); grid-template-rows: repeat(${n}, 1fr);`);
}

function clearGrid() {
    let cells = document.querySelectorAll("div.cell");
    cells.forEach(cell => cell.remove());
    createGrid(size);
}

function refreshGrid(n) {
    size = n;
    clearGrid();
    
}

createGrid(size);