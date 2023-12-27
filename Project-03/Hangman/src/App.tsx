import { useState } from "react";
import words from './wordList.json';

const App = () => {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  });

  console.log(wordToGuess);
  
  return (
    <div>{wordToGuess}</div>
  )
}

export default App