//create a react component that will be used to protect the page
// Language: typescriptreact
// Path: src/components/ProtectedPage.tsx

import { ReactNode } from 'react'
import { ErrorResult } from 'src/components/ErrorResult'
import { Loading } from 'src/components/Loading'
import { useUsuario } from 'src/hooks/useUsuario'

type Props = {
  children: ReactNode
}

export const ProtectedPage = ({ children }: Props) => {
  const { user, error, loading } = useUsuario({ redirectTo: '/login' })

  if (loading) return <Loading />
  if (error) {
    console.log({ error })
    return <ErrorResult error={error} />
  }

  return <>{children}</>
}
