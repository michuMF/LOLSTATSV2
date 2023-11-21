export const matchHistory = async (object, div) => {
	console.log(object)
	const blueTeamDiv = document.createElement("div")
	const redTeamDiv = document.createElement("div")
	blueTeamDiv.classList.add("blue-team")
	redTeamDiv.classList.add("red-team")

	div.appendChild(blueTeamDiv)
	div.appendChild(redTeamDiv)

	const teamBlue = [object[0], object[1], object[2], object[3], object[4]]
	const teamRed = [object[5], object[6], object[7], object[8], object[9]]

	teamBlue.forEach(champ => {
		let {
			assists,
			kills,
			deaths,
			summonerName,
			championName,
			role,
			individualPosition,
			challenges,
			visionScore,
		} = champ

		if (championName === "FiddleSticks") {
			championName = "Fiddlesticks"
		} else {
			championName = championName
		}
		if (individualPosition === "UTILITY") {
			individualPosition = "SUPPORT"
		} else if (individualPosition === "BOTTOM") {
			individualPosition = "ADC"
		} else if (individualPosition === "MIDDLE") {
			individualPosition = "MID"
		} else {
			individualPosition = individualPosition
		}

		blueTeamDiv.innerHTML += `
		<div class='summoner pointer'>
	<div class='summoners-info hidden' 	>
		<h2>${kills}/${deaths}/${assists}</h2>
		<h2>KDA: ${challenges.kda.toFixed(2)}</h2>
		<p>killP: ${(challenges.killParticipation * 100).toFixed(2)}%</p>
		<p>GPM: ${challenges.goldPerMinute.toFixed(2)}</p>
		<p>DPM: ${challenges.damagePerMinute.toFixed(2)}</p>
		<p>VisionScore: ${visionScore}</p>
	</div>
	<button class='summoners-stats-btn' >
		<h3 class='role'>${individualPosition}</h3>	
		<div class='m-auto blue' >
			<p>${summonerName}</p>
			<img src='https://ddragon.leagueoflegends.com/cdn/13.22.1/img/champion/${championName}.png' />
			<p>${championName}</p>
		</div>
	</button>
</div>

		
		`
	})

	teamRed.forEach(champ => {
		let {
			assists,
			kills,
			deaths,
			summonerName,
			championName,
			individualPosition,
			challenges,
			visionScore,
		} = champ

		if (championName === "FiddleSticks") {
			championName = "Fiddlesticks"
		} else {
			championName = championName
		}
		if (individualPosition === "UTILITY") {
			individualPosition = "SUPPORT"
		} else if (individualPosition === "BOTTOM") {
			individualPosition = "ADC"
		} else if (individualPosition === "MIDDLE") {
			individualPosition = "MID"
		} else {
			individualPosition = individualPosition
		}

		redTeamDiv.innerHTML += `
		<div class='summoner pointer'>
	<div class='summoners-info hidden'>
	
		<h2>${kills}/${deaths}/${assists}</h2>
		<h2>KDA: ${challenges.kda.toFixed(2)}</h2>
		<p>killP: ${(challenges.killParticipation * 100).toFixed(2)}%</p>
		<p>GPM: ${challenges.goldPerMinute.toFixed(2)}</p>
		<p>DPM: ${challenges.damagePerMinute.toFixed(2)}</p>
		<p>VisionScore: ${visionScore}</p>
		
	</div>
	<button class='summoners-stats-btn' >
		<h3 class='role'>${individualPosition}</h3>	
		<div class='m-auto red' >
			<p>${summonerName}</p>
			<img src='https://ddragon.leagueoflegends.com/cdn/13.22.1/img/champion/${championName}.png' />
			<p>${championName}</p>
		</div>
	</button>
</div>
		
		
		
		`
	})
	const showMoreInfo = async () => {
		const showMoreInfoDiv = document.querySelectorAll(".summoner")

		const test = document.querySelectorAll(".summoner")

		showMoreInfoDiv.forEach(async info => {
			info.addEventListener("click", e => {
				console.log(e.target.offsetParent.classList[0])

				if (e.target.offsetParent.classList[0] == "summoner")
					info.firstElementChild.classList.remove("hidden")

				if (e.target.offsetParent.classList[0] == "summoners-info")
					info.firstElementChild.classList.add("hidden")
			})
		})
	}
	showMoreInfo()
}
