import { useState } from "react";
interface Props {
  cities: string[];
  heading: string;
}
function ListGroup({cities, heading}: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1)
  // cities = [];
  return (
    <>
    <h1 className=" font-thin text-2xl text-blue-500">{heading}</h1>
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
