import { Fetcher, Middleware } from 'openapi-typescript-fetch'
import { paths } from 'src/lib/generatedApiTypes'

const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000'

const headerMiddleware: Middleware = async (url, init, next) => {
  const accessToken = localStorage.getItem('accessToken')
  if (accessToken) {
    init.headers.set('Authorization', `Bearer ${accessToken}`)
  }
  const response = await next(url, init)
  return response
}

const fetcher = Fetcher.for<paths>()

fetcher.configure({
  baseUrl: apiUrl,
  init: {},

  use: [headerMiddleware],
})

export const apiLogin = fetcher.path('/auth/login').method('post').create()

export const apiGetMe = fetcher.path('/auth/me').method('get').create()

export const apiGetRestaurants = fetcher
  .path('/restaurants')
  .method('get')
  .create()

export const apiGetRestaurant = fetcher
  .path('/restaurants/{id}')
  .method('get')
  .create()
