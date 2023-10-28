export const FavoriteColor = ({ value, updateFormData }) => {
    const color = (event) => updateFormData('favoriteColor', event.target.value) 

    return (
        <div>
            <label>What's your favorite color?</label>
            <input type="text" value={value} onChange={color} />
        </div>
    )
}