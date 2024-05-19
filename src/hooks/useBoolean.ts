'use client'

import { useCallback, useState } from 'react'

export const useBoolean = () => {
  const [boolean, setBoolean] = useState(false)

  const setIsLoading = useCallback(() => {
    setBoolean((prevState) => !prevState)
  }, [])

  return {
    boolean,
    setIsLoading
  }
}
