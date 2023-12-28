
const HangmanWord = () => {
    const word = "test";
    const guessedLetters = ["t"];

    return (
        <div style={{ display: "flex", gap: "0.25em", fontSize: "6rem", fontWeight: "bold", textTransform: "uppercase", fontFamily: "monospace" }}>
            {word.split("").map((letter, index) => (
                <span style={{ borderBottom: ".1em solid black" }} key={index}>
                    <span style={{ visibility: guessedLetters.includes(letter) ? "visible" : "hidden" }}>{letter}</span>
                </span>
            ))}
        </div>
    )
}

export default HangmanWord