// mathjax config
// https://docs.mathjax.org/en/latest/web/configuration.html
MathJax = {
	tex: {
		inlineMath: [['$', '$'], ['\\(', '\\)']]
	},
	svg: {
		fontCache: 'global'
	}
};

var tryToFindMathJax = {};

tryToFindMathJax.urls = [
	'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js'
	
	// TODO update my local copies ...
	//old:
	//'file:///home/chris/Projects/christopheremoore.net/www/MathJax/MathJax.js?config=TeX-MML-AM_CHTML',
	//new:
	//'file:///home/chris/Projects/christopheremoore.net/www/MathJax/es5/tex-mml-chtml.js'
	
	//'file:///home/chris/Projects/christopheremoore.net/MathJax/MathJax.js?config=TeX-MML-AM_CHTML',
	//'/MathJax/MathJax.js?config=TeX-MML-AM_CHTML',
];

tryToFindMathJax.loadScript = function(args) {
	console.log("loading "+args.src);
	var el = document.createElement('script');
	document.body.append(el);
	el.onload = function() {
		console.log('loaded');
		if (args.done !== undefined) args.done();
	};
	el.onerror = function() {
		console.log("failed to load "+args.src);
		if (args.fail !== undefined) args.fail();
	};
	el.src = args.src;
	//el.setAttr('id', 'MathJax-script');
	//el.setAttr('async');
};

tryToFindMathJax.init = function () {
	console.log('init...');

	var i = 0;
	var loadNext = function() {
		tryToFindMathJax.loadScript({
			src : tryToFindMathJax.urls[i],
			done : function() {
				console.log("success!");
			},
			fail : function() {
				++i;
				if (i >= tryToFindMathJax.urls.length) {
					console.log("looks like all our sources have failed!");
				} else {
					loadNext();
				}
			}
		});
	}
	loadNext();
}

window.addEventListener('load', function() {
	tryToFindMathJax.init();
}, false);
