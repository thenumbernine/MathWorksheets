// I tried AngularJS, and it did the {{ }} thing right (to a small degree)
//  but it was missing the feature of reading <input value='...'> for initialization
//  and it was somehow extemporaneously messing up with mathjax (when my own alternative here behaves fine)
//	and you couldn't do arbitrary javascript expressions within the {{ ... }}
//  and from what I've read, AngularJS v2 just makes things worse.
// so I just wrote my own.

class Template {
	constructor() {
		const thiz = this;
		
		this.context = {};
		this.spans = [];

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

	addDOM(dom) {
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
				// TODO actually interpret the type, dont just alwyas write .value since it's always a string, because JS doesn't care what the input's type is, because JS is a language made by retards.
				thiz.context[input.name] = input.value;
			};
			refreshInput(input);
			input.addEventListener('input', e => {
				refreshInput(input);
				thiz.refresh(true);	//refresh everything related to it
			});
		}

		//now refresh it all
		thiz.refresh(true);
	}
	
	refresh(dontUpdateInputs) {
		const thiz = this;
		for (let i = 0; i < this.spans.length; ++i) {
			const span = this.spans[i];
			let result;
			let error;
			//with (this.context) 
			{
				try {
					// make my own "with" since we're in strict mode since classes since ES6 and all JS is a giant piece of shit
					let code = '(() => {\n';
					for (let k in this.context) {
						code += 'const '+k+' = thiz.context["'+k+'"];\n';
//code += 'console.log("got '+k+' =", '+k+');\n';
					}
					code += 'return '+span.expr + ';\n'
						+ '})()';
//console.log('code', code);					
					result = eval(code);
//console.log('result', result);					
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
}

let template;
window.addEventListener('load', () => {
	template = new Template();
}, false);
