var ibuki1 = chrome.extension.getURL("Images/MiodaIbuki1.png");
var ibuki2 = chrome.extension.getURL("Images/MiodaIbuki2.png");
var ibuki3 = chrome.extension.getURL("Images/MiodaIbuki3.png");
var ibuki4 = chrome.extension.getURL("Images/MiodaIbuki4.png");
var ibuki5 = chrome.extension.getURL("Images/MiodaIbuki5.png");
var ibukiArray = [ibuki1,ibuki2,ibuki3,ibuki4,ibuki5];
//var imageSettingsArray = [[ibuki1,alt,title,opacity,bottom,left,marginLeft,position],[ibuki2,alt,title,opacity,bottom,left,marginLeft,position],etc]

var imgSelection = ibukiArray[Math.floor(Math.random() * 5)];


var myIMG = document.createElement('img');


//myIMG.src = http://media.tumblr.com/99e6dff8ba2ec3252b55ea59c46010bd/tumblr_inline_mlhctpF4k61qz4rgp.png;
<<<<<<< HEAD
//myIMG.src = 'chrome-extension://glgmaifogigloimajfdaianehkhlfjgh/Images/MiodaIbuki1.png';
//myIMG.src = chrome.extension.getURL("Images/MiodaIbuki1.png");
myIMG.src = imgSelection;

=======
//myIMG.src = 'chrome-extension://glgmaifogigloimajfdaianehkhlfjgh/Images/MiodaIbuki1.png'; /*ID location in chrome://extensions*/
myIMG.src = chrome.extension.getURL("Images/MiodaIbuki1.png");
>>>>>>> 33fc1d3264e2c16c953d6f6a054aca7c5eddcd54

myIMG.alt= 'miaow2';
myIMG.title= 'miaow';
myIMG.style.opacity= '0.5';
myIMG.style.pointerEvents='none';
myIMG.style.bottom='0%';
myIMG.style.left='50%';
myIMG.style.marginLeft='-240px';
myIMG.style.position='fixed';
myIMG.style.zIndex='1000';



document.body.insertBefore(myIMG, document.body.firstChild);


