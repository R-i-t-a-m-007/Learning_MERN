import React, { useEffect, useState } from 'react';

function JokeFetcher() {
  const [joke, setJoke] = useState('');
  const [fetchCount, setFetchCount] = useState(0);

  useEffect(() => {
    const fetchJoke = async () => {
      try {
        const response = await fetch('https://api.chucknorris.io/jokes/random');
        const data = await response.json();
        setJoke(data.value);
      } catch (err) {
        console.log('Error fetching the joke: ', err);
      }
    };
    fetchJoke();
  }, [fetchCount]);

  return (
    <>
      <div className="flex flex-col items-center justify-center p-6 border-2 border-blue-300 rounded-lg bg-blue-200 shadow-lg transition-transform transform hover:scale-105">
        <span className="text-7xl mb-6">😂</span>
        <h1 className="text-3xl font-extrabold mb-6 text-blue-900">Random Joke App</h1>
        <button
          onClick={() => setFetchCount(fetchCount + 1)}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full shadow-md transition-transform transform hover:scale-110"
        >
          New Joke
        </button>
      </div>
      <div className="flex items-center justify-center p-6 border-2 border-gray-300 rounded-lg bg-white shadow-lg transition-transform transform hover:scale-105">
        <p className="text-xl text-gray-800 font-medium">{joke}</p>
      </div>
    </>
  );
}

export default JokeFetcher;
