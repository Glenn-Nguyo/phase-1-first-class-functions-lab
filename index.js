// Code your solution in this file!
const  returnFirstTwoDrivers = (  drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']) => {
    return drivers.slice(0,2)
}
const  returnLastTwoDrivers = (  drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']) => {
    return drivers.slice(-2)
}

let selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers ]

function createFareMultiplier(num){
    return function fareMultiplier(fare){
     return num * fare
    }
}
const fareDoubler = createFareMultiplier(2) 

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers( drivers, returnFirstTwoDrivers){
  return returnFirstTwoDrivers(drivers)
}

