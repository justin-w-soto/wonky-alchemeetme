import { useContext, createContext, useState, useEffect  }from 'react';
import { fetchUser } from '../services/user';

const UserContext = createContext()

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  
  useEffect(() => {
    fetchUser()
      .then((fetchedUser) => {
        setUser(fetchedUser)
      })
      .catch((error) => {
        throw new Error(`Error: ${error}`)
      })
  }, [])

  return <UserContext.Provider value={{ user }}> {children} </UserContext.Provider> 
}

 const useCustomHook = () => {
   const context = useContext(UserContext)

   if (context === undefined) {
     throw new Error(`
     Error!!!!! Citizen, you are guilty of a mind crime,
    the thought police are en route. Please remain calm and stay seated.`)
   }
   return context
 }
export { UserProvider, useCustomHook }

