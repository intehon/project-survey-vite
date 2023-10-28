export const Symbol = ({ value, updateFormData }) => {
    const symbol = (event) => updateFormData('symbol', event.target.value)

    return (
        <div>
            <label>Choose a symbol:</label>
                <label>
                <input 
                type="radio"
                value="moon"
                checked={value === "moon"}
                onChange={symbol}
                />
                🌙
                </label>
                <label>
                <input 
                type="radio"
                value="sun"
                checked={value === "sun"}
                onChange={symbol}
                />
                ☀️
                </label>
                <label>
                <input 
                type="radio"
                value="star"
                checked={value === "star"}
                onChange={symbol}
                />
                ⭐
                </label>
                <label>
                <input 
                type="radio"
                value="planet"
                checked={value === "planet"}
                onChange={symbol}
                />
                🪐
                </label>
        </div>
    )
}