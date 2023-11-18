import React from 'react'

const Modal = ({children}) => {
  return (
    <div
    id="defaultModal"
    className="overflow-y-auto overflow-x-hidden fixed right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center  flex bg-black bg-opacity-50"
    aria-modal="true"
    role="dialog"
  >
    <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
      <div className="relative bg-white rounded-lg shadow ">
        {children}
      </div>
    </div>
  </div>
  )
}

export default Modal