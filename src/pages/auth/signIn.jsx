import AuthLayout from "../../layout/auth"

const SignIn = () => {
    return(
        <AuthLayout>
            <div className="">
                <h1 className="text-3xl font-bold text-blue-400 text-center my-1">
                    <a href="/">
                        Kwala<span className="text-black dark:text-white">Store</span>
                    </a>
                </h1>
                <p className="text-gray-400 text-sm mb-8 text-center font-medium">Login for more promo!</p>
                <form action="">
                    <input type="text" className="my-4 px-4 py-2 border-2 border-current rounded-lg block w-full" placeholder="Username" />
                    <input type="password" className="my-4 px-4 py-2 border-2 border-current rounded-lg block w-full" placeholder="Password" />
                    <a href="">
                        <p className="text-right my-4">Lupa password?</p>
                    </a>
                    <button className="my-4 block w-full py-2 bg-blue-400 text-white uppercase font-semibold rounded-lg shadow-md">login</button>
                </form>
                <a href="/sign-up">Belum memiliki akun ?</a>
            </div>
        </AuthLayout>
    )
}

export default SignIn