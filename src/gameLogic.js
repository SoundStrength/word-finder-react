import React from 'react';
import myText from './english_words.txt';
import fileOpen from 'https://unpkg.com/browser-fs-access';

export function testy () {
    //const fs = require("fs");
    fetch('small.txt')
    .then(response => response.text())
    .then(text => console.log(text))
}

export function wordFilter (wordArray, gameLetters) {
    for (let i = 0; i < wordArray.length; i++) {
        if(wordArray[i].length>3 && wordArray[i].length<10 && wordArray[i].includes(gameLetters[0])){
            let letterUsed = gameLetters.slice();
            let wordSplit = wordArray[i].split("");
            let isWordValid = true;
            for (let j = 0; j < wordSplit.length; j++) {
                for(let k = 0; k < letterUsed.length; k++){
                    if(letterUsed[k] === wordSplit[j]){
                        letterUsed[k] = ' ';
                        break;
                    }
                    else if (letterUsed[k] !== wordSplit[j] && k === letterUsed.length-1) {
                        isWordValid = false;
                    }
                }
                if(!isWordValid){
                    break;
                }
            }
            if(isWordValid){
                console.log(wordArray[i]);
            }
            
        }
    }
}
