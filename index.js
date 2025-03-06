
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];




const returnFirstTwoDrivers = function (array){
    return array.slice(0,2);
}


const returnLastTwoDrivers = function (array){
    return array.slice(-2);
}



const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (multiplier){
    return function fareCalculation(price){
        return price * multiplier
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (arrayOfDrivers, fn){
    return fn(arrayOfDrivers)
};



// testing the functions

// console.log(returnFirstTwoDrivers(drivers));
// console.log(returnLastTwoDrivers(drivers));
// console.log(fareDoubler(100));
// console.log(fareTripler(200));
// console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers));
// console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers));