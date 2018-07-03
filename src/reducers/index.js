import {RESTART_GAME, MAKE_GUESS, GENERATE_AURAL_UPDATE} from '../actions';

const initialState = {
  guesses: [],
  feedback: 'Make your guess!',
  auralStatus: '',
  correctAnswer: Math.round(Math.random() * 100) + 1
}

export const gameReducer = (state=initialState, action) => {
  if (action.type === RESTART_GAME) {
    return Object.assign({}, state, {
        guesses: [],
        feedback: 'Make your guess!',
        auralStatus: '',
        correctAnswer: Math.round(Math.random() * 100) + 1
    });
  } else if (action.type === MAKE_GUESS) {
      return Object.assign({}, state, {
        guesses: [...state.guesses, action.guesses],
        feedback: action.feedback
      })
  } else if (action.type === GENERATE_AURAL_UPDATE) {
      return Object.assign({}, state, {
        auralStatus: action.auralStatus
      })
  }
  return state;
};
