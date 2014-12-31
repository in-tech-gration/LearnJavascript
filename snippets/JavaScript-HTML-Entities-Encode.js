function htmlEntities(str) {

    return String(str)
    	.replace(/&/g, '&amp;')
    	.replace(/</g, '&lt;')
    	.replace(/>/g, '&gt;')
    	.replace(/"/g, '&quot;');

}

/*** http://css-tricks.com/snippets/javascript/htmlentities-for-javascript/ ***/