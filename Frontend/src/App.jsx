import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";

import Home from "./Pages/Home";
import MovieList from "./Components/MovieList";
import MovieDetail from "./Components/MovieDetail";
import Recommendation from "./Components/Recomendation";
import CreateUser from "./Components/CreateUser";
import Footer from "./Pages/Footer";

const App = () => {
  return (
    <>
      <Navbar />

      <div className="container mx-auto p-4">
        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/movies" element={<MovieList />} />

          <Route path="/movie/:id" element={<MovieDetail />} />

          <Route
    path="/recommendation"
    element={<Recommendation />}
/>

          <Route
            path="/create-user"
            element={<CreateUser />}
          />

        </Routes>
        <Footer/>
      </div>
    </>
  );
};

export default App;