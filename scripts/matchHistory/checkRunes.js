export const checkRunes = (
	getMainRuneValue,
	setMainRuneValue,
	getSecondRuneValue,
	setSecondRuneValue
) => {
	if (getMainRuneValue === 8112)
		setMainRuneValue = "perk-images/Styles/Domination/Electrocute/Electrocute.png"
	if (getMainRuneValue === 8124)
		setMainRuneValue = "perk-images/Styles/Domination/Predator/Predator.png"
	if (getMainRuneValue === 8128)
		mRune = "perk-images/Styles/Domination/DarkHarvest/DarkHarvest.png"
	if (getMainRuneValue === 9923)
		setMainRuneValue =
			"perk-images/Styles/Domination/HailOfBlades/HailOfBlades.png"

	if (getMainRuneValue === 8351)
		mainRune = "perk-images/Styles/Inspiration/GlacialAugment/GlacialAugment.png"
	if (getMainRuneValue === 8360)
		setMainRuneValue =
			"perk-images/Styles/Inspiration/UnsealedSpellbook/UnsealedSpellbook.png"
	if (getMainRuneValue === 8369)
		setMainRuneValue =
			"perk-images/Styles/Inspiration/FirstStrike/FirstStrike.png"

	if (getMainRuneValue === 8005)
		setMainRuneValue =
			"perk-images/Styles/Precision/PressTheAttack/PressTheAttack.png"
	if (getMainRuneValue === 8008)
		setMainRuneValue =
			"perk-images/Styles/Precision/LethalTempo/LethalTempoTemp.png"
	if (getMainRuneValue === 8021)
		setMainRuneValue =
			"perk-images/Styles/Precision/FleetFootwork/FleetFootwork.png"
	if (getMainRuneValue === 8010)
		setMainRuneValue = "perk-images/Styles/Precision/Conqueror/Conqueror.png"

	if (getMainRuneValue === 8437)
		setMainRuneValue =
			"perk-images/Styles/Resolve/GraspOfTheUndying/GraspOfTheUndying.png"
	if (getMainRuneValue === 8439)
		setMainRuneValue =
			"perk-images/Styles/Resolve/VeteranAftershock/VeteranAftershock.png"
	if (getMainRuneValue === 8465)
		setMainRuneValue = "perk-images/Styles/Resolve/Guardian/Guardian.png"

	if (getMainRuneValue === 8214)
		setMainRuneValue = "perk-images/Styles/Sorcery/SummonAery/SummonAery.png"
	if (getMainRuneValue === 8229)
		setMainRuneValue = "perk-images/Styles/Sorcery/ArcaneComet/ArcaneComet.png"
	if (getMainRuneValue === 8230)
		setMainRuneValue = "perk-images/Styles/Sorcery/PhaseRush/PhaseRush.png"

	if (getSecondRuneValue.style === 8100)
		setSecondRuneValue = `perk-images/Styles/7200_Domination.png`
	if (getSecondRuneValue.style === 8300)
		setSecondRuneValue = `perk-images/Styles/7203_Whimsy.png`
	if (getSecondRuneValue.style === 8000)
		setSecondRuneValue = `perk-images/Styles/7201_Precision.png`
	if (getSecondRuneValue.style === 8400)
		setSecondRuneValue = `perk-images/Styles/7204_Resolve.png`
	if (getSecondRuneValue.style === 8200)
		setSecondRuneValue = `perk-images/Styles/7202_Sorcery.png`

	return [setMainRuneValue, setSecondRuneValue]
}
