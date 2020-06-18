let wrongText = "The sky is silver.";
let silverRegex = /silver/;
wrongText.replace(silverRegex, "blue");
// Returns "The sky is blue."



"Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');
// Returns "Camp Code"



let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/;
let replaceText = "$3 $2 $1"; 
let result = str.replace(fixRegex, replaceText);
