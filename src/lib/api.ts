import { Fetcher, Middleware } from 'openapi-typescript-fetch'
import { paths } from 'src/lib/generatedApiTypes'

const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000'

const logger: Middleware = async (url, init, next) => {
  console.log(`fetching ${url} using ${init.method}`)
  const response = await next(url, init)
  console.log(`fetched ${url}`)
  return response
}

const headerMiddleware: Middleware = async (url, init, next) => {
  console.log({ url, init, next })
  const accessToken = localStorage.getItem('accessToken')
  if (accessToken) {
    init.headers.set('Authorization', `Bearer ${accessToken}`)
  }
  const response = await next(url, init)
  console.log({ response })
  return response
}

const fetcher = Fetcher.for<paths>()

fetcher.configure({
  baseUrl: apiUrl,
  use: [headerMiddleware, logger],
})

//create fetch operation for each path
export const apiLogin = fetcher.path('/auth/login').method('post').create()

export const apiGetMe = fetcher.path('/auth/me').method('get').create()
