export const Symbol = ({ value, updateFormData }) => {
    const symbol = (event) => updateFormData('symbol', event.target.value)

    return (
        <div>
            <label>Choose a symbol:</label>
                <label>
                <input 
                type="radio"
                value="🌙"
                checked={value === "🌙"}
                onChange={symbol}
                />
                🌙
                </label>
                <label>
                <input 
                type="radio"
                value="☀️"
                checked={value === "☀️"}
                onChange={symbol}
                />
                ☀️
                </label>
                <label>
                <input 
                type="radio"
                value="⭐"
                checked={value === "⭐"}
                onChange={symbol}
                />
                ⭐
                </label>
                <label>
                <input 
                type="radio"
                value="🪐"
                checked={value === "🪐"}
                onChange={symbol}
                />
                🪐
                </label>
        </div>
    )
}