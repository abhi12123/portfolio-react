import React from 'react'
import AboutMe from './AboutMe'
import Contact from './Contact'
import Landing from './Landing'
import Portfolio from './Portfolio'

export default function Content() {
  return (
    <div className='content'>
        <Landing/>
        <AboutMe/>
        <Portfolio/>
        <Contact/>
    </div>
  )
}
