export const api = "RGAPI-8493f798-9e09-448b-afd1-0d669ccfea7c"
import { championModal } from "./3 Best Champion/championModal"
import { fetchMatches } from "./matchHistory/fetchMatches"
import { selectRegion } from "./selectRegion"

export const summonerData = () => {
	selectRegion()

	const findSummonerInput = document.querySelector(".find-summoner-input")
	const findSummonerBtn = document.querySelector(".find-summoner-btn")
	const showBtn = document.querySelector(".show-champion")
	const hideGamesBtn = document.querySelector(".hide-games")
	const hideChampionBtn = document.querySelector(".hide-champion")
	const summonerModal = document.querySelector(".three-most-played-champion")

	findSummonerBtn.addEventListener("click", async () => {
		const selectedRegion = document.querySelector(".selected-region")
		hideGamesBtn.classList.add("hidden")
		hideChampionBtn.classList.add("hidden")
		const matchHistoryDiv = document.querySelector(".last-games")
		matchHistoryDiv.innerHTML = ""
		summonerModal.innerHTML = ""

		try {
			let region = "eun1"
			let server = "europe"
			if (selectedRegion.textContent === "EUNE") {
				region = "eun1"
				server = "europe"
			} else if (selectedRegion.textContent === "EUW") {
				region = "euw1"
				server = "europe"
			} else if (selectedRegion.textContent === "NA") {
				region = "na1"
				server = "americas"
			} else if (selectedRegion.textContent === "KR") {
				region = "kr"
				server = "asia"
			}
			const nickname = findSummonerInput.value

			// Check if the nickname has changed
			const response = await fetch(
				`https://${region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${nickname}?api_key=${api}`
			)
			const data = await response.json()
			showBtn.classList.remove("hidden")
			championModal(data, region, server)

			fetchMatches(data, region, server)
		} catch (error) {
			console.log(error)
		}
	})
}
