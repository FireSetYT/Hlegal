import '../scss/style.scss'

(function () {
	const isOpen = document.querySelector(".header__box-burger")
	const isClose = document.querySelector(".header__nav-close")
	const navigation = document.querySelector(".header__nav")

	isOpen.addEventListener('click', () => {
		navigation.classList.add('active')
	})

	isClose.addEventListener('click', () => {
		navigation.classList.remove('active')
	})
})();

(function () {
	const tabItems = document.querySelectorAll(".tabs__links-item")
	const tabContents = document.querySelectorAll('.tabs__content-item')

	tabItems.forEach((tab, inx) => {
		tab.addEventListener("click", () => {
			tabItems.forEach(tab => {
				tab.classList.remove('active')
			})
			tabContents.forEach(content => {
				content.classList.remove('active')
			})

			tabItems[inx].classList.add('active')
			tabContents[inx].classList.add('active')
		})
	})
})();
