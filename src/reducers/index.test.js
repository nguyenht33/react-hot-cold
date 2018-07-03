import {gameReducer} from './index';
import {restartGame, makeGuess, generateAuralUpdate} from '../actions';

describe ('gameReducer', () => {
  it('Should set the initial state when nothing is passed in', () => {
    const state = gameReducer(undefined, {type: '__UNKNOWN'});

    expect(state.guesses).toEqual([]);
    expect(state.feedback).toEqual('Make your guess!');
    expect(state.auralStatus).toEqual('');
    expect(state.correctAnswer).toBeGreaterThanOrEqual(1);
    expect(state.correctAnswer).toBeLessThanOrEqual(100);
  });

  describe('restartGame', () => {
    it('Should set state to initial state', () => {
      const correctAnswer = Math.floor(Math.random() * 100) + 1;
      let state;
      state = gameReducer(state, restartGame(correctAnswer));
      expect(state).toEqual({
        guesses: [],
        feedback: 'Make your guess!',
        auralStatus: '',
        correctAnswer
      });
    });
  });

  describe('makeGuess', () => {
    it('Should ask for a valid number with invalid input', () => {
      let state;
      state = gameReducer(state, makeGuess('x'));
      expect(state.feedback).toEqual('Please enter a valid number.');
    });

    it('Should add guess to guessList', () => {
      let state;
      state = gameReducer(state, makeGuess(10));
      expect(state.guesses.length).toEqual(1);
      expect(state.guesses[0]).toEqual(10);
    })

    describe('makeGuess feedback', () => {
      let state = {
        guesses: [],
        feedback: 'Make your guess!',
        auralStatus: '',
        correctAnswer: 60
      };

      it('Should return ice cold', () =>  {
        state = gameReducer(state, makeGuess(1));
        expect(state.feedback).toEqual("You're Ice Cold...");
      });

      it('Should return cold', () =>  {
        state = gameReducer(state, makeGuess(20));
        expect(state.feedback).toEqual("You're Cold...");
      });

      it('Should return warm', () =>  {
        state = gameReducer(state, makeGuess(40));
        expect(state.feedback).toEqual("You're Warm.");
      });

      it('Should return hot', () =>  {
        state = gameReducer(state, makeGuess(55));
        expect(state.feedback).toEqual("You're Hot!");
      });

      it('Should return you got it!', () =>  {
        state = gameReducer(state, makeGuess(60));
        expect(state.feedback).toEqual("You got it!");
      });

    });
  });
});
