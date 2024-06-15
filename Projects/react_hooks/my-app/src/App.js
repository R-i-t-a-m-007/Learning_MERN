import React from 'react';
import JokeFetcher from './JokeFetcher';

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-400">
      <div className="grid grid-cols-2 gap-4 p-6 border-2 border-purple-500 rounded-lg bg-white shadow-xl w-[64rem]">
        <JokeFetcher />
      </div>
    </div>
  );
}

export default App;
