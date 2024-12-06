import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMood } from '../../features/moodSlice';

function Home() {
  const dispatch = useDispatch();
  const contentList = useSelector((state) => state.mood.contentList);

  const handleMood = (mood) => {
    dispatch(setMood(mood));
  };

  return (
    <div className="p-4 ">
      <h1 className="text-3xl font-bold mb-4 flex flex-col">Moodify: Select your mood</h1>
      <div className="flex flex-wrap gap-4 mb-6 flex justify-center">
        {['Happy', 'Sad', 'Motivated', 'Relaxed', 'Excited', 'Bored'].map((mood) => (
          <button
            key={mood}
            onClick={() => handleMood(mood)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 "
          >
            {mood}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {contentList.length > 0 ? (
          contentList.map((item, index) => (
            <div key={index} className="bg-white p-4 shadow-md rounded">
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p>{item.description}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">Select a mood to see recommendations!</p>
        )}
      </div>
    </div>
  );
}

export default Home;
