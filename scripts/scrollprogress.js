let scrollProgress = () => {
	let progress = document.documentElement.scrollTop / (document.documentElement.offsetHeight - document.documentElement.clientHeight) * 100;
	document.getElementById('navbar').style = `background: linear-gradient(to right, #e2eeff ${progress}%, #fefefe ${progress}%);`;
	console.log(progress);
}

document.addEventListener('scroll', scrollProgress);

scrollProgress();