import React from 'react';
import { Link } from 'react-router-dom';

function TextArea() {
    return (
        <div className='text-area p-3 sm:p-7 md:p-10 space-y-5 max-md:text-center'>
            <h3 className='text-lg font-semibold pb-2 border-b-2 border-b-green-color-70 w-fit max-md:mx-auto'>Transform Your ❤️ Health with</h3>
            <h1 className='text-dark-green-color-15 text-xl sm:text-3xl md:text-5xl font-bold'>Personalized Nutrition Coaching</h1>
            <p className='text-grey-color-20'>Welcome to Nutritionist, your partner in achieving optimal health through personalized nutrition coaching. Our certified nutritionists are here to guide you on your weight loss journey, providing customized plans and ongoing support. Start your transformation today and experience the power of personalized nutrition coaching.</p>
            <div className='links flex items-center max-md:justify-center gap-2'>
                <Link
                    to={''}
                    className='block py-2 px-4 bg-green-color-70 rounded-md'
                >
                    Get Started Today
                </Link>
                <Link
                    to={''}
                    className='block py-2 px-4 bg-green-color-95 border border-bg-green-color-85 rounded-md'
                >
                    Book a Demo
                </Link>
            </div>
        </div>
    )
}

export default TextArea;