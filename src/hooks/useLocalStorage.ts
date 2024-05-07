'use client'
import { useCallback, useEffect, useState } from 'react'

export const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [value, setValue] = useState(initialValue)

  const setLocalStorage = useCallback(
    (value: T) => {
      setValue(value)
      localStorage.setItem(key, JSON.stringify(value))
    },
    [key]
  )

  const readValue = useCallback(() => {
    if (typeof window === 'undefined') {
      return null
    }

    try {
      const storedValue = localStorage.getItem(key) ?? ''
      const parsedValue = JSON.parse(storedValue)
      return parsedValue
    } catch (error) {
      console.log(`Key: ${key} doesn't exist`)
      return null
    }
  }, [key])

  useEffect(() => {
    setValue(readValue())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key])
  return {
    value,
    setLocalStorage
  }
}
