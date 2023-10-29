import { useState } from 'react';
import { Card } from './Card'
import { FavoriteColor } from './FavoriteColor'
import { Number } from './Number'
import { DreamDestination } from './DreamDestination'
import { Symbol } from './Symbol'
import { GrantedWish } from './GrantedWish'
import { ZodiacSign } from './ZodiacSign'
import { Summary } from './Summary'
import './Form.css'

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

    //State to track wether form has been submitted or not
    const [isSubmitted, setIsSubmitted] = useState(false)

    //Function to update form data
    const updateFormData = (field, value) => {
        setFormData((values) => ({...values, [field]: value}))
    }

    //Function to click on the next and prev step in form
    const nextStep = () => {
        if (currentStep < 7) setCurrentStep(currentStep + 1)
        }
    const prevStep = () => {
        if (currentStep > 1) setCurrentStep(currentStep - 1)
    }

    //Function to submit form
    const submitForm = () => {
        setIsSubmitted(true)
    }

    return (
        <div className="formContainer">
            {currentStep === 1 && !isSubmitted && (
                <div className={`formStep ${currentStep === 1 ? 'active' : ''}`}>
                <FavoriteColor value={formData.favoriteColor} updateFormData={updateFormData}/>
                </div>
            )}

            {currentStep === 2 && !isSubmitted && (
                <div className={`formStep ${currentStep === 2 ? 'active' : ''}`}>
                    <Number value={formData.number} updateFormData={updateFormData} />
                </div>
            )}

            {currentStep === 3 && !isSubmitted && (
                <div className={`formStep ${currentStep === 3 ? 'active' : ''}`}>
                    <Symbol value={formData.symbol} updateFormData={updateFormData} />
                </div>
            )}
            {currentStep === 4 && !isSubmitted && (
                <div className={`formStep ${currentStep === 4 ? 'active' : ''}`}>
                    <ZodiacSign value={formData.zodiacSign} updateFormData={updateFormData} />
                </div>
            )}
            {currentStep === 5 && !isSubmitted && (
                <div className={`formStep ${currentStep === 5 ? 'active' : ''}`}>
                <Card value={formData.card} updateFormData={updateFormData} />
                </div>
            )}
            {currentStep === 6 && !isSubmitted && (
                <div className={`formStep ${currentStep === 6 ? 'active' : ''}`}>
                    <DreamDestination value={formData.dreamDestination} updateFormData={updateFormData} />
                </div>
            )}
            {currentStep === 7 && !isSubmitted && (
                <div className={`formStep ${currentStep === 7 ? 'active' : ''}`}>
                    <GrantedWish value={formData.grantedWish} updateFormData={updateFormData} />
                </div>
            )}            
            {/* {currentStep === 2 && !isSubmitted && <Number value={formData.number} updateFormData={updateFormData} />}
            
            {currentStep === 3 && !isSubmitted && <Symbol value={formData.symbol} updateFormData={updateFormData} />}

            {currentStep === 4 && !isSubmitted && <ZodiacSign value={formData.zodiacSign} updateFormData={updateFormData} />}

            {currentStep === 5 && !isSubmitted && <Card value={formData.card} updateFormData={updateFormData} />}

            {currentStep === 6 && !isSubmitted && <DreamDestination value={formData.dreamDestination} updateFormData={updateFormData} />}

            {currentStep === 7 && !isSubmitted && <GrantedWish value={formData.grantedWish} updateFormData={updateFormData} />} */}

            {/*When submitted; show summary component*/}
            {isSubmitted && (
                <Summary
                    favoriteColor={formData.favoriteColor}
                    number={formData.number}
                    symbol={formData.symbol}
                    zodiacSign={formData.zodiacSign}
                    card={formData.card}
                    dreamDestination={formData.dreamDestination}
                    grantedWish={formData.grantedWish}
                />
            )}

            {/*Show buttons only if not submitted*/}
            {!isSubmitted && (
            <div className="buttonContainer">
                {currentStep > 1 && <button className='button' onClick={prevStep}>Back</button>}
                {currentStep < 7 ? ( 
                    <button className="button" onClick={nextStep}>Next</button>
                    ) : (
                    <button className='button' onClick={submitForm}>Submit</button>
                    )}
            </div>)}
            
            {/*Show button only if submitted*/}
            {isSubmitted && (
                <div className='summary'>
                    <button
                    type="button"
                    className="button"
                    onClick={() => window.location.reload()}>
                        Do a new reading 🔮
                    </button>
                </div>
            )}
        </div>
    )
}