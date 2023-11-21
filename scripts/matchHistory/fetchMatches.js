import { api } from "../searchSummoner"
import { matchHistory } from "./createMatchHistory"
import { checkRunes } from "./checkRunes"
const showMatches = document.querySelector(".show-games")
const hideMatches = document.querySelector(".hide-games")
const matchHistoryDiv = document.querySelector(".last-games")

const fetchSummonersSpells = async () => {
	const response = await fetch(
		"https://ddragon.leagueoflegends.com/cdn/13.22.1/data/en_US/summoner.json"
	)
	const datas = await response.json()

	const { data } = datas

	const summonerSpellArr = Object.values(data)

	return summonerSpellArr
}

export const fetchMatches = async (object, region, server) => {
	try {
		const allSummonerSpellsArr = await fetchSummonersSpells()
		console.log(allSummonerSpellsArr)

		const { accountId, id, name, profileIconId, puuid, summonerLevel } = object

		const response = await fetch(
			`https://${server}.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=3&api_key=${api}`
		)
		const matches = await response.json()

		async function fetchMatch() {
			for (const match of matches) {
				try {
					const response = await fetch(
						`https://${server}.api.riotgames.com/lol/match/v5/matches/${match}?api_key=${api}`
					)
					const oneMatch = await response.json()

					const { metadata, info } = oneMatch

					const { participants: user } = info

					const { participants } = metadata

					const summonerStats = user.find(summoner => {
						return summoner.puuid === puuid
					})

					let {
						assists,
						championName,
						champLevel,
						deaths,
						kills,
						individualPosition,
						item0,
						item1,
						item2,
						item3,
						item4,
						item5,
						item6,
						visionScore,
						win,
						timePlayed,
						summoner1Id,
						summoner2Id,
						perks,
					} = summonerStats

					const { styles } = perks

					let mainRune = styles[0].selections[0].perk
					let secondaryRunes = styles[1]
					let secRunes = ""
					let mRune = ""

					const runes = checkRunes(mainRune, mRune, secondaryRunes, mRune)

					mRune = runes[0]
					secRunes = runes[1]

					const summonerSpellsArr = allSummonerSpellsArr.filter(spell => {
						return spell.key == summoner1Id || spell.key == summoner2Id
					})

					const { image } = summonerSpellsArr

					if (!item0) {
						item0 = 7050
					}
					if (!item1) {
						item1 = 7050
					}
					if (!item2) {
						item2 = 7050
					}
					if (!item3) {
						item3 = 7050
					}
					if (!item4) {
						item4 = 7050
					}
					if (!item5) {
						item5 = 7050
					}
					if (!item6) {
						item6 = 7050
					}
					const matchContainer = document.createElement("div")
					matchContainer.classList.add("match-container")

					const leftContainer = document.createElement("div")
					leftContainer.classList.add("left-container")
					const rightContainer = document.createElement("div")
					rightContainer.classList.add("right-container")
					matchHistoryDiv.classList.add("hidden")
					matchHistoryDiv.appendChild(matchContainer)
					matchContainer.appendChild(leftContainer)
					matchContainer.appendChild(rightContainer)

					let gameStatus = ""
					if (win) {
						gameStatus = "victory"
					} else {
						gameStatus = "defeat"
					}

					leftContainer.innerHTML = `
	
				<div class="left-container relative">
			<a href="#end-content" class='go-to-end-arrow'><i class="fa-solid fa-arrow-down fa-2xl"></i></a>
				<div class="${gameStatus}">
					<h2>${gameStatus}</h2>
					<p>Match Time: ${(timePlayed / 60).toFixed(2)} s</p>
				</div>
		
				<h2>${name}</h2>
		
				<h3>${championName}</h3>
				<img src="champion/centered/${championName}_0.jpg" alt="${championName}" />
		
				<div class="summ-spels-runes">
					<div class="summoners-spells">
						<img src="https://ddragon.leagueoflegends.com/cdn/13.22.1/img/spell/${
							summonerSpellsArr[1]?.image?.full
						}" alt="${summonerSpellsArr[1]?.id}" />
						<img src="https://ddragon.leagueoflegends.com/cdn/13.22.1/img/spell/${
							summonerSpellsArr[0]?.image?.full
						}" alt="${summonerSpellsArr[0]?.id}" />
					</div>
					<div class="runes">
						<img src="${mRune}" alt="${mainRune}" />
						<img src="${secRunes}" alt="${secondaryRunes}" />
					</div>
				</div>
		
				<h3>Level: ${champLevel}</h3>
		
				<div class="game-items">
					<img src="https://ddragon.leagueoflegends.com/cdn/13.22.1/img/item/${item0}.png" alt="${item0}" />
					<img src="https://ddragon.leagueoflegends.com/cdn/13.22.1/img/item/${item1}.png" alt="${item1}" />
					<img src="https://ddragon.leagueoflegends.com/cdn/13.22.1/img/item/${item2}.png" alt="${item2}" />
					<img src="https://ddragon.leagueoflegends.com/cdn/13.22.1/img/item/${item3}.png" alt="${item3}" />
					<img src="https://ddragon.leagueoflegends.com/cdn/13.22.1/img/item/${item4}.png" alt="${item4}" />
					<img src="https://ddragon.leagueoflegends.com/cdn/13.22.1/img/item/${item5}.png" alt="${item5}" />
					<img src="https://ddragon.leagueoflegends.com/cdn/13.22.1/img/item/${item6}.png" alt="${item6}" />
				</div>
			</div>
	`
					matchHistory(user, rightContainer)
				} catch (error) {
					console.error("Error fetching match:", error)
				}
			}
		}
		fetchMatch()

		showMatches.classList.remove("hidden")

		showMatches.addEventListener("click", async () => {
			matchHistoryDiv.classList.remove("hidden")
			showMatches.classList.add("hidden")
			hideMatches.classList.remove("hidden")
		})
		hideMatches.addEventListener("click", async () => {
			showMatches.classList.remove("hidden")
			hideMatches.classList.add("hidden")
			matchHistoryDiv.classList.add("hidden")
		})
	} catch (error) {
		console.log(error)
	}
}
