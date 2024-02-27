import ListGroup from './components/ListGroup';

function App() {
  const cities = ["New York", "London", "Dubai", "Paris", "Kuala Lumpur"];
  return <div><ListGroup cities={cities} heading="Cities" onSelectItem={(city: string) => {console.log(city)}}/></div>
}

export default App;