(function() {


	var sliderContainer = document.querySelector('.slides');	
	var	sliderItems = sliderContainer.children;
	var itemsLength = sliderItems.length;
	var widthImage = sliderItems[0].children[0].offsetWidth;
	var sliderWidth = widthImage * itemsLength;
	var next = document.querySelector("#next");
	var prev = document.querySelector("#prev");
	var clonedElement;
	var firstElement;

	sliderContainer.style.width = sliderWidth + "px";

	sliderContainer.style.left = -100 + "%";
	sliderContainer.classList.add("horizTranslate");
	var makeSlide = setInterval(animation, 8000);

 
	function animation() {

		sliderContainer.style.left = parseInt(sliderContainer.style.left) + (-100) + "%";
		sliderContainer.addEventListener("transitionend",resetLeft, false);
		sliderContainer.classList.add("horizTranslate");

	};


	function resetLeft() {

		// var newElement = sliderItems[current].cloneNode(true);

		firstElement = sliderContainer.firstElementChild;
		console.log(firstElement);
		clonedElement = firstElement.cloneNode(true);
		firstElement.remove();
		sliderContainer.appendChild(clonedElement);
		sliderContainer.style.left = -100 + "%";
		sliderContainer.classList.remove("horizTranslate");

		// console.log(sliderItems[0]);
		// var removed = sliderItems[0].remove().cloneNode(true);
		// var removed = sliderItems[0].remove();
		
		// sliderItems.appendChild(removed);

		// console.log("Działa reset");
		// current++;
	}
		

})();