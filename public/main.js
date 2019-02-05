//My vvariables
let counter = 0

//-----------------

const main = () => {
	document.querySelector('p.team1ScoreLbl').textContent = 0
	document.querySelector('p.team2ScoreLbl').textContent = 0
}

//**************To add score*************
// // when a user clicks a button
// const addMyScoreTeam1 = () => {
// 	// increase the varible 'counter' by 1
// 	counter = counter + 1
// 	// shortcut : counter++
// 	// update the HTML with the new value
// 	// hey DOM, find the <p> and set your textContent = counter
// 	document.querySelector('p.team1ScoreLbl').textContent = counter
// }

const addMyScoreTeam = clickObject => {
	let myObjectName = clickObject.target.className
	counter = 0
	// increase the varible 'counter' by 1
	//counter = counter + 1
	// shortcut : counter++
	// update the HTML with the new value
	// hey DOM, find the <p> and set your textContent = counter
	if (myObjectName === 'team-2-add-2-button') {
		counter = document.querySelector('p.team2ScoreLbl').textContent
		counter++
		document.querySelector('p.team2ScoreLbl').textContent = counter
	} else {
		counter = document.querySelector('p.team1ScoreLbl').textContent
		counter++
		document.querySelector('p.team1ScoreLbl').textContent = counter
	}
}
//*************************************
//**********To subtract score**********
// const subtractMyScoreTeam1 = () => {
// 	// set counter = 0
// 	counter = counter - 1
// 	// update the html
// 	document.querySelector('p.team1ScoreLbl').textContent = counter
//}

const subtractMyScoreTeam = clickObject => {
	let myObjectName = clickObject.target.className
	if (myObjectName === 'team-2-subtract-2-button') {
		counter = document.querySelector('p.team2ScoreLbl').textContent
		counter = counter - 1
		// update the html
		document.querySelector('p.team2ScoreLbl').textContent = counter
	} else {
		counter = document.querySelector('p.team1ScoreLbl').textContent
		counter = counter - 1
		// update the html
		document.querySelector('p.team1ScoreLbl').textContent = counter
	}
}
//*************************************
//************To change names**********
// const changeMyNameTeam1 = () => {
// 	document.querySelector(
// 		'h2.team1NameLbl'
// 	).textContent = document.querySelector('.myNameTeam1Txt').value
// }

const changeMyNameTeam = clickObject => {
	let myObjectName = clickObject.target.className
	if (myObjectName === 'update-team-2-name') {
		document.querySelector(
			'h2.team2NameLbl'
		).textContent = document.querySelector('.myNameTeam2Txt').value
	} else {
		document.querySelector(
			'h2.team1NameLbl'
		).textContent = document.querySelector('.myNameTeam1Txt').value
	}
}
//*********************************

document.addEventListener('DOMContentLoaded', main)
// go the HTML (DOM)
// find the button
// add event listener
// listen for the 'click' event
// when the 'click' event happens, run the function increaseCounter
// document.querySelector('.add-one-button').addEventListener('click', increaseCounter)
// document.querySelector('.reset-button').addEventListener('click', resetCounter)

document
	.querySelector('.update-team-1-name')
	.addEventListener('click', changeMyNameTeam)
document
	.querySelector('.update-team-2-name')
	.addEventListener('click', changeMyNameTeam)

document
	.querySelector('.team-1-add-1-button')
	.addEventListener('click', addMyScoreTeam)
document
	.querySelector('.team-2-add-2-button')
	.addEventListener('click', addMyScoreTeam)

document
	.querySelector('.team-1-subtract-1-button')
	.addEventListener('click', subtractMyScoreTeam)
document
	.querySelector('.team-2-subtract-2-button')
	.addEventListener('click', subtractMyScoreTeam)
