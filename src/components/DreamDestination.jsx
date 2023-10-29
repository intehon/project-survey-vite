export const DreamDestination = ({ value, updateFormData }) => {
    const destination = (event) => updateFormData('dreamDestination', event.target.value) 

    return (
        <div>
            <label htmlFor="dreamDestination">Name a dream destination you'd love to visit.</label>
            <div>
                <input 
                type="text" 
                id="dreamDestination"
                value={value} 
                onChange={destination} 
                />
            </div>
        </div>
    )
}