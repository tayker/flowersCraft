window.addEventListener('load', function(){
	var preloader = document.getElementById('preloader');
	
	preloader.classList.add('load');
});

document.addEventListener('DOMContentLoaded', function(){
	AOS.init();
	
	var imgs = document.querySelectorAll('.img-preview[data-good]');
	var preview = document.getElementById('previewModal');
	var closeBtns = document.querySelectorAll('.close_parrent');
	
	imgs.forEach(function(e){
		let current = e;
		e.addEventListener('click', function(e){
			e.preventDefault();
			console.log(current.dataset.good);
			preview.classList.add('active');
		})
	})
	
	closeBtns.forEach(function(e){
		let current = e;
		
		e.addEventListener('click', function(e){
			current.parentNode.classList.remove('active');
		})
	})
});

