# Fade
Simple HTML5 Fade library.

Uses Math.sqrt() to do calculations.

# Usage
```javascript
var fade = new FadeInOut(startValue, endValue, runtimeCallback, finishCallback, duration);
fade.anim();
```
```startValue``` - start value, from which animation begins

```endValue``` - end value, where animation ends

```runtimeCallback``` - executes that function every value change

```finishCallback``` - executes that function when animation ends

```duration``` - time that animation runs (in ms)

# Example

```javascript
var fade = new FadeInOut(20, 0, (value) => {
  shift = value;
}, () => {
  stopAnimation();
}, 200);
fade.anim();
``` 
