function flexGrid(containerId, gridSize) {
    const container = document.getElementById(containerId);

    container.innerHTML = "";

    const itemWidth = 100 / gridSize;

    for (let i = 0; i < gridSize * gridSize; i++) {
        const gridItem = document.createElement("div");
        gridItem.style.flex = `0 0 ${itemWidth}%`;
        container.appendChild(gridItem);

    gridItem.addEventListener("mouseover", () => {
        gridItem.style.backgroundColor = "black";
        })
    }
}

let userSize = 27;
flexGrid("grid-container", userSize);