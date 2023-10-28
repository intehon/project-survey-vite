export const Number = ({ value, updateFormData }) => {
    const number = (event) => updateFormData('number', event.target.value)
    return (
        <div>
            <label>Pick a number between 1 and 10:
                <select value={value} onChange={number}>
                    <option value="" disabled>Select a number</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
            </label>
        </div>
    )
}