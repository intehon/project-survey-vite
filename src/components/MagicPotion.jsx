export const MagicPotion = ({ value, updateFormData }) => {
    const potion = (event) => {
        console.log("Value before update:", value)
        updateFormData('potion', event.target.value)
        console.log("Value after update:", event.target.value)
    }
  
    return (
      <div>
        <form>
          <label htmlFor="potion">How much magic potions will you drink?</label>
          <input
            type="range"
            id="potion"
            name="potion"
            min="0"
            max="100"
            value={value} 
            onChange={potion} 
          />
        </form>
      </div>
    );
  }