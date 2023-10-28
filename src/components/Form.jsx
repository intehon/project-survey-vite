import { useState } from 'react';
import { Card } from './Card'
import { FavoriteColor } from './FavoriteColor'
import { Number } from './Number'
import { PlaceToVisit } from './PlaceToVisit'
import { SpiritAnimal } from './SpiritAnimal'
import { Superpower } from './Superpower'
import { ZodiacSign } from './ZodiacSign'

export const Form = () => {
    //State to store form data
    const [formData, setFormData] = useState({
        card: '',
        favoriteColor: '',
        number: '',
        placeToVisit: '',
        spiritAnimal: '',
        superpower: '',
        zodiacSign: ''
    })
    //State to keep track of current step
    const [currentStep, setCurrentStep] = useState(1)

    //Function to update form data
    const updateFormData = (field, value) => {
        setFormData((values) => ({...values, [field]: value}))
    }

    //Function to click on the next and prev step in form
    const nextStep = () => {
        if (currentStep < 6) setCurrentStep(currentStep + 1)
        }
    const prevStep = () => {
        if (currentStep > 1) setCurrentStep(currentStep - 1)
    }

    //Function to submit form
    const submitForm = () => {
        const formattedData = `
        Card: ${formData.card}
        Favorite Color: ${formData.favoriteColor}
        Pick a Number: ${formData.number}
        Place to Visit: ${formData.placeToVisit}
        Spirit Animal: ${formData.spiritAnimal}
        Superpower: ${formData.superpower}
        Zodiac Sign: ${formData.zodiacSign}
        `
    }

    return (
        <div>
            {currentStep === 1 && <FavoriteColor value={formData.favoriteColor} updateFormData={updateFormData}/>}

            {currentStep === 2 && <Number value={formData.number} updateFormData={updateFormData} />}
            
            {currentStep === 3 && <SpiritAnimal value={formData.spiritAnimal} updateFormData={updateFormData} />}

            {currentStep === 4 && <ZodiacSign value={formData.zodiacSign} updateFormData={updateFormData} />}

            {currentStep === 5 && <Card value={formData.card} updateFormData={updateFormData} />}

            {currentStep === 6 && <PlaceToVisit value={formData.placeToVisit} updateFormData={updateFormData} />}

            {currentStep === 7 && <Superpower value={formData.superpower} updateFormData={updateFormData} />}

        <div>
            {currentStep > 1 && <button onClick={prevStep}>Back</button>}
            {currentStep < 6 ? ( 
                <button onClick={nextStep}>Next</button>
                ) : (
                <button onClick={submitForm}>Submit</button>
                )}
        </div>

        </div>
    )
}