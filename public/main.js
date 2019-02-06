// *******My Variables*******
let counter = 0
let nameTeam1 = ''
let nameTeam2 = ''
let scoreTeam1 = 0
let scoreTeam2 = 0
let numberPeriod = 1
let newElement = document.createElement('p')

// ****************************

const main = () => {
  document.querySelector('p.team1ScoreLbl').textContent = 0
  document.querySelector('p.team2ScoreLbl').textContent = 0
}

// *************To add score*************

const addMyScoreTeam = clickObject => {
  let myObjectName = clickObject.target.className
  counter = 0
  if (myObjectName === 'team-2-add-2-button') {
    counter = document.querySelector('p.team2ScoreLbl').textContent
    if (counter < 21) {
      counter++
    }
    document.querySelector('p.team2ScoreLbl').textContent = counter
    scoreTeam2 = counter
    if (counter === 21) {
      document.querySelector('h2.team2NameLbl').textContent =
        nameTeam2 + ' WON!'
      document.querySelector('h2.team2NameLbl').classList.remove('black-text')
      document.querySelector('h2.team2NameLbl').classList.add('blue-text')
      document.querySelector('.team-1-add-1-button').disabled = true
      document.querySelector('.team-2-add-2-button').disabled = true
      document.querySelector('.team-1-subtract-1-button').disabled = true
      document.querySelector('.team-2-subtract-2-button').disabled = true
      document.querySelector('.update-team-1-name').disabled = true
      document.querySelector('.update-team-2-name').disabled = true
      document.querySelector('.savePeriod').disabled = true
    }
  } else {
    counter = document.querySelector('p.team1ScoreLbl').textContent
    if (counter < 21) {
      counter++
    }
    document.querySelector('p.team1ScoreLbl').textContent = counter
    scoreTeam1 = counter
    if (counter === 21) {
      document.querySelector('h2.team1NameLbl').textContent =
        nameTeam1 + ' WON!'
      document.querySelector('h2.team1NameLbl').classList.remove('black-text')
      document.querySelector('h2.team1NameLbl').classList.add('blue-text')
      document.querySelector('.team-1-add-1-button').disabled = true
      document.querySelector('.team-2-add-2-button').disabled = true
      document.querySelector('.team-1-subtract-1-button').disabled = true
      document.querySelector('.team-2-subtract-2-button').disabled = true
      document.querySelector('.update-team-1-name').disabled = true
      document.querySelector('.update-team-2-name').disabled = true
      document.querySelector('.savePeriod').disabled = true
    }
  }
}
// ************************************
// *********To subtract score**********
const subtractMyScoreTeam = clickObject => {
  let myObjectName = clickObject.target.className
  if (myObjectName === 'team-2-subtract-2-button') {
    counter = document.querySelector('p.team2ScoreLbl').textContent
    if (counter > 0) {
      counter--
    }

    // update the html
    document.querySelector('p.team2ScoreLbl').textContent = counter
    scoreTeam2 = counter
  } else {
    counter = document.querySelector('p.team1ScoreLbl').textContent
    if (counter > 0) {
      counter--
    }

    // update the html
    document.querySelector('p.team1ScoreLbl').textContent = counter
    scoreTeam1 = counter
  }
}

// ************************************
// ***********To change names**********

const changeMyNameTeam = clickObject => {
  let myObjectName = clickObject.target.className
  if (myObjectName === 'update-team-2-name') {
    nameTeam2 = document.querySelector('.myNameTeam2Txt').value
    document.querySelector('h2.team2NameLbl').textContent = nameTeam2
    document.querySelector('.myNameTeam2Txt').value = ''
  } else {
    nameTeam1 = document.querySelector('.myNameTeam1Txt').value
    document.querySelector('h2.team1NameLbl').textContent = nameTeam1
    document.querySelector('.myNameTeam1Txt').value = ''
  }
}
// ********************************
// ********My Period Tracker*******
const savePeriodTracker = () => {
  newElement = document.createElement('p')
  newElement.textContent =
    'Period ' +
    numberPeriod +
    ' ' +
    nameTeam1 +
    ': ' +
    scoreTeam1 +
    ' ' +
    nameTeam2 +
    ': ' +
    scoreTeam2

  document.querySelector('.myPeriodTrackerSection').appendChild(newElement)
  numberPeriod++
}
// ********************************

// ********************My Reset Function*********************
const resetCounter = () => {
  // ********* */My Variables********
  counter = 0
  nameTeam1 = ''
  nameTeam2 = ''
  scoreTeam1 = 0
  scoreTeam2 = 0
  numberPeriod = 1
  // ********************************
  // ********* My Team Name**********
  document.querySelector('p.team1ScoreLbl').textContent = 0
  document.querySelector('p.team2ScoreLbl').textContent = 0
  document.querySelector('h2.team1NameLbl').textContent = 'Team 1'
  document.querySelector('h2.team2NameLbl').textContent = 'Team 2'
  // ********************************
  // *********My Buttons*************/
  document.querySelector('.team-1-add-1-button').disabled = false
  document.querySelector('.team-2-add-2-button').disabled = false
  document.querySelector('.team-1-subtract-1-button').disabled = false
  document.querySelector('.team-2-subtract-2-button').disabled = false
  document.querySelector('.update-team-1-name').disabled = false
  document.querySelector('.update-team-2-name').disabled = false
  document.querySelector('.savePeriod').disabled = false
  // ********************************
  document.querySelector('h2.team1NameLbl').classList.add('black-text')
  document.querySelector('h2.team2NameLbl').classList.add('black-text')
  // *********My Period**************
  document.querySelector('.myPeriodTrackerSection').removeChild(newElement)
  // ********************************
}

// *************************************************************

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
document
  .querySelector('.savePeriod')
  .addEventListener('click', savePeriodTracker)

document.querySelector('.resetButton').addEventListener('click', resetCounter)
