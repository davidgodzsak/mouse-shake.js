# mouse-shake.js
Detect mouse shaking event in JavaScript

##Basic usage

Add mouse-shake.js to your project e.g: 

```html
<script src="./js/mouse-shake.js"></script>
```

Then add a `mouseshake` EventListener on `document` to your JavaScript:

```javascript
document.addEventListener("mouseshake",function(e){
  console.log("Shake it original!");
});
```

##Using with jQuery

jQuery `.on` method will detect the event too: 
```javascript
$(document).on("mouseshake", function(e) {
  console.log("Shake it jQuery!");
});
```

##Firing the event

When the user shakes their mouse, the script will detect it. It sums the direction changes under a certain time. When it exceeds the limit, the event is fired. 

##Todo

- Detecting the events of mouse shake + mouse buttons pressed
- Add the ability to configure event target, detection on target
