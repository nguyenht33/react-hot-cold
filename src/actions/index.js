export const RESTART_GAME = 'RESTART_GAME';
export const restartGame = () => ({
  type: RESTART_GAME,
})

export const MAKE_GUESS = 'MAKE_GUESS';
export const makeGuess = (feedback, guesses)=> ({
  type: MAKE_GUESS,
  feedback,
  guesses
})

export const GENERATE_AURAL_UPDATE = 'GENERATE_AURAL_UPDATE';
export const generateAuralUpdate = auralStatus => ({
  type: GENERATE_AURAL_UPDATE,
  auralStatus
})
