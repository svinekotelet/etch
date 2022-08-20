let size = 16;
let color = "black"
let greyMode = false;
let rainbowMode = false;
let borderType = "solid";

createGrid(size);

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", () => {
    clearGrid();
});

const border = document.querySelector(".border");
border.addEventListener("change", () => {
    borderType = document.forms.border_form.border_type.value;
    clearGrid();
});

const colorSetting = document.querySelector(".colorForm");
colorSetting.addEventListener("change", () => {
    switch (document.forms.colorForm.colorMode.value) {
        case "black": 
            greyMode = false;
            rainbowMode = false;
            break;
        case "grey":
            greyMode = true;
            rainbowMode = false;
            break;
        case "rainbow":
            greyMode = false;
            rainbowMode = true;                
            break;
    }
    clearGrid();
});

function createGrid(n) {
    const grid = document.querySelector(".grid");

    for (let i = 0; i < n * n; i++) {
        let cell = document.createElement("div");
        cell.classList.add("cell");
        cell.style.borderStyle = borderType;
        if (greyMode) {
            cell.style.opacity = 0;
            cell.style.borderColor = rgba(0,0,0,1);
        }
        cell.addEventListener("mouseover", () => {
            if (greyMode) {
                cell.style.opacity = (parseInt(cell.style.opacity * 10) + 2) / 10;
            }
            cell.style.backgroundColor = color;
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

