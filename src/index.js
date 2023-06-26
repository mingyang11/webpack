import imgsrc1 from '../assets/images/canvas.png';
import imgsrc2 from '../assets/images/beijing.jpeg';
import textDemo from '../assets/source/example.txt';
// import './async-module.js';
import './style.css';
import './style.less';

// print();

const container = document.getElementById('id');
const imgElement = document.createElement('img');
imgElement.src = imgsrc1;
container.appendChild(imgElement);

const imgElement2 = document.createElement('img');
imgElement2.src = imgsrc2;
container.appendChild(imgElement2);

const txtBlock = document.createElement('div');
txtBlock.style.cssText = 'width: 200px; height: 100px; background: red';
txtBlock.textContent = textDemo;
txtBlock.classList.add('hello');
container.appendChild(txtBlock);
document.body.classList.add('hello');
document.addEventListener('click', () => {
  import(/* webpackChunkName: 'math', webpackPrefetch: true */ './math').then(
    (params) => {
      // eslint-disable-next-line no-console
      console.log(params.add(1, 2), '121');
    }
  );
});
// (function () {
//   setTimeout(() => {
//     /** 在注释里添加参数
//      * @params [webpackChunkName] : 指定模块名称
//      * @params [webpackPrefetch]: 开启预加载
//      */
//     //  懒加载, webpackPrefetch: true
//     import(/* webpackChunkName: 'math' */ './math').then((params) => {
//       console.log(params, '121');
//     });
//   }, 5000);
// })();
// import lodash from 'lodash';

// console.log(lodash.join(['12', '3244e'], ' '));

/** 预加载 */
// const button2 = document.createElement('button');
// button2.textContent = '点击执行字符串打印';
// button2.addEventListener('click', () => {
//   import(
//     /* webpackChunkName: 'print', webpackPreload: true */ './print.js'
//   ).then(({ print }) => {
//     print(4, 5);
//   });
// });
// document.body.appendChild(button2);
