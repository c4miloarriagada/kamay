'use client'
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { useEffect } from 'react'

export const DarkMode = () => {
  const { setLocalStorage, value } = useLocalStorage<boolean>('darkmode', false)

  useEffect(() => {
    if (value) {
      document.body.classList.add('dark')
      return
    }
    document.body.classList.remove('dark')
  }, [value])

  return (
    <button onClick={() => setLocalStorage(value ? false : true)}>
      {value ? (
        <IoMoonOutline color={value ? '#99A3AF' : ''} size={20} />
      ) : (
        <IoSunnyOutline size={20} />
      )}
    </button>
  )
}
