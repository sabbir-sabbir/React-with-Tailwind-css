import { useState } from "react";

function Form() {
//Initialy empty input field
    const [formdata, setFormData] = useState({
        name: "",
        email: ""
    });
// For submitting data
    const [submittedData, setSubmittedData] = useState({
        name: "",
        email: ""
    });
// Catch the changing value
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((predata) => ({
            ...predata,
            [name]: value
        }));
    };
// Finally event handler
    const HandleSubmit = (event) => {
        event.preventDefault();
        setSubmittedData(formdata);
    };
    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
                <div className="w-full p-10 max-w-md bg-white rounded-md shadow-lg">
                    <h1 className="text-2xl font-bold text-gray-800 text-center">React Login Form</h1>
                    <form onSubmit={HandleSubmit}>
                        <div>
                            <label className="block text-sm text-gray-600">Name:</label>
                            <input
                                onChange={handleChange}
                                name="name"
                                className="block mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-lg"
                                type="text"
                                placeholder="Enter your name."
                                value={formdata.name}
                            />
                        </div>
                        <div className="mt-2">
                            <label className="block text-sm text-gray-600">Email:</label>
                            <input
                                onChange={handleChange}
                                name="email"
                                type="email"
                                placeholder="Enter your email."
                                className="block mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-lg"
                                value={formdata.email}
                            />
                        </div>
                        <div className="mt-2">
                            <label className="block text-sm text-gray-600">Password:</label>
                            <input
                                type="password"
                                placeholder="Enter your password."
                                className="block mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-lg"
                            />
                        </div>
                        <button  type="submit" className="w-full bg-indigo-600 text-white p-2 mt-3 rounded-md">
                            Login
                        </button>
                    </form>
                    <div>
                        <h2 className="text-center mt-5 font-bold">User Information</h2>
                        <p className="text-gray-800">Name: {submittedData.name}</p>
                        <p className="text-gray-800">Email: {submittedData.email}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Form;
