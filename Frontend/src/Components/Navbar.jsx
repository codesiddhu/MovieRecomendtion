import { Link } from "react-router-dom";

const Navbar = () => {
    return (

        <nav className="bg-gray-900 text-white p-4">

            <div className="max-w-7xl mx-auto flex justify-between">

                <Link
                    to="/"
                    className="text-2xl font-bold"
                >
                    🎬 Movie Recommendation
                </Link>

                <div className="space-x-6">

                    <Link to="/">Home</Link>

                    <Link to="/create-user">
                        Create User
                    </Link>

                    <Link to="/recommendation/U001">
                        Recommendation
                    </Link>

                </div>

            </div>

        </nav>

    );
};

export default Navbar;