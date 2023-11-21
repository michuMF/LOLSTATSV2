export const selectRegion = region => {
	const popUpRegion = document.querySelector(".pop-up-regions")
	const regionNames = document.querySelectorAll(".name-region")
	const selectedRegion = document.querySelector(".selected-region")
	const showRegion = document.querySelector(".show-regions")
	const closeRegion = document.querySelector(".close-regions")

	showRegion.addEventListener("click", () => {
		popUpRegion.classList.remove("hidden")
		showRegion.classList.add("hidden")
		closeRegion.classList.remove("hidden")
	})
	closeRegion.addEventListener("click", () => {
		popUpRegion.classList.add("hidden")
		showRegion.classList.remove("hidden")
		closeRegion.classList.add("hidden")
	})

	regionNames.forEach(reg => {
		reg.addEventListener("click", e => {
			region = e.target.textContent

			popUpRegion.classList.add("hidden")
			closeRegion.classList.add("hidden")
			showRegion.classList.remove("hidden")

			if (region === "EUNE") {
				selectedRegion.textContent = "EUNE"
			} else if (region === "EUW") {
				selectedRegion.textContent = "EUW"
			} else if (region === "NA") {
				selectedRegion.textContent = "NA"
			} else if (region === "KR") {
				selectedRegion.textContent = "KR"
			}
		})
	})
}
