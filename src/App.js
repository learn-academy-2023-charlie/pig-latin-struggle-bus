import React, { useState } from 'react'
import './App.css'
import butcherPigImage from './assets/butcherPig.jpeg'

const App = () => {

  // ACTION ITEM: to make the development process easier there are some preassigned words in the input field, when you are ready for your full user experience delete the test words passed to useState and pass an empty string
  const [userInput, setUserInput] = useState("apple through queen squeal fry fluent")
  const [inputTranslated, setInputTranslated] = useState("")

  // ACTION ITEM: the "myPigLatinCodeHere" function is where you will put your logic to translate the sentence entered by the user into Pig Latin
  const myPigLatinCodeHere = () => {

    // NO MODIFICATION NEEDED: the variable "arrayOfUserInput" will contain the text input from the user split into an array of words
    const arrayOfUserInput = userInput.split(" ")
    console.log("arrayOfUserInput:", arrayOfUserInput)

    // NO MODIFICATION NEEDED: now that we have an array of words, we can map over the array and look at each word
    const translatedWordsArray = arrayOfUserInput.map(eachWord => {
      console.log("eachWord:", eachWord)

      // NO MODIFICATION NEEDED: this code will look at each word and identify the vowels
      const vowelsArray = eachWord.split("").filter(vowel => {
        return (
          vowel === "a" || 
          vowel === "e" || 
          vowel === "i" || 
          vowel === "o" || 
          vowel === "u"
        )
      })
      console.log("vowelsArray:", vowelsArray)

      // ACTION ITEM: your Pig Latin logic goes here!
// PseudoCode: The input is going to be an array. The output is going to be a string. The process: take the array, convert it to strings, and use our logic to check if the word begins with a vowel, and if it does, concatenate "way" to the end of the word. 
      // if(eachWord.includes(vowelsArray, [0])){
      //   return(eachWord + "way")
      // } 
      // example: "eat"[0]  output:"e"
      // vowelsArray output is ['e', 'a']
      // "e" === 'e'
      // "eatway"

      
      // const index = eachWord.indexOf(vowelsArray[0])
      // const str1 = eachWord.slice(0, index)
      // const str2 = eachWord.slice(index)
      //   if(eachWord[0] === vowelsArray[0]){
      //     return (eachWord + "way")
      //   }
      //   //Pseudo Code (qu-functionality)
      //     // input is an array of words 
      //     //output string of words 
      //     //process: if qu is present in first 3 index values  
      //   else if (vowelsArray.includes("u") && eachWord[eachWord.indexOf("u")-1] === "q"){
      //     eachWord = str1 + str2 + "ay"
      //   }
      //   else if (vowelsArray.includes("u"))
         
      if(eachWord[0] === vowelsArray[0]){
         return (eachWord + "way")
      } else if (eachWord.substring(1, 3) === "qu") {
        return eachWord.substring(3) + eachWord.substring(0, 3) + "ay";
      } else if (eachWord.substring(0,2) === "qu") {
        return eachWord.substring(2) + "quay";
      } else {
        const firstVowelIndex = eachWord.split("").findIndex(char => "aeiouAEIOU".includes(char));
        // We use .split on eachWord and .findIndex on the resulting array to find the index of the first vowel. We compare it the "aeiouAEIOU" using the .includes to see if the characters are identical. If it has no identical characters that means the word does not have vowels and firstVowelIndex will return -1.
        if (firstVowelIndex === -1) {
          // word contains no vowels, treat as a special case
          return eachWord + "ay";
        } else {
          return eachWord.substring(firstVowelIndex) + eachWord.substring(0, firstVowelIndex) + "ay";
        }
      }
         
          // else if (eachWord.substring(0,3).includes("qu") ) {
          //   return eachWord.substring(eachWord.indexOf("qu")) + "quay";}
     
        // else if (eachWord.slice(1) + eachWord[0]){
        //  return 

        // }
      // ACTION ITEM: this return will be the output of your Pig Latin'd code
      return eachWord
    })

    // NO MODIFICATION NEEDED: once the code has been modified it gets joined from an array back to a string
    const translatedWords = translatedWordsArray.join(" ")
    console.log("translatedWords:", translatedWords)

    // NO MODIFICATION NEEDED: this will update the inputTranslated variable in state
    setInputTranslated(translatedWords)
  }

  // ACTION ITEM: this method restarts the game by setting the original state, when you are ready for your full user experience delete the test words in setUserInput and pass an empty string
  const restartGame = () => {
    setUserInput("apple through queen squeal fry fluent")
    setInputTranslated("")
  }

  // NO MODIFICATION NEEDED: this method prevents React from refreshing the page unnecessarily
  const setUpPreventDefault = (e) => {
    e.preventDefault()
    myPigLatinCodeHere()
  }

  // NO MODIFICATION NEEDED: this method takes the value of the input and saves it in state
  const handleInput = (e) => {
    setUserInput(e.target.value)
  }

  return (
    <div className="page-container">
      <div className="body-container">
        <h1>Pig Latin Translator</h1>
        <img
          src={butcherPigImage}
          alt="pig with butcher cut names in pig latin"
          className="butcher-pig-image"
        />

        <div className="input-section">
          <h4>Enter phrase to be translated:</h4>
          <input
            type="text"
            className="user-input"
            onChange={handleInput}
            value={userInput}
          />
          <br />
          <button onClick={setUpPreventDefault}>Submit</button>
          <button onClick={restartGame}>Clear</button>
        </div>
        <p>{inputTranslated}</p>
      </div>
      <footer>&copy; 2022 | Coded by: Your Names Here!</footer>
    </div>
  )
}

export default App