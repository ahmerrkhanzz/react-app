import ListGroup from './components/ListGroup';

function App() {
  const cities = ["New York", "London", "Dubai", "Paris", "Kuala Lumpur"];
  return <div><ListGroup cities={cities} heading="Cities"/></div>
}

export default App;