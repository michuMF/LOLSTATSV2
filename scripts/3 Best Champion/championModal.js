import { mostThreePlayedChampion } from "./mostThreePlayedChamp"
export const championModal = async (object, region) => {
	try {
		const { name, profileIconId, puuid, summonerLevel } = object

		const summonerInfoDiv = document.createElement("div")
		const threeChampionsDiv = document.createElement("div")
		const summonerModal = document.querySelector(".three-most-played-champion")
		const showBtn = document.querySelector(".show-champion")
		const hideBtn = document.querySelector(".hide-champion")
		summonerModal.appendChild(summonerInfoDiv)
		summonerModal.appendChild(threeChampionsDiv)

		const threeMostPlayedChampion = await mostThreePlayedChampion(puuid, region)

		let { filterChampArr, threeChamp } = threeMostPlayedChampion

		const ids = filterChampArr.map(item => item.id)

		summonerInfoDiv.innerHTML = `<div class='flex-center-base-information-about-summoner'>
    <img src='https://ddragon.leagueoflegends.com/cdn/13.22.1/img/profileicon/${profileIconId}.png' alt='summoner-icon-name'  />
     <h2>${name}</h2>
		 <p>${summonerLevel}</p>
		 
     </div>
		 
     `

		const showMostPlayedChampions = async () => {
			let index = 0
			const skinsArr = []

			for (const champ of filterChampArr) {
				const championSkinsFetch = async () => {
					const championSkins = await fetch(
						`https://ddragon.leagueoflegends.com/cdn/13.22.1/data/en_US/champion/${ids[index]}.json`
					)
					const skinsData = await championSkins.json()

					const champArr = Object.values(skinsData.data)
					const champSkins = champArr.map(champ => champ.skins)

					return champSkins
				}
				let skinsChamp = await championSkinsFetch()
				skinsArr.push(skinsChamp)
				console.log(skinsChamp)
				let number = 0
				console.log(champ.id)
				console.log(skinsChamp[0][number].num)
				console.log(
					`<img class='champ-img' src=champion/centered/${champ.id}_${skinsChamp[0][number].num}.jpg' alt='${champ.id}'/>`
				)
				threeChampionsDiv.innerHTML += `
					<div class='most-played-img-champ-container top-most-played-container'>
						<h2>${champ.id}</h2>
						<h3>${champ.title.toUpperCase()}</h3>
						<div class='three-most-played-chaps-tags-button-div'>
						${champ.tags
							.map(tag => {
								return `<button>${tag}</button>`
							})
							.join("")}
					</div>
						<div class='most-played-img-champ' >
						
							<i class="fa-solid fa-arrow-left fa-2xl pointer index${index} hidden "></i>
						
							
							<img class='champ-img' src='champion/centered/${champ.id}_${
					skinsChamp[0][number].num
				}.jpg' alt='${champ.id}'/>
							
							<i class="fa-solid fa-arrow-right fa-2xl pointer index${index}"></i>
							
						</div>
						<h3 class='mastery-points'>Mastery Points : ${
							threeChamp[index].championPoints
						}</h3>
					
					</div>
					
				`

				index++
				const arrowLeft = summonerModal.querySelectorAll(".fa-arrow-left")
				const arrowRight = summonerModal.querySelectorAll(".fa-arrow-right")
				const champImg = summonerModal.querySelectorAll(".champ-img")

				const champImgArr = [...champImg]

				let numOne = 0
				let numTwo = 0
				let numThree = 0
				arrowLeft.forEach(arrow => {
					arrow.addEventListener("click", async e => {
						if (e.target.classList[4] == "index0") {
							numOne = numOne - 1
							if (numOne == 0) {
								arrowLeft[0].classList.add("hidden")
							}
							let numberArr = []
							skinsArr[0].forEach(skins => {
								skins.forEach(skin => {
									numberArr.push(skin.num)
								})
							})
							if (numOne < numberArr.length - 1) {
								arrowRight[0].classList.remove("hidden")
							}

							if (numOne >= 0) {
								champImgArr[0].src = `champion/centered/${ids[0]}_${numberArr[numOne]}.jpg`
							}
						}
						if (e.target.classList[4] == "index1") {
							numTwo = numTwo - 1
							if (numTwo == 0) {
								arrowLeft[1].classList.add("hidden")
							}
							let numberArr = []
							skinsArr[1].forEach(skins => {
								skins.forEach(skin => {
									numberArr.push(skin.num)
								})
							})
							if (numTwo < numberArr.length - 1) {
								arrowRight[1].classList.remove("hidden")
							}

							if (numTwo >= 0) {
								champImgArr[1].src = `champion/centered/${ids[1]}_${numberArr[numTwo]}.jpg`
							}
						}
						if (e.target.classList[4] == "index2") {
							numThree = numThree - 1
							if (numThree == 0) {
								arrowLeft[2].classList.add("hidden")
							}
							let numberArr = []
							skinsArr[2].forEach(skins => {
								skins.forEach(skin => {
									numberArr.push(skin.num)
								})
							})
							if (numThree < numberArr.length - 1) {
								arrowRight[2].classList.remove("hidden")
							}

							if (numThree >= 0) {
								champImgArr[2].src = `champion/centered/${ids[2]}_${numberArr[numThree]}.jpg`
							}
						}
					})
				})

				arrowRight.forEach(arrow => {
					arrow.addEventListener("click", async e => {
						if (e.target.classList[4] == "index0") {
							numOne = numOne + 1
							if (numOne > 0) {
								arrowLeft[0].classList.remove("hidden")
							}
							let numberArr = []
							skinsArr[0].forEach(skins => {
								skins.forEach(skin => {
									numberArr.push(skin.num)
								})
							})

							if (numOne == numberArr.length - 1) {
								arrowRight[0].classList.add("hidden")
							}

							champImgArr[0].src = `champion/centered/${ids[0]}_${numberArr[numOne]}.jpg`
						}
						if (e.target.classList[4] == "index1") {
							numTwo = numTwo + 1
							if (numTwo > 0) {
								arrowLeft[1].classList.remove("hidden")
							}
							let numberArr = []
							skinsArr[1].forEach(skins => {
								skins.forEach(skin => {
									numberArr.push(skin.num)
								})
							})

							if (numTwo == numberArr.length - 1) {
								arrowRight[1].classList.add("hidden")
							}

							champImgArr[1].src = `champion/centered/${ids[1]}_${numberArr[numTwo]}.jpg`
						}
						if (e.target.classList[4] == "index2") {
							numThree = numThree + 1
							if (numThree > 0) {
								arrowLeft[2].classList.remove("hidden")
							}
							let numberArr = []
							skinsArr[2].forEach(skins => {
								skins.forEach(skin => {
									numberArr.push(skin.num)
								})
							})

							if (numThree == numberArr.length - 1) {
								arrowRight[2].classList.add("hidden")
							}

							champImgArr[2].src = `champion/centered/${ids[2]}_${numberArr[numThree]}.jpg`
						}
					})
				})
			}

			hideBtn.classList.remove("hidden")
			showBtn.classList.add("hidden")
		}

		showBtn.addEventListener("click", () => {
			showMostPlayedChampions()
			threeChampionsDiv.classList.remove("hidden")
			threeChampionsDiv.classList.add("three-champions-div")
			threeChampionsDiv.innerHTML = ""
		})

		hideBtn.addEventListener("click", () => {
			summonerInfoDiv.innerHTML = `<div class='flex-center-base-information-about-summoner'>
					<img src='https://ddragon.leagueoflegends.com/cdn/13.22.1/img/profileicon/${profileIconId}.png' alt='summoner-icon-name'  />
					 <h2>${name}</h2>
					 <p>${summonerLevel}</p>
				 </div>`
			threeChampionsDiv.classList.add("hidden")
			hideBtn.classList.add("hidden")
			showBtn.classList.remove("hidden")
		})
	} catch (error) {
		console.log(error)
	}
}
