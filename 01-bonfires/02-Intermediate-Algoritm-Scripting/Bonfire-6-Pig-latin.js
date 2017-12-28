// Translate the provided string to pig latin.

// Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

// If a word begins with a vowel you just add "way" to the end.

function translate(str) {
    if(str[0] == "a" || str[0] == "e" || str[0] == "i" || str[0] == "o" || str[0] == "u" || str[0] == "y") {
        str += "way";
        console.log(str);
    } else {
        var vowel = "";
        //arbitary long number to start comparison at
        var num =100;
        var letters = str.toLowerCase().split("");

        if(letters.indexOf("a") != -1){
            // console.log("find a")
            vowel = "a";
            num = letters.indexOf("a");
        };

        if(letters.indexOf("e") != -1){
            // console.log("find e")
            if(num > letters.indexOf("e")){
                vowel = "e";
                num = letters.indexOf("e");
            };
        };

        if(letters.indexOf("i") != -1){
            if(num > letters.indexOf("i")){
                 // console.log("find i")
                vowel = "i";
                num = letters.indexOf("i");
            };
        };

        if(letters.indexOf("o") != -1){
            // console.log("find o")
            if(num > letters.indexOf("o")){
                vowel = "o";
                num = letters.indexOf("o");
            };
        };

        if(letters.indexOf("u")!= -1){
             // console.log("find u")
            if(num > letters.indexOf("u")){
                vowel = "u";
                num = letters.indexOf("u");
            };
        };
        
        if(letters.indexOf("y") != -1){
            // console.log("find y")
            if(num > letters.indexOf("y")){
                vowel="y";
                num = letters.indexOf("y");
            };
        };

        // console.log(num + "at " + vowel)
        var firstPart = letters.slice([num]);
        // console.log("first part " + firstPart);
        var secondPart = letters.slice(0, [num]);
        // console.log("second part " + secondPart);
        var full = firstPart.concat(secondPart);
        // console.log(full);
        str = full.join('') + "ay";
        console.log(str);
    };
       return str;
};

// Free Code Camp Tests
translate("consonant");
translate("california");
translate("paragraphs");
translate("glove");
translate("algorithm");
translate("eight");
