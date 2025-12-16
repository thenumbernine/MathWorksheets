/*
I tried AngularJS, and it did the {{ }} thing right (to a small degree)
 but it was missing the feature of reading <input value='...'> for initialization
 and it was somehow extemporaneously messing up with mathjax (when my own alternative here behaves fine)
 and you couldn't do arbitrary javascript expressions within the {{ ... }}
 and from what I've read, AngularJS v2 just makes things worse.
so I just wrote my own.

I also tried upgrading this to ES6 class, but that automatically implies 'use strict', which disabled 'with() {}', and as far as I know, eval() has no equivalent of with(), so writing to context no longer works.
I could get around this with just copying all keys from 'this.context[]' into local variables.
But from there, what happens to written variables?  Do they all go in 'window' ?
Javascript is so fucking retarded.
*/

const Template = function() {
	const thiz = this;
	
	thiz.context = {};
	thiz.spans = [];

	setTimeout(() => {
		const doms = document.querySelectorAll('[templated]');
		for (let i = 0; i < doms.length; ++i) {
			thiz.addDOM(doms[i]);
		}
	
		if (thiz.done !== undefined) {
			thiz.done();
		}
	}, 0);
}

Template.prototype = {
	addDOM : function(dom) {
		const thiz = this;
		
		const r = /{{([^}]*)}}/;
		let html = dom.innerHTML;
		let templateIndex = 0;
		let match;
		while ((match = r.exec(html)) != null) {
			const templateID = 'template_' + templateIndex;
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

		for (let i = 0; i < thiz.spans.length; ++i) {
			const templateSpan = thiz.spans[i];
			templateSpan.span = document.getElementById(templateSpan.id);
		}

		const inputs = document.getElementsByTagName('input');
		for (let i = 0; i < inputs.length; ++i) {
			const input = inputs[i];	
			const refreshInput = (input) => {
				if (input.getAttribute('type') == 'number') {
					thiz.context[input.name] = parseFloat(input.value) || 0;
				} else {
					thiz.context[input.name] = input.value;
				}
			};
			refreshInput(input);
			input.onkeyup = e => {
				refreshInput(input);
				thiz.refresh(true);	//refresh everything related to it
			};
		}

		//now refresh it all
		thiz.refresh(true);
	},
	refresh : function(dontUpdateInputs) {
		for (let i = 0; i < this.spans.length; ++i) {
			const span = this.spans[i];
			let result;
			let error;
			with (this.context) {
				try {
					result = eval(span.expr);
				} catch (e) {
					result = e.message;
					error = true;
				}
			}
			if (error) {
				span.span.style.color = 'red';
				result = '[' + result + ']';
			}
			if (typeof(result) == 'number') {
				result = result.toExponential();
			}
			span.span.innerText = result;
		}

		if (!dontUpdateInputs) {
			const inputs = document.getElementsByTagName('input');
			for (let i = 0; i < inputs.length; ++i) {
				const input = inputs[i];
				input.value = this.context[input.name];
			}
		}
	}
};

let template;
window.addEventListener('load', e => { 
	template = new Template();
}, false);
