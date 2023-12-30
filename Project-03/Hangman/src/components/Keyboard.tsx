import styles from './Keyboard.module.css';

const KEYS = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
]

type KeyboardProps = {
    activeLetters: string[],
    inActiveLetters: string[],
    addGuessedLetter: (letter: string) => void,
    disabled?: boolean
}

const Keyboard = ({ activeLetters, inActiveLetters, addGuessedLetter, disabled = false }: KeyboardProps) => {
    return (
        <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
            gap: "0.5rem",
        }}>
            {KEYS.map(key => {
                const isActive = activeLetters.includes(key)
                const isInactive = inActiveLetters.includes(key)
                return (
                    <button
                        onClick={() => addGuessedLetter(key)}
                        className={`${styles.btn} ${isActive ? styles.active : ""} ${isInactive ? styles.inactive : ""}`}
                        key={key}
                        disabled={isInactive || isActive || disabled}
                    >
                        {key}
                    </button>
                )
            })}
        </div>
    )
}

export default Keyboard