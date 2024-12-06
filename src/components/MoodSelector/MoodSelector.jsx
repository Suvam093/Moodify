import React from 'react'

const MoodSelector = () => {
    const moods = [Happy, Sad, Motivated, Relaxed, Excited, Bored];
    return (
        <div>
            {moods.map((mood) => (
                <button
                    key = {mood}
                    onClick = {() => onSelectedMood(mood)}
                    className='bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600'
                >
                    {mood}
                </button>
            ))}
        </div>
    )
}

export default MoodSelector
