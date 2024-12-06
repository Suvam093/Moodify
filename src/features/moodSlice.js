import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    mood: '',
    contentList : []
};


const allMoods = {
    'Happy': [
        {title :  'Upbeat song', description: 'A song that makes you feel good'},
        {title :  'Feel good Movie', description: 'Movie that makes you laugh your heart out'},
    ],

    'Sad': [
        {title :  'Comforting Songs', description: 'Its okay to feel down sometimes.'},
        {title :  'Heartwarming Movie', description: 'A movie to lift your spirits.'},
    ],

    'Motivated': [
        {title :  'Workout Playlist', description: 'Pump it up'},
        {title :  'Inspiring talk', description: 'Accomplish what matters most.'},
    ],

    'Relaxed': [
        {title :  'Chill Vibes', description: 'Music to keep it mellow.'},
        {title :  'Nature Documentary ', description: 'Breathe in the calm.'},
    ],

    'Excited': [
        { title: 'High-Energy Song', description: 'Turn up the volume and vibe!' },
        { title: 'Action-Packed Movie ', description: 'Something fast-paced and thrilling!' },
  ],

    'Bored': [
        { title: 'Casual Playlist', description: 'Something light to pass the time.' },
        { title: 'Comedy Show', description: 'Light-hearted entertainment to lift your spirits.' },
    ],
};



const moodSlice = createSlice({
    name: 'mood',
    initialState, 
    reducers: {
        setMood: (state, action) => {
            state.mood = action.payload;
            state.contentList = allMoods[action.payload]  || [];
            console.log('Mood set to:', action.payload, 'Content List:', state.contentList);
        }
    }
})

export const  {setMood} = moodSlice.actions;
export default moodSlice.reducer;