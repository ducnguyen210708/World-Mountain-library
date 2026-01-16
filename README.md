# Himalayan Mountain Library
Mountains from the countries India, Pakistan, China, Nepal, Bhutan, Tajikistan, Afghanistan, and Kyrgyzstan.
Mountains Range: Annapurna Himalaya, Assam Himalaya, Baiku Himalaya, Baltoro Karakoram, Batura Karakoram, Dhaulagiri Himalaya, Daxue Mountains (Hengduan Shan), Ganesh Himalaya, Garhwal Himalaya, Hispar Karakoram, Hindu Kush, Jugal Himalaya, Kangchenjunga Himalaya, Kongur Shan (Eastern Pamirs), Kula Kangri Himalaya, Labuche Himalaya, Langtang Himalaya, Lunana Himalaya, Mahalangur Himalaya, Manaslu Himalaya, Masherbrum Karakoram, Nagarze Himalaya, Nalakankar Himalaya, Nanga Parbat Himalaya, Panmah Karakoram, Pamir (Academy of Sciences Range), Rakaposhi-Haramosh Karakoram, Rimo Karakoram, Saltoro Karakoram, Saser Karakoram, Siachen Karakoram, Tian Shan, Yengisogat Karakoram, Muztagata (Eastern Pamirs).
 #

##### Returns mountains in the chosen country in the Himalayas
###### chosenCountry {string} - the name of the country to search for
###### return {list} - list of mountain names in that country or "No matches found" if there are no mountains in that country
**`function getMountainsInCountry(chosenCountry)`**
#

 
 ##### Returns mountains in the chosen mountain range in the Himalayas
 ###### chosenRange {string} - the name of the mountain range to search for
 ###### return {list} - list of mountain names in that range or "No matches found" if there are no mountains in that range
 **`function getMountainsInRange(chosenRange)`**
#

##### Returns the height of the chosen mountain in feet in the Himalayas
 ###### mountain {string} - the desired mountain
 ###### return {string} - the height of the mountain in feet or "No value found" if there is no mountain height
 **`function getMountainsHeight(mountain)`**
#

##### Returns the name of the lowest mountain in the Himalayas 
###### takes no parameter
###### return {string} - the name of the lowest mountain
 **`function lowestMountain()`**
#

##### Returns the average height of all the mountains in a country in the Himalayas
###### yourCountry {string} - the desired country
###### return {string} - the average height of all the mountains in the country or "No value found" if there is no average height of all the mountains in the country
 **`function getAverageMountainHeight(yourCountry)`**
#
