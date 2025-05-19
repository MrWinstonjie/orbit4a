function createGridTexture() {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = 512;
    canvas.height = 512;
    
    // Define pastel colors from the image
    const colors = [
        '#FFB3B3', '#FFB8B3', '#FFC4B3', '#FFD4B3', '#FFE4B3', '#FFF4B3', '#FFFBB3', '#F9FFB3',
        '#E6FFB3', '#D6FFB3', '#C6FFB3', '#B6FFB3', '#B3FFB9', '#B3FFC9', '#B3FFD9', '#B3FFE9',
        '#B3FFF9', '#B3F9FF', '#B3E9FF', '#B3D9FF', '#B3C9FF', '#B3B9FF', '#B9B3FF', '#C9B3FF'
    ];

    const gridSize = 8;
    const cellSize = canvas.width / gridSize;

    for(let i = 0; i < gridSize; i++) {
        for(let j = 0; j < gridSize; j++) {
            context.fillStyle = colors[(i * gridSize + j) % colors.length];
            context.fillRect(j * cellSize, i * cellSize, cellSize, cellSize);
            
            // Add cell numbers
            context.fillStyle = 'rgba(0, 0, 0, 0.5)';
            context.font = '20px Arial';
            context.textAlign = 'center';
            context.textBaseline = 'middle';
            const letter = String.fromCharCode(65 + i);
            const number = j + 1;
            context.fillText(letter + number, 
                j * cellSize + cellSize/2, 
                i * cellSize + cellSize/2);
        }
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    return texture;
} 