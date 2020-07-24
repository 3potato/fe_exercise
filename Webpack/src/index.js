import _ from 'lodash';
// import './style/common.css'
import './style/index.scss'

function component() {
  var element = document.createElement('div');


 // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello1112', 'webpack'], ' ');

  return element;
}




document.body.appendChild(component());



// import './index.less';
// var btn = document.createElement('button');
// btn.innerHTML = '新增';
// document.body.appendChild(btn);

// btn.onclick = function() {
// 	var div = document.createElement('div');
// 	div.innerHTML = 'item';
// 	document.body.appendChild(div);
// }

import counter from './counter';
import number from './number';

counter();
number();

if(module.hot) {
    module.hot.accept('./number', () => {
        document.body.removeChild(document.getElementById('number'));
        number();
    })
}