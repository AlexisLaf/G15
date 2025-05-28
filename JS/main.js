// ======================================================================== CACHING ======================================================================== //

// Caching variables for future uses.
var bottomTriangles = document.getElementById("bottom");		// Overall face container.
var topTriangles = document.getElementById("top");		// Overall face container.

var face = document.getElementById("face");				// Div of the face
var img_face = document.getElementById("img-face");		// Face image.

var rEye = document.getElementById("right-eye");
var rBg  = document.getElementById("right-eye-background");
var lEye = document.getElementById("left-eye");
var lBg  = document.getElementById("left-eye-background");

// ======================================================================== EYES ======================================================================== //

// Detecting when the character moves its eyes (when mouse moves).
document.getElementById("face-container").addEventListener("mousemove", event => MoveEyes(event));

// Function to move the eyes of the character.
function MoveEyes(event)
{
	// Right eye.
	var rX = event.pageX - (getOffset(rBg).left) - (rEye.width / 2);
	var rY = event.pageY - (getOffset(rBg).top) - (rEye.height / 2);
	var rLength = Math.sqrt(rX * rX + rY * rY);
	var rCoeff = Math.min(Math.max(rLength * rLength / 16, -4), 4);
	var rNX = rCoeff * rX / rLength;
	var rNY = rCoeff * rY / rLength;
	rEye.style.transform="translate(" + (11 + rNX) + "%, " + (8 + rNY) + "%)";

	// Left eye.
	var lX = (getOffset(lBg).left) + (lEye.width / 2);
	var lY = (getOffset(lBg).top) + (lEye.height / 2);
	var lTX = event.pageX - lX;
	var lTY = event.pageY - lY;
	var lLength = Math.sqrt(lTX * lTX + lTY * lTY);
	var lCoeff = Math.min(Math.max(lLength * lLength / 16, -4), 4);
	var lNX = lCoeff * lTX / lLength;
	var lNY = lCoeff * lTY / lLength;
	lEye.style.transform='translate(' + (-11 + lNX) + '%, ' + (8 + lNY) + '%)';
}

// Returns div offset.
function getOffset(element)
{
	if (!element.getClientRects().length)
	{
	return { top: 0, left: 0 };
	}

	let rect = element.getBoundingClientRect();
	let win = element.ownerDocument.defaultView;
	return (
		{
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		}
	);   
}

// ======================================================================== CENTER FACE ======================================================================== //

// Detects when to recenter the face : when the screen is resized OR when the page is first loaded.
addEventListener("resize", CenterFace);
window.addEventListener("DOMContentLoaded", CenterFace);

// Function to center the face (please help this is an ordeal).
function CenterFace()
{
	console.log((topTriangles.clientHeight - 0.5 * img_face.clientHeight) + "px")
    face.style.marginTop = (topTriangles.clientHeight - 0.5 * img_face.clientHeight) + "px";
    rEye.style.marginTop = (topTriangles.clientHeight - 0.5 * img_face.clientHeight) + "px";
    rBg.style.marginTop = (topTriangles.clientHeight - 0.5 * img_face.clientHeight) + "px";
    lEye.style.marginTop = (topTriangles.clientHeight - 0.5 * img_face.clientHeight) + "px";
    lBg.style.marginTop = (topTriangles.clientHeight - 0.5 * img_face.clientHeight) + "px";
}