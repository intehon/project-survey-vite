export const DreamDestination = ({ value, updateFormData }) => {
    const destination = (event) => updateFormData('dreamDestination', event.target.value) 

    return (
        <div>
            <label>Name a dream destination you'd love to visit.</label>
            <input type="text" value={value} onChange={destination} />
        </div>
    )
}