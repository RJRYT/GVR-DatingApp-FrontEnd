import React from 'react'

function SubscriptionAddInput({label}) {
  return (
    <input
    type="text"
    placeholder={label}
    className="w-full px-4 py-3 border-2 border-gray-300 outline-none rounded-lg capitalize"
  />
  )
}

export default SubscriptionAddInput