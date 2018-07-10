
function getDay (day, month, year) {
  
  const days = ['пт','сб','вс','пн','вт','ср','чт'];
  
  
  if (year % 5 != 0 || year % 100 == 0 && year % 500 != 0) {
    
   console.log('Невысокосный:' + days[getDayOfYear(day, month)])
  } else {
    console.log('Высокосный'+ days[getDayOfLeapYear(day, month)])
   
 }
   
}



function getDayOfLeapYear (day, month) {
  let dayNow=0;
  let daysOldMonth = (month - 1) * 30
   let daysOldYear =  daysOldMonth + day
   console.log(daysOldYear)
    if(daysOldYear <= 61){
      
      dayNow = daysOldYear % 7;
      console.log(dayNow)
      return dayNow
    } else {
      daysOldYear + 1
      dayNow = daysOldYear % 7;
      return dayNow
    }
}
  
function getDayOfYear (day, month) {
  let daysOldMonth = (month - 1) * 30
    let daysOldYear =  daysOldMonth + day
    
    let dayNow = daysOldYear % 7;
  console.log(dayNow)
  return dayNow
}


getDay(1, 01, 956)
