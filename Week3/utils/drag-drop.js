function throttle(func, limit) {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  }
  
  // Find the cell under the given mouse coordinates
  function findCellUnderPosition(x, y, chessBoard) {
    for (let i = 0; i < chessBoard.length; i++) {
      for (let j = 0; j < chessBoard[i].length; j++) {
        const cell = chessBoard[i][j];
        const rect = cell.getBoundingClientRect();
        if (x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom) {
          return cell;
        }
      }
    }
    return null; // No cell found
  }


export default function initDD (obj)  {
    let isDragging = false;
    let offsetX, offsetY;
  
    obj.style.position = 'absolute';
  
    obj.addEventListener('mousedown', (e) => {
      isDragging = true;
      const rect = obj.getBoundingClientRect();
      offsetX = e.clientX - rect.left;
      offsetY = e.clientY - rect.top;
      obj.style.cursor = 'grabbing';
    });
  
    document.addEventListener('mousemove', throttle((e) => {
        if (isDragging) {
            const newX = e.clientX - offsetX;
            const newY = e.clientY - offsetY;
            obj.style.left = newX + 'px';
            obj.style.top = newY + 'px';
    
          // Determine the current cell under the dragged chess piece
          const cell = findCellUnderPosition(e.clientX, e.clientY, chessBoard);
          
          if (cell !== currentCell) {
            // Remove the chess piece from the old cell
            if (currentCell) {
              currentCell.removeChild(obj);
            }
            
            // Append the chess piece to the new cell
            if (cell) {
              cell.appendChild(obj);
            }
    
            currentCell = cell;
          }
        }
      },0)); // Adjust the throttle delay as needed
  
    document.addEventListener('mouseup', () => {
      isDragging = false;
      obj.style.cursor = 'grab';
    });
}

