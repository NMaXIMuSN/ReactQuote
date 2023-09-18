import { useState } from "react"

export const useFetching = (callback: Function): [(...args: any) => Promise<void>, boolean, any] => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const fetching: (...args: any) => Promise<void> = async (...args: any) => {
    try {
      setIsLoading(true)

      await callback(...args)
    } catch (error: any) {
      setError(error)
    } finally {
      setIsLoading(false)
    }
  }

  return [fetching, isLoading, error]
}