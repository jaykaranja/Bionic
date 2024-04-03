import { createContext, useContext, useReducer } from 'react';

// Define the initial state for the music player
const initialState = {
  currentTrack: null,
  isPlaying: false
};

// Define the action types
const PLAY_TRACK = 'PLAY_TRACK';
const PAUSE_TRACK = 'PAUSE_TRACK';

// Define the reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case PLAY_TRACK:
      return {
        ...state,
        currentTrack: action.payload,
        isPlaying: true
      };
    case PAUSE_TRACK:
      return {
        ...state,
        isPlaying: false
      };
    default:
      return state;
  }
};

// Create the context
const MusicPlayerContext = createContext('Hello');

// Create a custom hook to access the context
// Custom hook to use the music player context
export const useMusicPlayer = () => {
    const context = useContext(MusicPlayerContext);
    if (!context) {
      throw new Error('useMusicPlayer must be used within a MusicPlayerProvider');
    }
    return context;
  };

// Create the provider component
export const MusicPlayerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Action creator functions
  const playTrack = (url) => {
    dispatch({ type: PLAY_TRACK, payload: url });
  };

  const pauseTrack = () => {
    dispatch({ type: PAUSE_TRACK });
  };

  return (
    <MusicPlayerContext.Provider value={{ state, playTrack, pauseTrack }}>
      {children}
    </MusicPlayerContext.Provider>
  );
};
