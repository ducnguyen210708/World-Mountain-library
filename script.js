//3
/* 
returns the height of the chosen mountain in feet
mountain {string} - the desired mountain
return {string} - the height of the mountain in feet
*/
function getMountainsHeight(mountain){
  for (var i=0; i<mountainName.length; i++){
      if(mountainName[i].toLowerCase().includes( mountain.toLowerCase() )){
        return parseInt(heightInFeet[i]) + " feet"   
      } 
  }
 return 0  
}
console.log(getMountainsHeight(" K5"))


//4
/* 
returns the name of the lowest mountain 
takes no parameter
return {string} - the name of the lowest mountain
*/
function lowestMountain(){
var lowest=""
var maxNumber=5000000
for(var i=0; i<mountainName.length; i++){ 
  if (heightInFeet[i]<maxNumber){
    maxNumber = heightInFeet[i]
    lowest = mountainName[i]
  }
}
return lowest
}
console.log(lowestMountain())



//5
/* 
returns the average height of all the mountains in a country
yourCountry {string} - the desired country
return {string} - the average height of all the mountains in the country
*/
function getAverageMountainHeight(yourCountry){
    var averageHeight= 0;
    var total = 0
for (var i=0; i<country.length; i++){
    if( country[i].toLowerCase().includes(yourCountry.toLowerCase())){
        averageHeight += parseInt(heightInFeet[i])
        total ++
    }
}
return (averageHeight/total) + " feet"
}

console.log(getAverageMountainHeight("China"))
