export default class Woosh extends HTMLElement {
	constructor() {
	  	super();
	}

	connectedCallback() {
		const a = x => this.getAttribute(x);
	  	this.innerHTML = `<svg style="${a("style")}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${a("width")}" zoomAndPan="magnify" viewBox="0 0 375 374.999991" height="${a("height")}" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="69c360267d"><path d="M 9.90625 0 L 361 0 L 361 375 L 9.90625 375 Z M 9.90625 0 " clip-rule="nonzero"/></clipPath></defs><g clip-path="url(#69c360267d)"><path fill="#e9008e" d="M 201.960938 0.0390625 L 197.375 4.917969 C 189.964844 12.792969 182.785156 24.433594 179.773438 33.449219 C 175.695312 45.667969 179.949219 57.921875 192.003906 68.679688 C 197.441406 73.53125 201.816406 76.480469 218.183594 86.339844 C 237.074219 97.714844 243.488281 101.746094 248.757812 105.558594 C 253.566406 109.035156 259.355469 114.40625 259.355469 115.390625 C 259.355469 116.769531 247.929688 117.519531 232.714844 117.136719 C 216.214844 116.722656 193.902344 117.597656 184.578125 119.027344 C 176.988281 120.195312 166.617188 122.878906 160.335938 125.304688 C 153.269531 128.03125 148.285156 131.183594 143.332031 136.046875 C 139.433594 139.871094 138.484375 141.289062 135.019531 148.457031 C 132.867188 152.910156 129.953125 159.820312 128.550781 163.816406 C 124.132812 176.367188 122.015625 179.402344 115.222656 182.894531 C 111.542969 184.789062 104.507812 185.417969 95.613281 184.648438 C 86.09375 183.820312 76.214844 184.277344 66.816406 185.976562 C 50.234375 188.972656 41.238281 193.648438 31.023438 204.585938 C 24.71875 211.339844 16.597656 225.464844 12.097656 237.507812 L 9.90625 243.382812 L 9.980469 275.347656 C 10.027344 294.6875 10.253906 305.996094 10.554688 303.980469 C 11.4375 298.089844 13.324219 274.851562 14.128906 259.949219 C 14.511719 252.871094 15.066406 248.417969 15.957031 245.253906 C 18.734375 235.371094 27.625 218.085938 33.726562 210.683594 C 37.613281 205.972656 45.046875 199.851562 49.78125 197.464844 C 54.449219 195.109375 59.976562 193.480469 68.121094 192.058594 C 78.175781 190.300781 84.402344 190.011719 94.664062 190.820312 C 109.855469 192.015625 117.691406 190.203125 124.761719 183.84375 C 128.402344 180.570312 130.105469 177.46875 133.65625 167.625 C 137.222656 157.75 141.3125 148.53125 143.625 145.175781 C 149.988281 135.925781 161.257812 129.996094 179.433594 126.332031 C 191.402344 123.917969 199.167969 123.417969 226.960938 123.257812 C 255.523438 123.097656 262.960938 122.542969 265.242188 120.398438 C 268.769531 117.085938 265.292969 110.527344 256.371094 103.667969 C 248.554688 97.660156 243.070312 94.140625 217.273438 78.59375 C 210.613281 74.578125 203.253906 69.863281 200.921875 68.117188 C 196.042969 64.460938 190.632812 58.976562 188.371094 55.386719 C 186.34375 52.175781 184.277344 45.4375 184.277344 42.039062 C 184.277344 33.617188 193.5625 17.308594 204.652344 6.246094 L 210.871094 0.0390625 Z M 233.996094 0.0390625 L 229.542969 3.625 C 220.210938 11.132812 212.617188 21.917969 210.878906 30.136719 C 209.730469 35.570312 210.855469 41.90625 214.183594 48.738281 C 218.515625 57.628906 224.933594 64.121094 240.585938 75.449219 C 255.246094 86.058594 275.121094 102.867188 285.882812 113.753906 C 291.335938 119.265625 295.164062 124.292969 295.941406 126.957031 C 296.273438 128.089844 296.019531 128.273438 293.730469 128.5625 C 292.304688 128.742188 285.417969 129.707031 278.425781 130.710938 C 271.433594 131.714844 263.257812 132.714844 260.261719 132.929688 C 213.882812 136.277344 195.203125 138.632812 180.589844 142.976562 C 169.542969 146.257812 165.226562 149.105469 159.234375 157.074219 C 155.160156 162.496094 146.273438 179.503906 143.503906 187.1875 C 138.816406 200.183594 135.855469 203.410156 126.625 205.589844 C 121.386719 206.824219 117.964844 206.734375 103.386719 204.988281 C 79.410156 202.117188 70.949219 203.261719 57.929688 211.144531 C 49.492188 216.253906 46.203125 218.648438 41.46875 223.132812 C 33.75 230.445312 30.453125 236.859375 27.148438 251.003906 C 24.175781 263.722656 23.726562 274.660156 25.417969 293.082031 C 27.394531 314.644531 26.726562 324.070312 22.855469 329.140625 C 20.699219 331.972656 18.933594 332.800781 13.992188 333.320312 L 9.90625 333.746094 L 9.90625 374.964844 L 19.742188 374.664062 C 31.503906 374.308594 36.675781 373.019531 47.140625 367.84375 C 58.890625 362.027344 66.199219 355.289062 70.648438 346.15625 C 76.527344 334.09375 76.613281 322.191406 70.976562 300.957031 C 68.019531 289.808594 66.886719 284.285156 66.136719 277.394531 C 65.464844 271.199219 65.5 270.679688 67.039062 264.605469 C 68.664062 258.191406 72.957031 248.484375 75.25 246.039062 C 77.789062 243.328125 82.628906 243.546875 97.660156 247.042969 C 109.273438 249.746094 114.367188 250.300781 123.960938 249.914062 C 137.105469 249.382812 146.179688 247.015625 156.867188 241.332031 C 166.046875 236.445312 172.050781 230.917969 178.339844 221.558594 C 184.136719 212.925781 187.769531 204.242188 190.652344 192.101562 C 191.464844 188.679688 192.714844 184.527344 193.421875 182.875 C 194.949219 179.332031 198.402344 176.019531 202.339844 174.324219 C 205.964844 172.761719 214.710938 170.472656 220.90625 169.460938 C 227.042969 168.464844 244.703125 168.535156 263.894531 169.644531 C 290.449219 171.171875 303.558594 170.484375 318.6875 166.761719 C 329.578125 164.082031 340.503906 159.101562 347.78125 153.503906 C 362.445312 142.21875 365.097656 124.242188 354.710938 106.511719 C 348.886719 96.578125 335.160156 82.316406 318.6875 69.097656 C 304.089844 57.378906 296.296875 49.414062 292.59375 42.425781 C 291.382812 40.136719 291.148438 38.824219 291.144531 34.238281 C 291.140625 29.097656 291.257812 28.59375 293.117188 25.691406 C 295.339844 22.226562 300.667969 16.957031 304.765625 14.167969 C 309.945312 10.640625 317.207031 7.335938 329.890625 2.738281 L 337.15625 0.105469 L 285.578125 0.0703125 Z M 233.996094 0.0390625 " fill-opacity="1" fill-rule="nonzero"/></g></svg>`;
	}
}