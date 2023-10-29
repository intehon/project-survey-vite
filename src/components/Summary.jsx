export const Summary = ({ favoriteColor, number, symbol, zodiacSign, card, dreamDestination, grantedWish  }) => {
        return (
            <div className='summary'>
                <p>{favoriteColor} is a reflection of the depths of your soul, a hue that resonates with your innermost desires. The number you've chosen, {number}, holds secrets known only to you. If you delve deep into your being, you'll find that number whispering hidden truths, waiting for your inner observer to uncover.</p>

                <p>As for the symbol; {symbol} is a mystical sigil that speaks of the enigmatic forces at play in your life. To fully understand its significance, you must embark on a journey within, seeking the hidden patterns that echo this symbol.</p>

                <p>Your zodiac sign, {zodiacSign}, aligns with the cosmic rhythm of your existence. The playing card you've drawn, {card}, is a mirror reflecting a mystery only you can decipher. The destination you yearn to visit, {dreamDestination}, is a doorway to self-discovery.</p>

                <p>And as for your one cherished wish, <span>"{grantedWish}"</span>, the universe beckons you to explore the depths of your heart, for therein lies the key to manifesting your most enigmatic desires. Your path is shrouded in mystery, and your future is a captivating tale waiting to be unveiled through your inner exploration.</p>
            
                <button
                type="button"
                className="button"
                onClick={() => window.location.reload()}>
                    Do a new reading 🔮
                </button>
            </div>
        )
}