

import { useState } from "react";
import api from "../api/Api";

const CreateUser = () => {

    const [id, setId] = useState("");
    const [name, setName] = useState("");

    const createUser = async (e) => {
        e.preventDefault();

        try {

            const response = await api.post("/users/", {
                id,
                name,
            });

            alert(response.data.message);

            setId("");
            setName("");

        } catch (error) {
            console.log(error);
            alert("Failed to create user");
        }
    };

    return (

        <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-xl p-8">

            <h1 className="text-3xl font-bold text-center mb-6">
                Create User
            </h1>

            <form
                onSubmit={createUser}
                className="space-y-5"
            >

                <div>

                    <label className="block font-semibold mb-2">
                        User ID
                    </label>

                    <input
                        type="text"
                        placeholder="Enter User ID"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                        className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />

                </div>

                <div>

                    <label className="block font-semibold mb-2">
                        Name
                    </label>

                    <input
                        type="text"
                        placeholder="Enter Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />

                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg"
                >
                    Create User
                </button>

            </form>

        </div>
    );
};

export default CreateUser;