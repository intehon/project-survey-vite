export const ZodiacSign = ({ value, updateFormData }) => {
    const sign = (event) => updateFormData('zodiacSign', event.target.value)
    return (
        <div>
            <label>What's your zodiac sign?
                <select value={value} onChange={sign}>
                    <option value="" disabled>Select your zodiac sign</option>
                    <option value="aries">Aries</option>
                    <option value="taurus">Taurus</option>
                    <option value="gemini">Gemini</option>
                    <option value="cancer">Cancer</option>
                    <option value="leo">Leo</option>
                    <option value="virgo">Virgo</option>
                    <option value="libra">Libra</option>
                    <option value="scorpius">Scorpius</option>
                    <option value="sagittarius">Sagittarius</option>
                    <option value="capricornus">Capricornus</option>
                    <option value="aquarius">Aquarius</option>
                    <option value="Pisces">Pisces</option>
                </select>
            </label>
        </div>
    )
}