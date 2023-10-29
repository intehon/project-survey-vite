export const FavoriteColor = ({ value, updateFormData }) => {
    const color = (event) => updateFormData('favoriteColor', event.target.value) 

    return (
        <div>
            <label htmlFor='favoriteColor'>What's your favorite color?</label>
            <div>
                <input 
                type="text"
                id="favoriteColor" 
                value={value} 
                onChange={color} 
                />
            </div>
        </div>
    )
}