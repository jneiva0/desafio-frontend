import axios from 'axios'

const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000'

const api = axios.create({ baseURL: apiUrl })

export type Restaurant = {
  id: string
  createdAt: Date
  updatedAt: Date
  name: string
  phone: string
  address: string
  imageSrc?: string
}
export const apiGetRestaurants = async () => {
  const { data } = await api.get<Restaurant[]>('/restaurants')
  return data
}
