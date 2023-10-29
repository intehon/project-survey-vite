export const Card = ({ value, updateFormData }) => {
    const card = (event) => updateFormData('card', event.target.value)

    return (
        <div>
            <label>Select a playing card:</label>
                <label>
                    <input 
                    type="radio"
                    value="♠️"
                    checked={value === "♠️"}
                    onChange={card}
                    />
                    ♠️
                </label>
                <label>
                    <input 
                    type="radio"
                    value="♥️"
                    checked={value === "♥️"}
                    onChange={card}
                    />
                    ♥️
                </label>
                <label>
                    <input 
                    type="radio"
                    value="♦️"
                    checked={value === "♦️"}
                    onChange={card}
                    />
                    ♦️
                </label>
                <label>
                <input 
                type="radio"
                value="♣️"
                checked={value === "♣️"}
                onChange={card}
                />
                ♣️
                </label>
        </div>
    )
}