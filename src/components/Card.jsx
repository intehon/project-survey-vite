export const Card = ({ value, updateFormData }) => {
    const card = (event) => updateFormData('card', event.target.value)

    return (
        <div>
            <label>Select a playing card:</label>
                <label>
                    <input 
                    type="radio"
                    value="spades"
                    checked={value === "spades"}
                    onChange={card}
                    />
                    ♠️
                </label>
                <label>
                    <input 
                    type="radio"
                    value="hearts"
                    checked={value === "hearts"}
                    onChange={card}
                    />
                    ♥️
                </label>
                <label>
                    <input 
                    type="radio"
                    value="diamonds"
                    checked={value === "diamonds"}
                    onChange={card}
                    />
                    ♦️
                </label>
                <label>
                <input 
                type="radio"
                value="clubs"
                checked={value === "clubs"}
                onChange={card}
                />
                ♣️
                </label>
        </div>
    )
}