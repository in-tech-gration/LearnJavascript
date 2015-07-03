var regexpCSS = /([\s\S]*?){([\s\S]*?)}/;

var css   = " .someclass { margin: 10px; padding: 20px; }";
var match = regexpCSS.exec(css);

console.log( 

    "\n Selector:", match[1], 
    "\n Declaration Block / Rules:", match[2] 

);

/* Reference: http://www.devbattles.com/en/sand/post-1423-Writing+a+CSS+Parser+in+JavaScript */
