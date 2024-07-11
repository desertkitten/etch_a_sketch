document.addEventListener(DOMContentLoaded, () => {
    const container = document.getElementById('container');
    const resetButton = document.getElementById('resetButton');

    function createGrid(size) {
        container.innerHTML = ''; // Clear the container
        for (let i = 0; i < size * size; i++) {
            const gridItem = document.createElement('div');
            gridItem.classList.add('grid-item');
            container.appendChild(gridItem);
        }
    }

    function resetGrid() {
        let size;
        do {
            size = parseInt(prompt('Enter the number of squares per side for the new grid (maximum 100):'), 10);
        } while (isNan(size) || size < 1 || size > 100);
        createGrid(size);
    }

    resetButton.addEventListener('click', resetGrid);

    // Create initial 16x16 grid
    createGrid(16);
});