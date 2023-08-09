import React, { useState } from "react"
import AuthLayout from "../../layout/auth"

const SignUp = () => {
  const [isChecked, setIsChecked] = useState(false) 

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked)
  }

  return (
    <AuthLayout>
      <div className="">
        <h1 className="text-3xl font-bold text-blue-400 text-center my-1">
          Kwala<span className="text-black dark:text-white">Store</span>
        </h1>
        <p className="text-gray-400 text-sm mb-8 text-center font-medium">
          Register for more promo!
        </p>
        <form action="">
          <div className="grid grid-cols-2 gap-2">
            <input
              type="text"
              className="my-4 px-4 py-2 border-2 border-current rounded-lg block w-full"
              placeholder="Nama Depan"
            />
            <input
              type="text"
              className="my-4 px-4 py-2 border-2 border-current rounded-lg block w-full"
              placeholder="Nama Belakang"
            />
          </div>
          <input
            type="text"
            className="px-4 py-2 border-2 border-current rounded-lg block w-full"
            placeholder="Email"
          />
          <input
            type="text"
            className="my-4 px-4 py-2 border-2 border-current rounded-lg block w-full"
            placeholder="Username"
          />
          <input
            type="password"
            className="my-4 px-4 py-2 border-2 border-current rounded-lg block w-full"
            placeholder="Password"
          />
          <label htmlFor="" className="text-sm text-gray-500 underline">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />{" "}
            Term & Condition
          </label>
          <button
            className={`my-4 block w-full py-2 ${
              isChecked ? "bg-blue-400" : "bg-gray-400"
            } text-white uppercase font-semibold rounded-lg shadow-md`}
            disabled={!isChecked}
          >
            Submit
          </button>
        </form>
      </div>
    </AuthLayout>
  )
}

export default SignUp