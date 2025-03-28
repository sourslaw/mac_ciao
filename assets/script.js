// u p d a t e div w/ button click

// src="/test.html" for local
// src="/mac_ciao/test.html" for deploy
function myfunction(e) { 
	e.preventDefault();
	var iViewer = `<iframe
		src="/test.html"
		name="targetframe"
		allowTransparency="true"
		scrolling="yes"
		frameborder="0"
		style="height: 100%; width: 100%"
	>
	</iframe>`

	document.getElementById('uv').innerHTML = iViewer;
} 
