function flexGrid(containerId, gridSize) {
    const container = document.getElementById(containerId);

    container.innerHTML = "";

    const itemWidth = 100 / gridSize;

    for (let i = 0; i < gridSize * gridSize; i++) {
        const gridItem = document.createElement("div");
        gridItem.style.flex = `0 0 ${itemWidth}%`;
        container.appendChild(gridItem);

    gridItem.addEventListener("mouseover", () => {
        gridItem.style.backgroundColor = "gainsboro";
        })
    }
}

const button = document.getElementById("size-button");
button.addEventListener("click", function () {
    let userSize = parseInt(prompt("How many pixels?"));

    if (userSize > 100) {
        alert("Less than 100 only!");
    } else {
        flexGrid("grid-container", userSize);
    }
});

flexGrid("grid-container", 24);
