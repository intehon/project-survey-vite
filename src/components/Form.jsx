import { useState } from 'react';
import { Card } from './Card'
import { FavoriteColor } from './FavoriteColor'
import { Number } from './Number'
import { DreamDestination } from './DreamDestionation'
import { Symbol } from './Symbol'
import { GrantedWish } from './GrantedWish'
import { ZodiacSign } from './ZodiacSign'

export const Form = () => {
    //State to store form data
    const [formData, setFormData] = useState({
        favoriteColor: '',
        number: '',
        symbol: '',
        zodiacSign: '',
        card: '',
        dreamDestination: '',
        grantedWish: ''
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
        favoriteColor: ${formData.favoriteColor}
        number: ${formData.number}
        symbol: ${formData.symbol}
        zodiacSign: ${formData.zodiacSign}
        card: ${formData.card}
        dreamDestination: ${formData.dreamDestination}
        grantedWish: ${formData.grantedWish}
        `
        alert(formattedData)
    }

    return (
        <div>
            {currentStep === 1 && <FavoriteColor value={formData.favoriteColor} updateFormData={updateFormData}/>}

            {currentStep === 2 && <Number value={formData.number} updateFormData={updateFormData} />}
            
            {currentStep === 3 && <Symbol value={formData.symbol} updateFormData={updateFormData} />}

            {currentStep === 4 && <ZodiacSign value={formData.zodiacSign} updateFormData={updateFormData} />}

            {currentStep === 5 && <Card value={formData.card} updateFormData={updateFormData} />}

            {currentStep === 6 && <DreamDestination value={formData.dreamDestination} updateFormData={updateFormData} />}

            {currentStep === 7 && <GrantedWish value={formData.grantedWish} updateFormData={updateFormData} />}

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