document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("container");
    const newGridButton = document.getElementById("newGridButton");

    function createGrid(squaresPerSide) {
        container.innerHTML = ''; // Clear existing grid
        const totalSquares = squaresPerSide * squaresPerSide;
        const squareSize = 960 / squaresPerSide;

        for (let i = 0; i < totalSquares; i++) {
            const div = document.createElement("div");
            div.classList.add("grid-item");
            div.style.width = `${squareSize}px`;
            div.style.height = `${squareSize}px`;
            container.appendChild(div);
        }
    }

    newGridButton.addEventListener("click", () => {
        let squaresPerSide = prompt("Enter the number of squares per side for the new grid (max 100):", 16);
        squaresPerSide = Math.min(100, Math.max(1, parseInt(squaresPerSide, 10)));
        createGrid(squaresPerSide);
    });

    // Create initial 16x16 grid
    createGrid(16);
});
