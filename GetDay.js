function getDay (day, month, year) {
let learYear=0;
let cc=0;
let allLearYears=0;
let allYears=0;
let dayOfMonth
let sumDaysOfYears=0;
let sumDaysOfLearYears=0;
const days = ['Сб','Вс','Вт','Вт','Ср','Чт','Пт']



if(year<5){

allYears = year * 360
dayOfMonth = 360 - ((month - 1)* 30 + day)
sumDaysOfYears = (allYears - dayOfMonth) % 7
console.log('b'+sumDaysOfYears)

} else if(year<10){

learYear = 1
allLearYears = learYear * 361;
allYears = (year - learYear) * 360
dayOfMonth = 360 - ((month - 1)* 30 + day)
sumDaysOfYears = (allLearYears + allYears - dayOfMonth) % 7
console.log(days[sumDaysOfYears])

} else if(year>=1000){

learYear = Math.floor(year/5)
cc = learYear - (year.toString().slice(0, 2) - Math.floor(year.toString().slice(0, 2) / 5));
allLearYears = cc * 361;
allYears = (year - cc) * 360
dayOfMonth = 360 - ((month - 1)* 30 + day)
sumDaysOfYears = (allLearYears + allYears - dayOfMonth) % 7
console.log(days[sumDaysOfYears])


} else {

learYear = Math.floor(year/5)
cc = learYear - (year.toString().slice(0, 1) - Math.floor(year.toString().slice(0, 1) / 5));
allLearYears = cc * 361;
allYears = (year - cc) * 360
dayOfMonth = 360 - ((month - 1)* 30 + day)
sumDaysOfYears = (allLearYears + allYears - dayOfMonth) % 7
console.log(days[sumDaysOfYears])


}

}

getDay(24, 08, 1001)




































