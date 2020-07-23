
window.addEventListener('DOMContentLoaded', evt => {
	let iframes = `.iframe-deferred`;
	iframes = Array.from(document.querySelectorAll(iframes));
	// -----
	const iframeGenerate = (src) => {
		let iframe = document.createElement("iframe");
		iframeSetAttributes(src, iframe);
		src.append(iframe);
	};
	// -----
	const onIntersection = (entries) => {
		if (!iframes.length) observer.disconnect();
		entries.forEach((entry) => {
			if (entry.intersectionRatio > 0) {
				observer.unobserve(entry.target);
				iframeGenerate(entry.target);
			}
		});
	};
	// -----
	const iframeSetAttributes = (src, target) => {
		[...src.attributes].forEach(attr => {
			if (attr.name.startsWith('data')) {
				target.setAttribute(attr.name.slice(5), attr.value)
			}
		});
	};
	// -----
	let observer = new IntersectionObserver(onIntersection);
	iframes.forEach((iframe) => observer.observe(iframe));
})