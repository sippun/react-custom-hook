import logo from './logo.svg';
import './App.css';

import useApi from './useApi';

function App() {
  const { loading, data } = useApi('https://jsonplaceholder.typicode.com/users');

  if (loading) return <h1>Loading</h1>

  return (
    <div className="App">
      <h1>Data fetched successfully</h1>
      {JSON.stringify(data)}
    </div>
  );
}

export default App;
