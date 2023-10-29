export const Summary = ({ favoriteColor, number, symbol, zodiacSign, card, dreamDestination, grantedWish  }) => {
        const formattedData = `
        favoriteColor: ${favoriteColor}
        number: ${number}
        symbol: ${symbol}
        zodiacSign: ${zodiacSign}
        card: ${card}
        dreamDestination: ${dreamDestination}
        grantedWish: ${grantedWish}
        `
        console.log(favoriteColor)
        return (
            <p>{formattedData}</p>
        )
}