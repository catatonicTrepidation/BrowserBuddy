

var myIMG = document.createElement('img');

//myIMG.src = http://media.tumblr.com/99e6dff8ba2ec3252b55ea59c46010bd/tumblr_inline_mlhctpF4k61qz4rgp.png;
myIMG.src = 'chrome-extension://cgbnemclafkkaeoiidcjcoegbncpfdbn/Images/MiodaIbuki1.png';

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




