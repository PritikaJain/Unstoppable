var pics = [
	"hey/ABC1.jpg",
	"hey/ABC2.jpg",
	"hey/ABC3.jpg",
	"hey/ABC4.jpg",
	"hey/ABC5.jpg",
	"hey/ABC6.jpg",
	"hey/ABC7.jpg",
	"hey/ABC8.jpg",
	"hey/ABC9.jpg",
	"hey/ABC10.jpg",
	"hey/ABC11.jpg",
	"hey/ABC12.jpg",
	"hey/ABC13.jpg",
	"hey/ABC14.jpg",
	"hey/ABC15.jpg",
	"hey/ABC16.jpg",
	"hey/ABC17.jpg",
	"hey/ABC18.jpg",
	"hey/ABC19.jpg",
	"hey/ABC20.jpg",
	"hey/ABC21.jpg",
	"hey/ABC22.jpg",
	"hey/ABC23.jpg",
	"hey/ABC24.jpg",
	"hey/ABC25.jpg",
	"hey/ABC26.jpg",
	"hey/ABC27.jpg",
	"hey/ABC28.jpg",
	"hey/ABC29.jpg",
	"hey/ABC30.jpg",
	"hey/ABC31.jpg",
	"hey/ABC32.jpg",
	"hey/ABC33.jpg",
	"hey/ABC34.jpg",
	"hey/ABC35.jpg",
	"hey/ABC36.jpg",
	"hey/ABC37.jpg",
	"hey/ABC38.jpg",
	"hey/ABC39.jpg",
	"hey/ABC40.jpg",
	"hey/ABC41.jpg",
	"hey/ABC42.jpg",
	"hey/ABC43.jpg",
	"hey/ABC44.jpg",
	"hey/ABC45.jpg",
	"hey/ABC46.jpg",
	"hey/ABC47.jpg",
	"hey/ABC48.jpg",
	"hey/ABC49.jpg",
	"hey/ABC50.jpg",
	"hey/ABC51.jpg",
	"hey/ABC52.jpg",
	"hey/ABC53.jpg",
	"hey/ABC54.jpg",
	"hey/ABC55.jpg",
	"hey/ABC56.jpg",
];

var btn = document.querySelector("button");

var img = document.querySelector("img");
var counter =1;
btn.addEventListener("click" , function(){
	if(counter === 56){
		counter = 0;
	}
	img.src=pics[counter]
	counter=counter+1;
	});

// var myImage = document.querySelector('img');

// myImage.onclick = function() {
//     var mySrc = myImage.getAttribute('src');
//     if(mySrc === 'hey/ABC1.jpg') {
//       myImage.setAttribute ('src','hey/ABC2.jpg');
//     } else {
//       myImage.setAttribute ('src','hey/ABC1.jpg');
//     }
// }

