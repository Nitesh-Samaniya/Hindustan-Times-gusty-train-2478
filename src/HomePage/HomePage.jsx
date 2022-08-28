import React from 'react'
import "./HomePage.css";
import LeftSection from './LeftSection'
import MiddleSection from './MiddleSection';
import RightSection from './RightSection';

export default function HomePage() {
  return (
    <div className='homepage-dom'>
        <div className='homepage'>
            <LeftSection />
            <MiddleSection />
            <RightSection />

        </div>
    </div>
  )
}
