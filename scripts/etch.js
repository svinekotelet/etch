let size = 16;
let color = "black";
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

function clearGrid() {
    let cells = document.querySelectorAll("div.wrapper");
    cells.forEach(cell => cell.remove());
    createGrid(size);
}

function refreshGrid(n) {
    size = n;
    clearGrid(); 
}

function createGrid(n) {
    const grid = document.querySelector(".grid");

    for (let i = 0; i < n * n; i++) {
        let wrapper = document.createElement("div");
        wrapper.classList.add("wrapper");
        wrapper.style.borderStyle = borderType;

        let cell = document.createElement("div");
        cell.classList.add("cell");

        if (greyMode) {
            cell.style.opacity = 0;
        }
        cell.addEventListener("mouseover", () => {
            if (greyMode) {
                cell.style.opacity = (parseInt(cell.style.opacity * 10) + 2) / 10;
            }
            cell.style.backgroundColor = color;
        });
        wrapper.appendChild(cell);
        grid.appendChild(wrapper);
    }

    grid.setAttribute("style", `grid-template-columns: repeat(${n}, 1fr); grid-template-rows: repeat(${n}, 1fr);`);
}