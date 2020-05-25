let repeatRegex = /Repeat/g;
testStr.match(repeatRegex);
// Returns ["Repeat", "Repeat", "Repeat"]



let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; 
let result = twinkleStar.match(starRegex); 
