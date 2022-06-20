import { useRouter } from 'next/router'
import {
  ApiResponse,
  FetchErrorType,
  FetchReturnType,
} from 'openapi-typescript-fetch'
import { useEffect, useMemo } from 'react'
import { apiGetMe } from 'src/lib/api'
import useSWR from 'swr'

type Ret = FetchReturnType<typeof apiGetMe>
type Err = FetchErrorType<typeof apiGetMe>

export const useUsuario = ({
  redirectTo = '',
  redirectIfFound = false,
} = {}) => {
  const { data, error, mutate } = useSWR<ApiResponse<Ret>, Err>(
    '/auth/me',
    () => apiGetMe(null),
    {
      shouldRetryOnError: false,
    },
  )
  //memoizando para garantir que a referencia da variavel seja estavel
  const user = useMemo(() => data?.data, [data])
  const loading = !error && !data
  const router = useRouter()

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

  return { user, loading, error, mutate }
}
