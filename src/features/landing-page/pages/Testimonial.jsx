import React from 'react'
import CustomerReviews from '../components/CustomerReviews'

const Testimonial = () => {
  return (
    <section id='testimonials' className='w-full'>
        <h2 className='text-black text-center primary-font text-4xl py-10 md:text-5xl md:font-medium'>Our happy customers</h2>
        <CustomerReviews />
    </section>
  )
}

export default Testimonial