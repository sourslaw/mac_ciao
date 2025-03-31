// u p d a t e div w/ button click

// src="/test.html" for local
// src="/mac_ciao/test.html" for deploy

function myfunction() { 
	var iViewer = `<iframe
		src="/mac_ciao/test.html"
		name="targetframe"
		allowTransparency="true"
		scrolling="yes"
		frameborder="0"
		style="height: 100%; width: 100%"
	>
	</iframe>`

	document.getElementById('uv').innerHTML = iViewer;
	document.getElementById('myButton').innerHTML = "update w/o content warning";
} 

function myfunction_b() { 
	var iViewer = `<iframe
		src="/mac_ciao/test_b.html"
		name="targetframe"
		allowTransparency="true"
		scrolling="yes"
		frameborder="0"
		style="height: 100%; width: 100%"
	>
	</iframe>`

	document.getElementById('uv').innerHTML = iViewer;
  document.getElementById('myButton').innerHTML = "update w/ content warning";
} 

const button = document.getElementById('myButton');
let toggle = false;

function functionA() {
  console.log('load manifest w/ content warning insert');
}

function functionB() {
  console.log('load manifest w/o content warning insert');
}

button.addEventListener('click', function() {
  if (toggle) {
    functionB();
    toggle = false;
    myfunction_b()
  } else {
    functionA();
    toggle = true;
    myfunction()
  }
});

// Click Function to change the display value of the input
myfunction_b();