export const Card = ({ value, updateFormData }) => {
    const card = (event) => updateFormData('card', event.target.value)

    return (
        <div>
        <label htmlFor="cardChoice">Select a playing card:</label>
        <div>
            <label>
                <input 
                    type="radio"
                    id="cardChoice"
                    value="♠️"
                    checked={value === "♠️"}
                    onChange={card}
                    aria-label="Spades"
                />
                ♠️
            </label>
                <label>
                    <input 
                    type="radio"
                    id="cardChoice"
                    value="♥️"
                    checked={value === "♥️"}
                    onChange={card}
                    aria-label='Hearts'
                    />
                    ♥️
                </label>
                <label>
                    <input 
                    type="radio"
                    id="cardChoice"
                    value="♦️"
                    checked={value === "♦️"}
                    onChange={card}
                    aria-label='Diamonds'
                    />
                    ♦️
                </label>
                <label>
                <input 
                type="radio"
                id="cardChoice"
                value="♣️"
                checked={value === "♣️"}
                onChange={card}
                aria-label='Clubs'
                />
                ♣️
                </label>
                </div>
        </div>
    )
}