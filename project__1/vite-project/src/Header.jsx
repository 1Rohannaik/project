import { useState } from "react";

const Header = () => {
  const [selectedRoute, setSelectedRoute] = useState("");

  const handleDropdownChange = (e) => {
    const value = e.target.value;
    setSelectedRoute(value);
    if (value) {
      window.location.href = value;
    }
  };

  return (
      <div className=" p-4 h-16 bg-blue-700 flex items-center justify-between text-white">
          <h1 className="font-semibold text-2xl">header</h1>
      <div className="relative">
        <select
          onChange={handleDropdownChange}
          className="w-44 p-4 bg-gray-800 rounded-full text-center text-white hover:bg-gray-600"
        >
          <option value="">Select an option</option>
          <option value="/route1">Option 1</option>
          <option value="/route2">Option 2</option>
          <option value="/route3">Option 3</option>
          <option value="/route4">Option 4</option>
          <option value="/route5">Option 5</option>
          <option value="/route6">Option 6</option>
          <option value="/route7">Option 7</option>
          <option value="/route8">Option 8</option>
          <option value="/route9">Option 9</option>
          <option value="/route10">Option 10</option>
          <option value="/route11">Option 11</option>
          <option value="/route12">Option 12</option>
        </select>
      </div>
    </div>
  );
};

export default Header;
