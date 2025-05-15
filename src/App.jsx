import React from 'react';
import './App.css'
import TripDashboard from './components/TripDashboard.jsx';

function App() {

  const doSumthing = (data) => {
    console.log("Data from TripFetcherComponent:", data);
  }

  return (
    <>
      <TripDashboard />

    </>
  ) 
}

export default App
