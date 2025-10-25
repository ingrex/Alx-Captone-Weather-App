import React from 'react'

const Footer = () => {
  return (
<footer className='w-full text-center py-4 mt-auto bg-white/20 dark:bg-black/30 background-blur-md text-gray-800 dark:text-gray-200 text-sm transition-all duration-300 fixed bottom-0 left-0'>
<div className="max-w-screen-lg mx-auto px-4">
    <p className="leading-relaxed">
        Powered by <span>OpenWeather</span> . {""}
    </p>
    <p>
        &copy; {new Date().getFullYear()} SkyCast. All rights reserved.
    </p>
    
</div>

</footer>
  )
}

export default Footer
