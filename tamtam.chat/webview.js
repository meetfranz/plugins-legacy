const path = require('path');

module.exports = (Franz, options) => {
  const getMessages = () => {
	  var text = document.getElementsByClassName('__rmw620');
    var sum = 0;
    for (var i = 0 ; i < text.length; i++){
			sum += Number(text[i].innerHTML); 
      //console.log(sum);// внутри цикла выводится - каждую итерацию
    }
    //console.log(sum);// снаружи цикла выводится - один раз
	Franz.setBadge(sum); 
  }

  Franz.loop(getMessages);
  //Franz.injectCSS(path.join(__dirname, 'css', 'franz.css'));
};
