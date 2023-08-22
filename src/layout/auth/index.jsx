import { ShoppingFilled } from "@ant-design/icons"
import { Navigation } from "../../config/config"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { isAuthenticatedAdmin, isAuthenticatedUser, isLoggedIn } from "../../middleware/auth/authentication"

const AuthLayout = ({children}) => {

    const Home = Navigation({ link: '/'})
    const navigate = useNavigate()

    useEffect(() => {
        if (isLoggedIn()) {
          if(isAuthenticatedAdmin()){
            navigate('/ngadimin')
          }else if(isAuthenticatedUser){
            navigate('/')
          }
        }
      }, [])

    return(
        <>
            <div className="grid grid-cols-3 min-h-screen w-screen">
                {/* Image */}
                <div className="relative col-span-2 hidden lg:block bg-slate-900">
                    <h1 className="absolute text-5xl text-white text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <ShoppingFilled className="ml-2 mb-2" />
                        <button onClick={Home} className="justify-center text-white font-bold w-full h-full px-4 py-2 flex items-center">
                            Kwala<span className="text-blue-400">Store</span>
                        </button>
                    </h1>
                </div>

                {/* Form */}
                <div className="relative lg:col-span-1 col-span-3">
                    <div className="absolute w-96 px-8 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}

export default AuthLayout