const originalRotation = '0 1 0 0';
let rotationInterval;
const transform = document.querySelector('x3d scene Transform');

function switchView(view) {
  switch (view) {
    case 'front':
      transform.setAttribute('rotation', originalRotation);
      break;
    case 'back':
      transform.setAttribute('rotation', '0 1 0 3.14');
      break;
    case 'left':
      transform.setAttribute('rotation', '0 1 0 -1.57');
      break;
    case 'right':
      transform.setAttribute('rotation', '0 1 0 1.57');
      break;
    default:
      break;
  }
}


function rotateObject() {
  rotationInterval = setInterval(function() {
    var currentRotation = transform.getAttribute('rotation');
    var rotationValues = currentRotation.split(' ');
    var angle = parseFloat(rotationValues[3]) + 0.1;
    rotationValues[3] = angle.toString();
    transform.setAttribute('rotation', rotationValues.join(' '));
  }, 100);
}

function stopRotation() {
  clearInterval(rotationInterval);
}
