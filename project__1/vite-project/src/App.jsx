import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";



const RoutePage = ({ number }) => (
  <div className="text-center text-white mt-20">This is Route {number}</div>
);

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <div className="bg-black min-h-screen flex flex-col">
          <Routes>
            <Route
              path="/"
              element={
                <div className="text-white text-center mt-20">
                  Welcome to the Home Page
                </div>
              }
            />
            <Route path="/route1" element={<RoutePage number={1} />} />
            <Route path="/route2" element={<RoutePage number={2} />} />
            <Route path="/route3" element={<RoutePage number={3} />} />
            <Route path="/route4" element={<RoutePage number={4} />} />
            <Route path="/route5" element={<RoutePage number={5} />} />
            <Route path="/route6" element={<RoutePage number={6} />} />
            <Route path="/route7" element={<RoutePage number={7} />} />
            <Route path="/route8" element={<RoutePage number={8} />} />
            <Route path="/route9" element={<RoutePage number={9} />} />
            <Route path="/route10" element={<RoutePage number={10} />} />
            <Route path="/route11" element={<RoutePage number={11} />} />
            <Route path="/route12" element={<RoutePage number={12} />} />
          </Routes>
        </div>
      </Router>

      <Footer/>

    </div>
  );
};

export default App;
