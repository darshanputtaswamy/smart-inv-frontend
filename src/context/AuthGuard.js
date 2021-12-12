// AuthGuard.tsx
import { useRouter } from "next/router"
import { useEffect,useContext } from "react"
import Authcontext from 'context/AuthContext';

export function AuthGuard({ children }) {
  const { sessionUser,initializing } = useContext(Authcontext)
  const router = useRouter()

  useEffect(() => {
    if (!initializing) {
      //auth is initialized and there is no user
      if (!sessionUser  ) {
        router.push({
            pathname: '/',
        })      
      }
    }
  }, [router, sessionUser])

  /* show loading indicator while the auth provider is still initializing */
  if (initializing) {
    return <h1>Application Loading</h1>
  }

  // if auth initialized with a valid user & verified show protected page
  if (!initializing && sessionUser && sessionUser.isverified) {
    return <>{children}</>
  }

  console.log("user not executing")
  /* otherwise don't return anything, will do a redirect from useEffect */
  return null
}
