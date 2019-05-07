// I tried AngularJS, and it did the {{ }} thing right (to a small degree)
//  but it was missing the feature of reading <input value='...'> for initialization
//  and it was somehow extemporaneously messing up with mathjax (when my own alternative here behaves fine)
//	and you couldn't do arbitrary javascript expressions within the {{ ... }}
//  and from what I've read, AngularJS v2 just makes things worse.
// so I just wrote my own.

function Template() {
	var thiz = this;
	
	thiz.context = {};
	thiz.spans = [];

	setTimeout(function() {
		var doms = document.querySelectorAll('[templated]');
		for (var i = 0; i < doms.length; ++i) {
			thiz.addDOM(doms[i]);
		}
	
		if (thiz.done !== undefined) {
			thiz.done();
		}
	}, 0);
}

Template.prototype = {
	addDOM : function(dom) {
		var thiz = this;
		
		var r = /{{([^}]*)}}/;
		var html = dom.innerHTML;
		var templateIndex = 0;
		var match;
		while ((match = r.exec(html)) != null) {
			var templateID = 'template_' + templateIndex;
			html = html.substr(0, match.index) 
				+ '<span id="' + templateID + '">' + templateID + '</span>'
				+ html.substr(match.index + match[0].length);
			++templateIndex;
			thiz.spans.push({
				id : templateID,
				expr : match[1],
			});
		}
		dom.innerHTML = html;

		for (var i = 0; i < thiz.spans.length; ++i) {
			var templateSpan = thiz.spans[i];
			templateSpan.span = document.getElementById(templateSpan.id);
		}

		var inputs = document.getElementsByTagName('input');
		for (var i = 0; i < inputs.length; ++i) {
			(function(){
				var input = inputs[i];	
				thiz.context[input.name] = input.value;
				input.onkeyup = function() {
					thiz.context[input.name] = input.value;
					thiz.refresh(true);	//refresh everything related to it
				};
			})();
		}

		//now refresh it all
		thiz.refresh(true);
	},
	refresh : function(dontUpdateInputs) {
		for (var i = 0; i < this.spans.length; ++i) {
			var span = this.spans[i];
			var result;
			with (this.context) {
				result = eval(span.expr);
			}
			if (typeof(result) == 'number') {
				result = result.toExponential();
			}
			span.span.innerText = result;
		}

		if (!dontUpdateInputs) {
			var inputs = document.getElementsByTagName('input');
			for (var i = 0; i < inputs.length; ++i) {
				var input = inputs[i];
				input.value = this.context[input.name];
			}
		}
	}
};

var template;
window.addEventListener('load', function() {
	template = new Template();
}, false);
