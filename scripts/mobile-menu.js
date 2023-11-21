export const mobileMenu = () => {
	const phoneLink = document.querySelectorAll(".phone-menu-link")
	const desktopLink = document.querySelectorAll(".desktop-link")
	const menuMobileBtn = document.querySelector(".menu-mobile")
	const menuShowMobileModal = document.querySelector(".phone")
	const bodySummoner = document.querySelector(".find-summoner")
	const showChampion = document.querySelector(".show-champion")
	const hideChampionBtn = document.querySelector(".hide-champion")
	const menuCloseMobileModal = document.querySelector(".mobile-close")
	const showGamesBtn = document.querySelector(".show-games")
	const closeGamesBtn = document.querySelector(".hide-games")
	const championLink = phoneLink[1]
	const matchLink = phoneLink[2]
	const desktopChampionLink = desktopLink[1]
	const desktopMatchLink = desktopLink[2]
	hideChampionBtn.addEventListener("click", () => {
		championLink.classList.add("hidden")
		desktopChampionLink.classList.add("hidden")
	})
	showChampion.addEventListener("click", () => {
		championLink.classList.remove("hidden")
		desktopChampionLink.classList.remove("hidden")
	})

	showGamesBtn.addEventListener("click", () => {
		matchLink.classList.remove("hidden")
		desktopMatchLink.classList.remove("hidden")
	})
	closeGamesBtn.addEventListener("click", () => {
		matchLink.classList.add("hidden")
		desktopMatchLink.classList.add("hidden")
	})
	phoneLink.forEach(link => {
		link.addEventListener("click", () => {
			bodySummoner.style.display = "block"
			menuShowMobileModal.classList.add("hide-mobile-menu")
		})
	})

	menuMobileBtn.addEventListener("click", () => {
		bodySummoner.style.display = "none"
		menuShowMobileModal.classList.remove("hide-mobile-menu")
	})
	menuCloseMobileModal.addEventListener("click", () => {
		bodySummoner.style.display = "block"
		menuShowMobileModal.classList.add("hide-mobile-menu")
	})
}
