function getColumn(url, columnNumber){
  var column = [];
  var table = [];
  var request = new XMLHttpRequest();  
  request.open("GET", url, false);   
  request.send(null);  
  var csvData = new Array();
  var jsonObject = request.responseText.split(/\r?\n|\r/);
  for (var i = 0; i < jsonObject.length; i++) {
    csvData.push(jsonObject[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/));
  }
  table = csvData;
  column = getCol(table, columnNumber);
  return column;
}

//returns the specified column from a 2D Array
function getCol(matrix, col){
       var column = [];
       for(var i=1; i<matrix.length-1; i++){
          column.push(matrix[i][col]);
       }
       return column;
    }
  

var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/refs/heads/main/Geography/World's%20Tallest%20Mountains.csv"
var mountainName = getColumn(url, 2)
var heightInFeet = getColumn(url, 4)
var mountainRange = getColumn(url, 6)
var country = getColumn(url, 11)

//1
/* 
returns mountains in the chosen country
chosenCountry {string} - the name of the country to search for
return {list} - list of mountain names in that country
*/
function getMountainsInCountry(chosenCountry){
    var matches = [];

    for(var i = 0; i < country.length; i++){
        if(country[i].toLowerCase().includes(chosenCountry.toLowerCase())){
            matches.push(mountainName[i]);
      
        }
    }

    return matches;
}


//2
/*returns mountains in the chosen mountain range
chosenRange {string} - the name of the mountain range to search for
return {list} - list of mountain names in that range
*/

function getMountainsInRange(chosenRange){
    var matches = [];

    for(var i = 0; i < mountainRange.length; i++){
        if(mountainRange[i].toLowerCase().includes(chosenRange.toLowerCase())){
            matches.push(mountainName[i]);
        }
    }

    return matches;
}




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
if (averageHeight == 0){
  return "No value found"
}
else{
return (averageHeight/total) + " feet"
}
}



