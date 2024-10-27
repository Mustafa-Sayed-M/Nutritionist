import React from 'react';
import OurStory from '../Components/About/OurStory/OurStory';
import CompanyAchievements from '../Components/About/CompanyAchievements/CompanyAchievements';
import BookDemo from '../Components/About/BookDemo/BookDemo';
import Header from '../Components/Shared/Header';

function About() {
    return (
        <div className='about-page py-7'>
            <div className='container space-y-7'>
                {/* Header */}
                <Header
                    title={'Welcome to Nutritionist'}
                    description={`Your trusted source for personalized nutrition coaching. Our mission is to help you achieve your weight loss and health goals through tailored nutrition plans and expert guidance. We understand that every individual is unique, and that's why we believe in providing personalized solutions that fit your lifestyle and preferences.
With our team of qualified nutritionists and dietitians, we are dedicated to empowering you with the knowledge and tools you need to make lasting changes. Whether you want to shed those extra pounds, improve your overall well-being, or develop a healthier relationship with food, we are here to support you every step of the way.
At Nutritionist, we believe that healthy eating should be enjoyable and sustainable. We emphasize the importance of balanced nutrition, focusing on whole foods and mindful eating practices. Our approach is rooted in scientific research and evidence-based strategies, ensuring that you receive the most up-to-date and accurate information.
Join our community of individuals committed to transforming their lives through nutrition. Take control of your health, boost your energy levels, and discover the joy of nourishing your body with wholesome foods. We are here to guide you towards a healthier, happier you.`}
                />
                {/* Our Story */}
                <OurStory />
                {/* Company Achievements */}
                <CompanyAchievements />
                {/* Book Demo */}
                <BookDemo />
            </div>
        </div>
    )
}

export default About;