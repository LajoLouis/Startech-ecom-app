import { useState, useContext } from "react"
import EcomContext from "../../context/EcomContext"
import { useNavigate } from "react-router-dom"
import AuthContext from "../../context/AuthContext"
import useLocalStorage from "../../hooks/useLocalStorage"

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {showAndHide} = useContext(EcomContext)
    const [state, dispatch] = useContext(AuthContext)
    const {setItem} = useLocalStorage("auth-token")

    const redirect = useNavigate()

    const loginHandler = async(e)=>{
        e.preventDefault()
        try {
            const res = await fetch("https://startech-backend-60s5.onrender.com/api/login", {
                method : "POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({email, password})
            })

            const data = await res.json()
            if (data === "invalid email/password") {
                showAndHide("error", "invalid email/password")
            }else {
                dispatch({type: "setToken", payload:data.token})
                setItem(data.token)
                redirect("/")
                showAndHide("success", "Login successful")
            }
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div className='my-[5%] mx-[30%] '>
        <h1 className="text-center mb-[10px] text-2xl font-bold">Login</h1>
            <form onSubmit={loginHandler}>
                <div className="mb-3">
                    <input type="email" placeholder='Email-Address' className='w-full p-[10px] border-b-[1px] shadow-sm border-stone-500' onChange={(e)=> setEmail(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <input type="password" placeholder='Password' className='w-full p-[10px] border-b-[1px] shadow-sm border-stone-500' onChange={(e)=> setPassword(e.target.value)}/>
                </div>
                <div className='my-[3%]'>
                    <button className="bg-blue-950 p-[10px] text-white rounded-lg">Login</button>
                </div>
            </form>
    </div>
  )
}

export default Login