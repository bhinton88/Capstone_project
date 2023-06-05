import { useEffect } from "react"
import CreateUserForm from "../components/CreateUserForm"

function Account () {

  // for our account page, we want to make a call to our back end.. and find out if our current user is signed in
  // if not then we want to direct them to sign in or create an account. 

  // upon either logging in or creating an account, then they can proceed to the account dashboard which will show 
  // a users current orders and their user profile. They will be allowed to update their user profile. 

  // useEffect(()=> {
  //   fetch("/me")
  //   .then((response) => {
  //     if(response.ok)
  //     {
  //       response.json()
  //       .then((user) => {
  //         setUser(user)
  //         setSignups(user.signups)
  //       })
  //     }
  //   })
  // }, [])

  return(
    <>
      <h1>Hello!</h1>
    </>

  )

}

export default Account