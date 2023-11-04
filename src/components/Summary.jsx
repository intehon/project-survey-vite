export const Summary = ({ favoriteColor, number, symbol, zodiacSign, card, dreamDestination, grantedWish, potion  }) => {
        return (
            <div className='summary'>
                <p>{favoriteColor} reflects your inner desires, {number} whispers hidden truths, {symbol} hints at mysterious forces. Your {zodiacSign} aligns with cosmic rhythms. {card} is your unique mirror. {dreamDestination} is a doorway to self-discovery.</p>

                <p>Your cherished wish, <span>"{grantedWish}"</span>, awaits you. Explore your heart's depths to manifest your desires. Your path is mysterious, your future captivating.</p>

                <span>Choose magic potions wisely to influence your wish's likelihood. Each potion unlocks destiny aspects. Your journey combines self-discovery and cosmic magic.</span> 
                
                <p>Likelihood of wish coming true: {potion}/100</p>

                <button
                type="button"
                className="button"
                onClick={() => window.location.reload()}>
                    Do a new reading 🔮
                </button>
            </div>
        )
}