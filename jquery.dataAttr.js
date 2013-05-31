/*! http://git.io/jcda v1.0.0 by @mathias */
;jQuery.fn.dataAttr = function(attr, val) {
	return val ? this.attr('data-' + attr, val) : this.attr('data-' + attr);
};
