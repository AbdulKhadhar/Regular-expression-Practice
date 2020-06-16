let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
multipleA.test(A4); // Returns true
multipleA.test(A2); // Returns false



let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/; 
let result = ohRegex.test(ohStr);
