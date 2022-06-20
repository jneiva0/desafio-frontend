import { useRouter } from 'next/router'
import {
  ApiError,
  FetchErrorType,
  FetchReturnType,
} from 'openapi-typescript-fetch'
import { useCallback, useEffect } from 'react'
import { apiGetMe } from 'src/lib/api'
import useSWR from 'swr'

type Ret = FetchReturnType<typeof apiGetMe>
type Err = FetchErrorType<typeof apiGetMe>

//Funcao usada para capturar o erro em caso de usuario nao logado (401 vindo da api)
//e retornar null ao inves de um erro, por causa da forma como o swr opera
//Como o nome diz SWR = Stale while revalidate, é popsivel ter data e error ao mesmo tempo
const apiCheckLogin = async () => {
  try {
    const res = await apiGetMe({})
    return res
  } catch (e) {
    if (e instanceof ApiError) {
      if (e.status === 401) {
        return { data: null }
      }
    }
    throw e
  }
}

export const useUsuario = ({
  redirectTo = '',
  redirectIfFound = false,
} = {}) => {
  const { data, error, mutate } = useSWR('/auth/me', () => apiCheckLogin(), {
    shouldRetryOnError: false,
  })
  const user = data?.data
  const loading = !error && !data
  const router = useRouter()

  const logout = useCallback(async () => {
    localStorage.removeItem('accessToken')
    await mutate()
  }, [mutate])

  useEffect(() => {
    // se nao for necessario redirecionar, apenas retorna
    // se os dados nao foram carregados ainda, apenas retorna tambem
    if (!redirectTo || loading) return

    if (
      // se redirectTo estiver definido, redireciona se o usuario nao estiver logado
      (redirectTo && !redirectIfFound && !user) ||
      // Se redirectIfFound tambem estiver definido, redireciona se o usuario estiver logado
      (redirectIfFound && user)
    ) {
      router.push(redirectTo)
    }

    //apesar do eslint reclamar, nao eh necessario incluir o router no array de dependencias
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, redirectTo, user])

  return { user, loading, error, mutate, logout }
}
