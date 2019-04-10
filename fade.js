
var FadeInOut = function (sx, x, clb, eclb, duration) {
	this.x = sx;
	var duration = duration; // in ms
	this.nextX = x;
	var startTime;
	var _callback = clb;
	var _callbackEnd = eclb;

	this.anim = function(time) {
	  if (!startTime) // it's the first frame
	    startTime = time || performance.now();

	  // deltaTime should be in the range [0 ~ 1]
	  var deltaTime = Math.sqrt((time - startTime) / duration);
	  // currentPos = previous position + (difference * deltaTime)
	  var currentX = this.x + ((this.nextX - this.x) * deltaTime);

	  if (deltaTime >= 1) { // this means we ended our animation
	    this.x = this.nextX; // reset x variable
	    startTime = null; // reset startTime
	    _callback(x); // draw the last frame, at required position
	    _callbackEnd();
	  } else {
	    _callback(currentX);
	    requestAnimationFrame(this.anim.bind(this)); // do it again
	  }
	}
}