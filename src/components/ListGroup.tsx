import { useState } from "react";
function ListGroup() {
  let cities = ["New York", "London", "Dubai", "Paris", "Kuala Lumpur"];
  const [selectedIndex, setSelectedIndex] = useState(-1)
  // cities = [];
  return (
    <>
      {cities.length === 0 && <p>No results found</p>}
      <ul className="font-thin text-2xl">
        {cities.map((city, index) => (
          <li key={index} onClick={() => {setSelectedIndex(index)}} className={index === selectedIndex ? 'active' : ''}>
            {city}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
