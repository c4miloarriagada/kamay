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

  useEffect(() => {
    const storedValue = JSON.parse(localStorage.getItem(key) ?? '')
    setValue(storedValue as T)

    if (!storedValue) {
      setLocalStorage(storedValue as T)
    }
  }, [setLocalStorage, key])

  return {
    value,
    setLocalStorage
  }
}
