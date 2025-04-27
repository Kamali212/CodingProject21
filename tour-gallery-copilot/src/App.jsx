import { useState, useEffect } from 'react';
import Gallery from './components/Gallery';
import './App.css';

function App() {
  // State to store the list of tours
  const [tours, setTours] = useState([]);
  // State to track loading status
  const [loading, setLoading] = useState(true);
  // State to store any error messages
  const [error, setError] = useState(null);

  // Function to fetch tours from the API
  const fetchTours = async () => {
    setLoading(true); // Set loading to true before fetching
    try {
      const response = await fetch('https://www.course-api.com/react-tours-project');
      if (!response.ok) {
        throw new Error('Failed to fetch tours'); // Throw error if response is not ok
      }
      const data = await response.json();
      setTours(data); // Update tours state with fetched data
      setError(null); // Clear any previous errors
    } catch (err) {
      setError(err.message); // Set error message if fetch fails
    } finally {
      setLoading(false); // Set loading to false after fetch completes
    }
  };

  // useEffect to fetch tours when the component mounts
  useEffect(() => {
    fetchTours();
  }, []);

  // Function to remove a tour by its ID
  const removeTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };

  // Render loading message if data is being fetched
  if (loading) {
    return <h2>Loading...</h2>;
  }

  // Render error message if there is an error
  if (error) {
    return <h2>Error: {error}</h2>;
  }

  // Render a refresh button if no tours are left
  if (tours.length === 0) {
    return (
      <div>
        <h2>No Tours Left</h2>
        <button onClick={fetchTours}>Refresh</button>
      </div>
    );
  }

  // Render the Gallery component with the tours data
  return (
    <div>
      <h1>Tour Gallery</h1>
      <Gallery tours={tours} onRemove={removeTour} />
    </div>
  );
}

export default App;