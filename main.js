import "./style.css"
import { mobileMenu } from "./scripts/mobile-menu"
import { summonerData } from "./scripts/searchSummoner"

const LolStats = () => {
	mobileMenu()
	summonerData()
}

LolStats()
