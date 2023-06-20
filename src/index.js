import print from './demo';
import imgsrc1 from '../assets/images/canvas.png';
import imgsrc2 from '../assets/images/beijing.jpeg';
import textDemo from '../assets/source/example.txt';

print();

const container = document.getElementById('id');
const imgElement = document.createElement('img');
imgElement.src = imgsrc1;
container.appendChild(imgElement);

const imgElement2 = document.createElement('img');
imgElement2.src = imgsrc2;
container.appendChild(imgElement2);

const txtBlock = document.createElement('div');
// txtBlock.style.cssText = 'width: 200px; height: 100px; background: red';
txtBlock.textContent = textDemo;
container.appendChild(txtBlock);
