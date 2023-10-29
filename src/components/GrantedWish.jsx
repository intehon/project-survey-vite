export const GrantedWish = ({ value, updateFormData }) => {
    const wish = (event) => updateFormData('grantedWish', event.target.value) 

    return (
        <div>
            <label htmlFor='grantedWish'>If you could have any one wish granted, what would it be?
                <div className='inputContainer'>
                <textarea
                id="grantedWish"
                name="grantedWish"
                rows={3}
                cols={30} 
                placeholder='My one wish is...'
                value={value} 
                onChange={wish} />
                </div>
            </label>
        </div>
    )
}