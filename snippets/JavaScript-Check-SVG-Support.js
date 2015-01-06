function supportSVG(){
	return ( !! document.createElementNS && !! document.createElementNS('http://www.w3.org/2000/svg','svg').createSVGRect )
}

function supportSVGimages(){
  return document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1");
}
