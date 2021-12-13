import { useContext, createContext, useState  }from 'react';

// step 1 create the context
const UserContext = createContext()

// step 2 create a user provider that takes in children
const UserProvider = ({ children }) => {
  const [user, setUser] = useState('')

  // step 3 use the .Provider method on our UserContext function and pass children props into the component
  return <UserContext.Provider value={{ user, setUser }}> {children} </UserContext.Provider> 
}

// steps 4 & 5 create custom hook and pass it the useContext hook and the UserContext function
// use if statement to define an error 
 const useCustomHook = () => {
   const context = useContext(UserContext)

   if (context === undefined) {
     throw new Error('Error!!!!! Citizen, you are guilty of a mind crime, the thought police are en route. Please remain calm and stay seated.')
   }
//    step 6 return ctx
   return context
 }
    // step 7 export UserProvider and useCustomHook
    // go to index.jsx and wrap app component in Provider component
export { UserProvider, useCustomHook }

