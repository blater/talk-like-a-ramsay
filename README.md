# talk-like-a-ramsay

Translates text into celebrity-chef-like NSFW very bad language.

# Installation

```
npm install talk-like-a-ramsay
```

# Usage (node)

module exports a function, require it in and execute it. 
Pass it a string and it will translate it into really bad language.

```javascript
var talkLikeARamsay = require('talk-like-a-ramsay');
console.log(talkLikeARamsay('Hello!'));
```

# Usage (web browser)

Just source the talk-like-a-ramsay.js file  and it will put 'talkLikeARamsay' on the global window object, 
so just call that function

```html
<script src='talk-like-a-pirate.js'></script>
<script>
  alert(talkLikeARamsay('Hello!'));
</script>
```

... or use requirejs.

```js
require.config({
  paths: {
    'talk-like-a-ramsay': '/path/to/talk-like-a-ramsay'
  }
});
require(['talk-like-a-ramsay'], function(talkLikeARamsay) {
  alert(talkLikeARamsay('Hello!'));
});
```

... or better still, use the node usage described above and [browserify](http://browserify.org/) it.
