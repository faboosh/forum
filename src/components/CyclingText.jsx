import React, { useState, useEffect } from 'react'
import { Span } from '../styles/StyledElements';

export default function CyclingText({wordList, ...rest}) {
    const [word, setWord] = useState("");
    const [cursor, setCursor] = useState(false)
    let displayCursor = false;
    
    wordList = wordList ? wordList : [
        "CONVERSATION",
        "SHITPOSTING",
        "DISCOURSE",
        "NEW WATERCOOLER",
        "ODDLY SPECIFIC",
        "SOAPBOX",
        "H̬̼̠̫̦ ̩I̝͎̤̣͟ ͈V͎̬̬͟ͅ ̹͖̼̺Ȩ̥̠̯̩̭ͅ ̪̘̯̞̮̯͙͜M̞̖͎̝̜̣̟ ̩̦̭͕I̡̙͖͇ ́Ņ̥͕͚̗̣̠̺D̲̟̹",
        "SORRY",
        "...MOVING ON"
    ]
    
    let currentWord = "";
    const TYPING_SPEED = 100;

    function writeWord(word) {
        return new Promise(async (resolve) => {
            let splitWord = word.split('');
            for (let i = 0; i < splitWord.length; i++) {
                await writeChar(splitWord[i])
            }

            await blinkCursor(5);

            await eraseWord();

            await blinkCursor(5);

            resolve();
        })
    }

    function wait(time) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve()
            }, time)
        })
    }

    function eraseWord() {
        return new Promise(async (resolve) => {
            while(currentWord.length != 0) {
                currentWord = currentWord.slice(0, -1);
                setWord(currentWord);
                await wait(TYPING_SPEED);
            }
            resolve();
        })
    }

    function writeChar(char) {
        return new Promise((resolve) => {
            currentWord += char;
            setWord(currentWord)
            setTimeout(() => {
                resolve();
            }, TYPING_SPEED)
        })
    }

    useEffect(async () => {
        let currentWord = 0;
        while(true) {
            await writeWord(wordList[currentWord]);
            currentWord++;
            
            if(currentWord == wordList.length) {
                currentWord = 0;
            }
        }
    }, [])

    async function blinkCursor(blinks) {

        return new Promise(async (resolve) => {
            for(let i = 0; i < blinks; i++) {
                await wait(TYPING_SPEED * 5)
                if(displayCursor) {
                    displayCursor = false
                } else {
                    displayCursor = true
                }

                setCursor(displayCursor)
            }

            displayCursor = true;

            setCursor(displayCursor);

            resolve();
        })

    }

    useEffect(async() => {
        blinkCursor();
    }, [])

    return (
        <Span {...rest} >{word}{cursor ? "_" : ""}</Span>
    )
}
