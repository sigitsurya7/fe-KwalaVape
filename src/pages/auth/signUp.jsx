import React, { useState } from "react";
import Swal from "sweetalert2";
import AuthLayout from "../../layout/auth";
import { showErrorAlert } from "../../config/config";

const SignUp = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isChecked) {
      showErrorAlert("Please accept the Terms & Conditions.");
      return;
    }

    const { firstName, lastName, email, username, password } = formData;

    if (!firstName || !lastName || !email || !username || !password) {
      showErrorAlert("Harap isi semua");
      return;
    }

    if (password.length < 8) {
      showErrorAlert("Password minimum 8 karakter!.");
      return;
    }

    
  };

  return (
    <AuthLayout>
      <div className="">
        <h1 className="text-3xl font-bold text-blue-400 text-center my-1">
            <a href="/">
                Kwala<span className="text-black dark:text-white">Store</span>
            </a>
        </h1>
        <p className="text-gray-400 text-sm mb-8 text-center font-medium">
          Register for more promo!
        </p>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-2">
            <input
              type="text"
              className="my-4 px-4 py-2 border-2 border-current rounded-lg block w-full"
              placeholder="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
            />
            <input
              type="text"
              className="my-4 px-4 py-2 border-2 border-current rounded-lg block w-full"
              placeholder="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </div>
          <input
            type="text"
            className="px-4 py-2 border-2 border-current rounded-lg block w-full"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <input
            type="text"
            className="my-4 px-4 py-2 border-2 border-current rounded-lg block w-full"
            placeholder="Username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
          <input
            type="text"
            className="my-4 px-4 py-2 border-2 border-current rounded-lg block w-full"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <label htmlFor="" className="text-sm text-gray-500">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />{" "}
            Term & Condition
          </label>
          <button
            type="submit"
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
  );
};

export default SignUp;
