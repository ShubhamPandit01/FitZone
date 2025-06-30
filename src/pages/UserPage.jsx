
import Signup from "../component/Signup"
import Login from "../component/Login"
import { useState } from "react"


const UserPage = () => {

    const [userDisplay, setUserDisplay] = useState(true)

  return (
    <>
        {userDisplay? <Signup setUserDisplay = {setUserDisplay}/> : <Login setUserDisplay = {setUserDisplay}/>}
    </>
  )
}

export default UserPage