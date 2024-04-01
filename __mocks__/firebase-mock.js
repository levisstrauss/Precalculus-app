// __mocks__/firebase-mock.js

export const createUserWithEmailAndPassword = jest.fn().mockResolvedValue({
  user: {
    uid: '123',
  },
});

export const sendEmailVerification = jest.fn().mockResolvedValue();

export const getAuth = jest.fn().mockReturnValue({
  createUserWithEmailAndPassword,
});

export const getDatabase = jest.fn().mockReturnValue({
  ref: jest.fn().mockReturnThis(),
  set: jest.fn().mockResolvedValue(),
});
