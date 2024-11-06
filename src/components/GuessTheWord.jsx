import React, { useEffect, useState } from "react";

const words = [
  "india",
  "pineapple",
  "candle",
  "elephant",
  "monkey",
  "strawberry",
  "television",
  "computer",
  "chair",
  "water",
];
const shuffleWord = (word) => {
  return word
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");
};
export const GuessTheWord = () => {
  const [guess, setGuess] = useState("");
  const [currentWord, setCurrentWord] = useState("");
  const [scrambledWord, setSrambledWord] = useState("");
  const [message, setMessage] = useState("");
  const [score, setScore] = useState(0);

  const generateWord = () => {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    setCurrentWord(randomWord);
    setSrambledWord(shuffleWord(randomWord));
    setMessage("");
    setGuess("");
  };
  useEffect(() => {
    generateWord();
  }, []);

  const checkGuess = () => {
    if (guess.toLowerCase() === currentWord) {
      setMessage("Correct Well Done ❤️😊");
      setScore(score + 1);
    } else {
      setMessage("ohh wrong guess 😩");
    }
  };

  return (
    <div>
      <h1 className="text-white font-extralight  text-center mt-20 text-[3rem] md:text-[5rem]">
        Guess The Word
      </h1>
      <h1 className="text-center my-10 text-[#FFF4B7] text-4xl">
        {scrambledWord}
      </h1>
      <div className="bg-zinc-400 md:max-w-2xl w-[90%] p-5 rounded-lg mx-auto">
        <input
          type="text"
          className="input input-error w-full text-xl"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
        />
        <button
          className="text-xl btn btn-error w-full my-3"
          onClick={checkGuess}
        >
          Guess
        </button>
        <button
          className="text-xl btn btn-error w-full mb-3"
          onClick={generateWord}
        >
          New Word
        </button>
      </div>
      <p className="text-center text-4xl text-[#C6E7FF] my-5">{message}</p>
      <p className="text-center  text-4xl text-[#C6E7FF]">
        Your Score : {score}
      </p>
    </div>
  );
};
