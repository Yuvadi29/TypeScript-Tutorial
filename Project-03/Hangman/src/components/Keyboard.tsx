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

const Keyboard = () => {
    return (
        <div>
            {KEYS.map(key => {
                // const isActive = activeLetters.includes(key)
                // const isInactive = inactiveLetters.includes(key)
                return (
                    <button
                        // onClick={() => addGuessedLetter(key)}
                        // className={`${styles.btn} ${isActive ? styles.active : ""} ${isInactive ? styles.inactive : ""
                            // }`}
                        // disabled={isInactive || isActive || disabled}
                        key={key}
                    >
                        {key}
                    </button>
                )
            })}
        </div>
    )
}

export default Keyboard