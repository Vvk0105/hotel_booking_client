import React from 'react'

function GallerySection() {
  return (
    <div className='mx-auto mt-10 px-6 text-center'>
        <h2 className="text-4xl font-bold text-gray-800 mb-10">Gallery</h2>        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-8">
            <img src="/images/resort1.avif" className="rounded-lg shadow" />
            <img src="/images/resort2.webp" className="rounded-lg shadow" />
            <img src="/images/resort3.webp" className="rounded-lg shadow" />
        </div>
    </div>
  )
}

export default GallerySection
