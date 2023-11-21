import { api } from "../searchSummoner"
export const mostThreePlayedChampion = async (puuid, region) => {
	const fetchThreeChampion = async puuid => {
		const response = await fetch(
			`https://${region}.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-puuid/${puuid}?api_key=${api}`
		)
		const data = await response.json()

		const championOne = {
			championId: data[0].championId,
			championLevel: data[0].championLevel,
			championPoints: data[0].championPoints,
		}

		const championTwo = {
			championId: data[1].championId,
			championLevel: data[1].championLevel,
			championPoints: data[1].championPoints,
		}
		const championThree = {
			championId: data[2].championId,
			championLevel: data[2].championLevel,
			championPoints: data[2].championPoints,
		}

		return [championOne, championTwo, championThree]
	}

	const threeChamp = await fetchThreeChampion(puuid)

	const fetchAllChamp = async () => {
		const response = await fetch(
			"https://ddragon.leagueoflegends.com/cdn/13.22.1/data/en_US/champion.json"
		)

		const data = await response.json()
		const champArr = Object.values(data.data)

		const [champOne, champTwo, champThree] = [
			...threeChamp.map(({ championId }) =>
				champArr.find(champ => champ.key == championId)
			),
		]

		const filterChampArr = [champOne, champTwo, champThree]
		return { filterChampArr, threeChamp }
	}
	const threeMostPlayedChampions = await fetchAllChamp()

	return threeMostPlayedChampions
}
