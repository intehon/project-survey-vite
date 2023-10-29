export const Symbol = ({ value, updateFormData }) => {
    const symbol = (event) => updateFormData('symbol', event.target.value)

    return (
        <div>
            <label htmlFor='symbolChoice'>Choose a symbol:</label>
                <div>
                    <label>
                        <input 
                        type="radio"
                        id="symbolChoice"
                        value="🌙"
                        checked={value === "🌙"}
                        onChange={symbol}
                        aria-label='Moon'
                        />
                        🌙
                    </label>
                    <label>
                        <input 
                        type="radio"
                        id="symbolChoice"
                        value="☀️"
                        checked={value === "☀️"}
                        onChange={symbol}
                        aria-label='Sun'
                        />
                        ☀️
                    </label>
                    <label>
                        <input 
                        type="radio"
                        id="symbolChoice"
                        value="⭐"
                        checked={value === "⭐"}
                        onChange={symbol}
                        aria-label="Star"
                        />
                        ⭐
                    </label>
                    <label>
                        <input 
                        type="radio"
                        id="symbolChoice"
                        value="🪐"
                        checked={value === "🪐"}
                        onChange={symbol}
                        aria-label='Planet'
                        />
                        🪐
                    </label>
                </div>
        </div>
    )
}