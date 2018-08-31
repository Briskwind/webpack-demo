import _ from 'lodash';
import './style.css';
import ff  from './ff.png';

import Data from './data.xml';

function component() {
  var element = document.createElement('div');

  element.innerHTML = _.join(['dHello !', 'webpack'], ' ');
  element.classList.add('hello');


  console.log('data', Data);
   // 将图像添加到我们现有的 div。
  var myIcon = new Image();
  myIcon.src = ff;

  element.appendChild(myIcon);

  
  return element;
}

document.body.appendChild(component());
