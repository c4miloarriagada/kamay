'use client'

import { useState } from 'react'

export const useBoolean = () => {
  const [boolean, setBoolean] = useState(false)

  const setIsLoading = () => {
    setBoolean((prevState) => !prevState)
  }

  return {
    boolean,
    setIsLoading
  }
}
