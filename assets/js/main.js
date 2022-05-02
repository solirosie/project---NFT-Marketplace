// Toggle Like & Dislike
	function toggleLike(x) {
		x.classList.toggle("icon--liked");
	}

// Modal
	const btnMenu = document.querySelector('.js-btn-menu')
	const modal = document.querySelector('.js-modal')
	const modalContainer = document.querySelector('.js-modal-container')
	const modalCloseIcon = document.querySelector('.js-modal-close-icon')
	const modalCloseBtns = document.querySelectorAll('.js-modal-close')

	function showModal(){
		modal.classList.add('open')
	}
	function hideModal(){
		modal.classList.remove('open')
	}
	for (const modalCloseBtn of modalCloseBtns){
		modalCloseBtn.addEventListener('click', hideModal)
	}
	btnMenu.addEventListener('click', showModal)
	modalCloseIcon.addEventListener('click', hideModal)
	modal.addEventListener('click', hideModal)
	modalContainer.addEventListener('click', function(event){
		event.stopPropagation()
	});
	

	const btnBuynow = document.querySelector('.js-btn-buynow')
	const modalBuynow = document.querySelector('.js-modal-buynow')
	const closeBuynow = document.querySelector('.js-modal-buynow-close')
	const modalBuynowContainer = document.querySelector('.js-modal-buynow-container')

	function showModalBuynow(){
		modalBuynow.classList.add('open')
	}
	function hideModalBuynow(){
		modalBuynow.classList.remove('open')
	}
	closeBuynow.addEventListener('click', hideModalBuynow)
	modal.addEventListener('click', hideModalBuynow)
	
	btnBuynow.addEventListener('click', showModalBuynow)