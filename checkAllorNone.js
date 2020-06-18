let american = "color";
let british = "colour";
let rainbowRegex= /colou?r/;
rainbowRegex.test(american); // Returns true
rainbowRegex.test(british); // Returns true



let favWord = "favorite";
let favRegex = /favou?rite/; 
let result = favRegex.test(favWord);
