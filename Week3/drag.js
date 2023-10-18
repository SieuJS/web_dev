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

function initDD (obj)  {
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
      obj.style.transform = `translate(${newX}px, ${newY}px)`; // Use CSS transform
    }
  }, 10)); // Adjust the throttle delay as needed

  document.addEventListener('mouseup', () => {
    isDragging = false;
    obj.style.cursor = 'grab';
  });
}
const draggableElement = document.getElementById('draggableElement');
    initDD(draggableElement);
    draggableElement.addEventListener('mousedown',)
     // Initialize drag-and-drop for the element