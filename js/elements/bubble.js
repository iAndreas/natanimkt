export default class Bubble extends HTMLElement {
	constructor() {
	  	super();
	}

	connectedCallback() {
		const a = x => this.getAttribute(x);
	  	this.innerHTML = `<svg class="${a("anim")}" style="${a("style")}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${a("width")}" zoomAndPan="magnify" viewBox="0 0 375 374.999991" height="${a("height")}" preserveAspectRatio="xMidYMid meet" version="1.0"><path fill="${a("color")}" d="M 2.144531 161.515625 C 0.207031 171.285156 0.0625 181.878906 2.128906 193.382812 C 15.453125 267.613281 92.9375 370.097656 178.648438 348.3125 C 215.078125 339.054688 252.226562 318.433594 285.601562 301.433594 C 335.617188 275.957031 366.511719 241.75 371.214844 183.503906 C 374.945312 137.300781 372.574219 81.398438 344.890625 42.117188 C 329.867188 20.796875 305.394531 4.933594 279.316406 5.351562 C 257.839844 5.695312 238.179688 16.550781 218.679688 25.5625 C 152.148438 56.308594 19.433594 74.28125 2.144531 161.515625 " fill-opacity="1" fill-rule="nonzero"/></svg>`;
	}
}