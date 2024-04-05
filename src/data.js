import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyDg9evCOPYTi3UNIO5131zZp98pZBHoe_I",
  authDomain: "authfirebasereactnatives.firebaseapp.com",
  projectId: "authfirebasereactnatives",
  storageBucket: "authfirebasereactnatives.appspot.com",
  messagingSenderId: "208497038411",
  appId: "1:208497038411:web:528d03424fa081f72929ce",
  measurementId: "G-CC83YNZEEC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// const quizzes = [
//   {
//     id: '1',
//     title: 'Inverse Functions',
//     iconName: 'git-compare-outline',
//     questions: [
//       {
//         id: "q0",
//         type: "FILL_IN_THE_BLANK",
//         text: "Una mina, una",
//         options: ["yo", "la", "mujer", "el"],
//         correct: "mujer",
//       },
//       {
//         id: "q1",
//         type: "IMAGE_MULTIPLE_CHOICE",
//         question: 'What is the derivative of "X" ?',
//         options: [
//           {
//             id: "option1",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
//             text: "xe^x",
//           },
//           {
//             id: "option2",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
//             text: "e^x",
//             correct: true,
//           },
//           {
//             id: "option3",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
//             text: "2xe^x",
//           },
//           {
//             id: "option4",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
//             text: "x^2e^x",
//           },
//         ],
//       },
//       {
//         id: "q2",
//         type: "OPEN_ENDED",
//         text: "Is derivative and integral the same?",
//         answer: "No",
//       },
//       {
//         id: "q3",
//         type: "IMAGE_MULTIPLE_CHOICE",
//         question: 'What is the derivative of lnx"?',
//         options: [
//           {
//             id: "option4",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
//             text: "1/x",
//             correct: true,
//           },
//           {
//             id: "option1",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
//             text: "2x",
//           },
//           {
//             id: "option3",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
//             text: "3xlnx",
//           },
//           {
//             id: "option2",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
//             text: "e^x",
//           },
//         ],
//       },
//       {
//         id: "q4",
//         type: "IMAGE_MULTIPLE_CHOICE",
//         type: "OPEN_ENDED",
//         text: "La mujer",
//         answer: "the woman",
//       },
//       {
//         id: "q3",
//         question: 'Which of these is "the cup"?',
//         type: "IMAGE_MULTIPLE_CHOICE",
//         options: [
//           {
//             id: "option3",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
//             text: "la leche",
//           },
//           {
//             id: "option2",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
//             text: "el vaso",
//           },
//           {
//             id: "option4",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
//             text: "el café",
//           },
//           {
//             id: "option1",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
//             text: "la taza",
//             correct: true,
//           },
//         ],
//       },
//       {
//         id: "q5",
//         type: "OPEN_ENDED",
//         text: "Me gusta React Native",
//         answer: "I like react native",
//       },
//       {
//         id: "q6",
//         type: "IMAGE_MULTIPLE_CHOICE",
//         question: 'Which of these is "the milk"?',
//         options: [
//           {
//             id: "option2",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
//             text: "el vaso",
//           },
//           {
//             id: "option3",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
//             text: "la leche",
//             correct: true,
//           },
//           {
//             id: "option1",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
//             text: "la taza",
//           },
//           {
//             id: "option4",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
//             text: "el café",
//           },
//         ],
//       },
//     ],
//   },
//
//   {
//     id: '2',
//     title: 'Trigonometry',
//     iconName: 'compass-outline',
//     questions: [
//       {
//         id: "q0",
//         type: "FILL_IN_THE_BLANK",
//         text: "lala lili, lolo",
//         options: ["yo", "la", "mujer", "el"],
//         correct: "mujer",
//       },
//       {
//         id: "q1",
//         type: "IMAGE_MULTIPLE_CHOICE",
//         question: 'What is the derivative of "X" ?',
//         options: [
//           {
//             id: "option1",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
//             text: "xe^x",
//           },
//           {
//             id: "option2",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
//             text: "e^x",
//             correct: true,
//           },
//           {
//             id: "option3",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
//             text: "2xe^x",
//           },
//           {
//             id: "option4",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
//             text: "x^2e^x",
//           },
//         ],
//       },
//       {
//         id: "q2",
//         type: "OPEN_ENDED",
//         text: "Is derivative and integral the same?",
//         answer: "No",
//       },
//       {
//         id: "q3",
//         type: "IMAGE_MULTIPLE_CHOICE",
//         question: 'What is the derivative of lnx"?',
//         options: [
//           {
//             id: "option4",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
//             text: "1/x",
//             correct: true,
//           },
//           {
//             id: "option1",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
//             text: "2x",
//           },
//           {
//             id: "option3",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
//             text: "3xlnx",
//           },
//           {
//             id: "option2",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
//             text: "e^x",
//           },
//         ],
//       },
//       {
//         id: "q4",
//         type: "IMAGE_MULTIPLE_CHOICE",
//         // @ts-ignore
//         type: "OPEN_ENDED",
//         text: "La mujer",
//         answer: "the woman",
//       },
//       {
//         id: "q3",
//         question: 'Which of these is "the cup"?',
//         type: "IMAGE_MULTIPLE_CHOICE",
//         options: [
//           {
//             id: "option3",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
//             text: "la leche",
//           },
//           {
//             id: "option2",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
//             text: "el vaso",
//           },
//           {
//             id: "option4",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
//             text: "el café",
//           },
//           {
//             id: "option1",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
//             text: "la taza",
//             correct: true,
//           },
//         ],
//       },
//       {
//         id: "q5",
//         type: "OPEN_ENDED",
//         text: "Me gusta React Native",
//         answer: "I like react native",
//       },
//       {
//         id: "q6",
//         type: "IMAGE_MULTIPLE_CHOICE",
//         question: 'Which of these is "the milk"?',
//         options: [
//           {
//             id: "option2",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
//             text: "el vaso",
//           },
//           {
//             id: "option3",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
//             text: "la leche",
//             correct: true,
//           },
//           {
//             id: "option1",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
//             text: "la taza",
//           },
//           {
//             id: "option4",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
//             text: "el café",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     id: '3',
//     title: 'Complex Numbers',
//     iconName: 'infinite',
//     questions: [
//       {
//         id: "q0",
//         type: "FILL_IN_THE_BLANK",
//         text: "Una mina, una",
//         options: ["yo", "la", "mujer", "el"],
//         correct: "mujer",
//       },
//       {
//         id: "q1",
//         type: "IMAGE_MULTIPLE_CHOICE",
//         question: 'What is the derivative of "X" ?',
//         options: [
//           {
//             id: "option1",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
//             text: "xe^x",
//           },
//           {
//             id: "option2",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
//             text: "e^x",
//             correct: true,
//           },
//           {
//             id: "option3",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
//             text: "2xe^x",
//           },
//           {
//             id: "option4",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
//             text: "x^2e^x",
//           },
//         ],
//       },
//       {
//         id: "q2",
//         type: "OPEN_ENDED",
//         text: "Is derivative and integral the same?",
//         answer: "No",
//       },
//       {
//         id: "q3",
//         type: "IMAGE_MULTIPLE_CHOICE",
//         question: 'What is the derivative of lnx"?',
//         options: [
//           {
//             id: "option4",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
//             text: "1/x",
//             correct: true,
//           },
//           {
//             id: "option1",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
//             text: "2x",
//           },
//           {
//             id: "option3",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
//             text: "3xlnx",
//           },
//           {
//             id: "option2",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
//             text: "e^x",
//           },
//         ],
//       },
//       {
//         id: "q4",
//         type: "IMAGE_MULTIPLE_CHOICE",
//         // @ts-ignore
//         type: "OPEN_ENDED",
//         text: "La mujer",
//         answer: "the woman",
//       },
//       {
//         id: "q3",
//         question: 'Which of these is "the cup"?',
//         type: "IMAGE_MULTIPLE_CHOICE",
//         options: [
//           {
//             id: "option3",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
//             text: "la leche",
//           },
//           {
//             id: "option2",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
//             text: "el vaso",
//           },
//           {
//             id: "option4",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
//             text: "el café",
//           },
//           {
//             id: "option1",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
//             text: "la taza",
//             correct: true,
//           },
//         ],
//       },
//       {
//         id: "q5",
//         type: "OPEN_ENDED",
//         text: "Me gusta React Native",
//         answer: "I like react native",
//       },
//       {
//         id: "q6",
//         type: "IMAGE_MULTIPLE_CHOICE",
//         question: 'Which of these is "the milk"?',
//         options: [
//           {
//             id: "option2",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
//             text: "el vaso",
//           },
//           {
//             id: "option3",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
//             text: "la leche",
//             correct: true,
//           },
//           {
//             id: "option1",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
//             text: "la taza",
//           },
//           {
//             id: "option4",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
//             text: "el café",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     id: '4',
//     title: 'Rational functions',
//     iconName: 'calculator',
//     questions: [
//       {
//         id: "q0",
//         type: "FILL_IN_THE_BLANK",
//         text: "Una mina, una",
//         options: ["yo", "la", "mujer", "el"],
//         correct: "mujer",
//       },
//       {
//         id: "q1",
//         type: "IMAGE_MULTIPLE_CHOICE",
//         question: 'What is the derivative of "X" ?',
//         options: [
//           {
//             id: "option1",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
//             text: "xe^x",
//           },
//           {
//             id: "option2",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
//             text: "e^x",
//             correct: true,
//           },
//           {
//             id: "option3",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
//             text: "2xe^x",
//           },
//           {
//             id: "option4",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
//             text: "x^2e^x",
//           },
//         ],
//       },
//       {
//         id: "q2",
//         type: "OPEN_ENDED",
//         text: "Is derivative and integral the same?",
//         answer: "No",
//       },
//       {
//         id: "q3",
//         type: "IMAGE_MULTIPLE_CHOICE",
//         question: 'What is the derivative of lnx"?',
//         options: [
//           {
//             id: "option4",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
//             text: "1/x",
//             correct: true,
//           },
//           {
//             id: "option1",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
//             text: "2x",
//           },
//           {
//             id: "option3",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
//             text: "3xlnx",
//           },
//           {
//             id: "option2",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
//             text: "e^x",
//           },
//         ],
//       },
//       {
//         id: "q4",
//         type: "IMAGE_MULTIPLE_CHOICE",
//         // @ts-ignore
//         type: "OPEN_ENDED",
//         text: "La mujer",
//         answer: "the woman",
//       },
//       {
//         id: "q3",
//         question: 'Which of these is "the cup"?',
//         type: "IMAGE_MULTIPLE_CHOICE",
//         options: [
//           {
//             id: "option3",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
//             text: "la leche",
//           },
//           {
//             id: "option2",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
//             text: "el vaso",
//           },
//           {
//             id: "option4",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
//             text: "el café",
//           },
//           {
//             id: "option1",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
//             text: "la taza",
//             correct: true,
//           },
//         ],
//       },
//       {
//         id: "q5",
//         type: "OPEN_ENDED",
//         text: "Me gusta React Native",
//         answer: "I like react native",
//       },
//       {
//         id: "q6",
//         type: "IMAGE_MULTIPLE_CHOICE",
//         question: 'Which of these is "the milk"?',
//         options: [
//           {
//             id: "option2",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
//             text: "el vaso",
//           },
//           {
//             id: "option3",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
//             text: "la leche",
//             correct: true,
//           },
//           {
//             id: "option1",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
//             text: "la taza",
//           },
//           {
//             id: "option4",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
//             text: "el café",
//           },
//         ],
//       },
//     ],
//   }
//   ,
//   {
//     id: '5',
//     title: 'Conics',
//     iconName: 'ellipse-outline',
//     questions: [
//       {
//         id: "q0",
//         type: "FILL_IN_THE_BLANK",
//         text: "Una mina, una",
//         options: ["yo", "la", "mujer", "el"],
//         correct: "mujer",
//       },
//       {
//         id: "q1",
//         type: "IMAGE_MULTIPLE_CHOICE",
//         question: 'What is the derivative of "X" ?',
//         options: [
//           {
//             id: "option1",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
//             text: "xe^x",
//           },
//           {
//             id: "option2",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
//             text: "e^x",
//             correct: true,
//           },
//           {
//             id: "option3",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
//             text: "2xe^x",
//           },
//           {
//             id: "option4",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
//             text: "x^2e^x",
//           },
//         ],
//       },
//       {
//         id: "q2",
//         type: "OPEN_ENDED",
//         text: "Is derivative and integral the same?",
//         answer: "No",
//       },
//       {
//         id: "q3",
//         type: "IMAGE_MULTIPLE_CHOICE",
//         question: 'What is the derivative of lnx"?',
//         options: [
//           {
//             id: "option4",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
//             text: "1/x",
//             correct: true,
//           },
//           {
//             id: "option1",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
//             text: "2x",
//           },
//           {
//             id: "option3",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
//             text: "3xlnx",
//           },
//           {
//             id: "option2",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
//             text: "e^x",
//           },
//         ],
//       },
//       {
//         id: "q4",
//         type: "IMAGE_MULTIPLE_CHOICE",
//         // @ts-ignore
//         type: "OPEN_ENDED",
//         text: "La mujer",
//         answer: "the woman",
//       },
//       {
//         id: "q3",
//         question: 'Which of these is "the cup"?',
//         type: "IMAGE_MULTIPLE_CHOICE",
//         options: [
//           {
//             id: "option3",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
//             text: "la leche",
//           },
//           {
//             id: "option2",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
//             text: "el vaso",
//           },
//           {
//             id: "option4",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
//             text: "el café",
//           },
//           {
//             id: "option1",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
//             text: "la taza",
//             correct: true,
//           },
//         ],
//       },
//       {
//         id: "q5",
//         type: "OPEN_ENDED",
//         text: "Me gusta React Native",
//         answer: "I like react native",
//       },
//       {
//         id: "q6",
//         type: "IMAGE_MULTIPLE_CHOICE",
//         question: 'Which of these is "the milk"?',
//         options: [
//           {
//             id: "option2",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
//             text: "el vaso",
//           },
//           {
//             id: "option3",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
//             text: "la leche",
//             correct: true,
//           },
//           {
//             id: "option1",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
//             text: "la taza",
//           },
//           {
//             id: "option4",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
//             text: "el café",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     id: '6',
//     title: 'Vectors',
//     iconName: 'git-network',
//     questions: [
//       {
//         id: "q0",
//         type: "FILL_IN_THE_BLANK",
//         text: "Una mina, una",
//         options: ["yo", "la", "mujer", "el"],
//         correct: "mujer",
//       },
//       {
//         id: "q1",
//         type: "IMAGE_MULTIPLE_CHOICE",
//         question: 'What is the derivative of "X" ?',
//         options: [
//           {
//             id: "option1",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
//             text: "xe^x",
//           },
//           {
//             id: "option2",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
//             text: "e^x",
//             correct: true,
//           },
//           {
//             id: "option3",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
//             text: "2xe^x",
//           },
//           {
//             id: "option4",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
//             text: "x^2e^x",
//           },
//         ],
//       },
//       {
//         id: "q2",
//         type: "OPEN_ENDED",
//         text: "Is derivative and integral the same?",
//         answer: "No",
//       },
//       {
//         id: "q3",
//         type: "IMAGE_MULTIPLE_CHOICE",
//         question: 'What is the derivative of lnx"?',
//         options: [
//           {
//             id: "option4",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
//             text: "1/x",
//             correct: true,
//           },
//           {
//             id: "option1",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
//             text: "2x",
//           },
//           {
//             id: "option3",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
//             text: "3xlnx",
//           },
//           {
//             id: "option2",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
//             text: "e^x",
//           },
//         ],
//       },
//       {
//         id: "q4",
//         type: "IMAGE_MULTIPLE_CHOICE",
//         // @ts-ignore
//         type: "OPEN_ENDED",
//         text: "La mujer",
//         answer: "the woman",
//       },
//       {
//         id: "q3",
//         question: 'Which of these is "the cup"?',
//         type: "IMAGE_MULTIPLE_CHOICE",
//         options: [
//           {
//             id: "option3",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
//             text: "la leche",
//           },
//           {
//             id: "option2",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
//             text: "el vaso",
//           },
//           {
//             id: "option4",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
//             text: "el café",
//           },
//           {
//             id: "option1",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
//             text: "la taza",
//             correct: true,
//           },
//         ],
//       },
//       {
//         id: "q5",
//         type: "OPEN_ENDED",
//         text: "Me gusta React Native",
//         answer: "I like react native",
//       },
//       {
//         id: "q6",
//         type: "IMAGE_MULTIPLE_CHOICE",
//         question: 'Which of these is "the milk"?',
//         options: [
//           {
//             id: "option2",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
//             text: "el vaso",
//           },
//           {
//             id: "option3",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
//             text: "la leche",
//             correct: true,
//           },
//           {
//             id: "option1",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
//             text: "la taza",
//           },
//           {
//             id: "option4",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
//             text: "el café",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     id: '7',
//     title: 'Matrices',
//     iconName: 'grid',
//     questions: [
//       {
//         id: "q0",
//         type: "FILL_IN_THE_BLANK",
//         text: "Una mina, una",
//         options: ["yo", "la", "mujer", "el"],
//         correct: "mujer",
//       },
//       {
//         id: "q1",
//         type: "IMAGE_MULTIPLE_CHOICE",
//         question: 'What is the derivative of "X" ?',
//         options: [
//           {
//             id: "option1",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
//             text: "xe^x",
//           },
//           {
//             id: "option2",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
//             text: "e^x",
//             correct: true,
//           },
//           {
//             id: "option3",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
//             text: "2xe^x",
//           },
//           {
//             id: "option4",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
//             text: "x^2e^x",
//           },
//         ],
//       },
//       {
//         id: "q2",
//         type: "OPEN_ENDED",
//         text: "Is derivative and integral the same?",
//         answer: "No",
//       },
//       {
//         id: "q3",
//         type: "IMAGE_MULTIPLE_CHOICE",
//         question: 'What is the derivative of lnx"?',
//         options: [
//           {
//             id: "option4",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
//             text: "1/x",
//             correct: true,
//           },
//           {
//             id: "option1",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
//             text: "2x",
//           },
//           {
//             id: "option3",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
//             text: "3xlnx",
//           },
//           {
//             id: "option2",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
//             text: "e^x",
//           },
//         ],
//       },
//       {
//         id: "q4",
//         type: "IMAGE_MULTIPLE_CHOICE",
//         // @ts-ignore
//         type: "OPEN_ENDED",
//         text: "La mujer",
//         answer: "the woman",
//       },
//       {
//         id: "q3",
//         question: 'Which of these is "the cup"?',
//         type: "IMAGE_MULTIPLE_CHOICE",
//         options: [
//           {
//             id: "option3",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
//             text: "la leche",
//           },
//           {
//             id: "option2",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
//             text: "el vaso",
//           },
//           {
//             id: "option4",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
//             text: "el café",
//           },
//           {
//             id: "option1",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
//             text: "la taza",
//             correct: true,
//           },
//         ],
//       },
//       {
//         id: "q5",
//         type: "OPEN_ENDED",
//         text: "Me gusta React Native",
//         answer: "I like react native",
//       },
//       {
//         id: "q6",
//         type: "IMAGE_MULTIPLE_CHOICE",
//         question: 'Which of these is "the milk"?',
//         options: [
//           {
//             id: "option2",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
//             text: "el vaso",
//           },
//           {
//             id: "option3",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
//             text: "la leche",
//             correct: true,
//           },
//           {
//             id: "option1",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
//             text: "la taza",
//           },
//
//
//           {
//             id: "option4",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
//             text: "el café",
//           },
//         ],
//       },
//     ],
//   }
// ];
const quizzes = [
  {
    id: '1',
    title: 'Composite and Inverse Functions',
    iconName: 'git-compare-outline',
    questions: [
      {
        id: "q0",
        type: "OPEN_ENDED",
        text: "Is the inverse of a linear function also linear?",
        answer: "Yes"
      },
      {
        id: "q1",
        type: "OPEN_ENDED",
        text: "Is every composite function non-invertible?",
        answer: "No"
      },
      {
        id: "q2",
        type: "FILL_IN_THE_BLANK",
        text: "If f(x) = 2x + 3, the inverse function f^-1(x) is:",
        options: ["(x - 3) / 2", "(y - 3) / 2", "(2 - y) / 3", "(3 - x) / 2"],
        correct: "(y - 3) / 2"
      },
      {
        id: "q3",
        type: "FILL_IN_THE_BLANK",
        text: "The composite function f(g(x)) where f(x) = x^2 and g(x) = x + 1 is:",
        options: ["x^2 + 1", "(x + 1)^2", "x^2 + 2x + 1", "x^2(x + 1)"],
        correct: "(x + 1)^2"
      },
      {
        id: "q4",
        type: "FILL_IN_THE_BLANK",
        text: "If h(x) = 3x and j(x) = x - 2, h(j(x)) is:",
        options: ["3x - 2", "3(x - 2)", "9x - 6", "x - 6"],
        correct: "3(x - 2)"
      },
      {
        id: "q5",
        type: "FILL_IN_THE_BLANK",
        text: "The inverse function of f(x) = 1/x is f^-1(x) =",
        options: ["x", "1/x", "1", "x^2"],
        correct: "1/x"
      },
      {
        id: "q6",
        type: "IMAGE_MULTIPLE_CHOICE",
        question: "Which graph represents the inverse function of y = x^2 for x ≥ 0?",
        options: [
          {
            id: "option2",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
            text: "el vaso",
          },
          {
            id: "option3",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
            text: "la leche",
            correct: true,
          },
          {
            id: "option1",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
            text: "la taza",
          },


          {
            id: "option4",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
            text: "el café",
          },
        ]
      },
      {
        id: "q7",
        type: "IMAGE_MULTIPLE_CHOICE",
        question: "Select the graph of the composite function f(g(x)) where f(x) = x + 2 and g(x) = 2x.",
        options: [
          {
            id: "option2",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
            text: "el vaso",
          },
          {
            id: "option3",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
            text: "la leche",
            correct: true,
          },
          {
            id: "option1",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
            text: "la taza",
          },


          {
            id: "option4",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
            text: "el café",
          },
        ]
      },
      {
        id: "q8",
        type: "IMAGE_MULTIPLE_CHOICE",
        question: "Which graph shows the inverse of y = 1/x?",
        options: [
          {
            id: "option2",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
            text: "el vaso",
          },
          {
            id: "option3",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
            text: "la leche",
            correct: true,
          },
          {
            id: "option1",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
            text: "la taza",
          },


          {
            id: "option4",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
            text: "el café",
          },
        ]
      },
      {
        id: "q9",
        type: "IMAGE_MULTIPLE_CHOICE",
        question: "Identify the graph that represents the composite function h(j(x)) where h(x) = x^2 and j(x) = 2x + 1.",
        options: [
          {
            id: "option2",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
            text: "el vaso",
          },
          {
            id: "option3",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
            text: "la leche",
            correct: true,
          },
          {
            id: "option1",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
            text: "la taza",
          },


          {
            id: "option4",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
            text: "el café",
          },
        ]
      }
    ]
  },





  {
    id: '2',
    title: 'Trigonometry',
    iconName: 'compass-outline',
    questions: [
      {
        id: "q10",
        type: "OPEN_ENDED",
        text: "Is sin(90°) equal to 1?",
        answer: "Yes"
      },
      {
        id: "q11",
        type: "OPEN_ENDED",
        text: "Can the tangent of an angle be equal to 1?",
        answer: "Yes"
      },
      {
        id: "q12",
        type: "FILL_IN_THE_BLANK",
        text: "If cos(θ) = 1/2, then in the first quadrant θ is",
        options: ["30", "45", "60", "90"],
        correct: "60"
      },
      {
        id: "q13",
        type: "FILL_IN_THE_BLANK",
        text: "The sin(θ) is equal to cos(90° - θ) for any angle θ. Therefore, if sin(30°) = 1/2, cos(60°) is:",
        options: ["1/2", "√2/2", "√3/2", "1"],
        correct: "1/2"
      },
      {
        id: "q14",
        type: "FILL_IN_THE_BLANK",
        text: "The value of tan(45°) is:",
        options: ["1", "√2", "0", "∞"],
        correct: "1"
      },
      {
        id: "q15",
        type: "FILL_IN_THE_BLANK",
        text: "If sec(θ) = 2, then cos(θ) =",
        options: ["1/2", "2", "√2", "1"],
        correct: "1/2"
      },
      {
        id: "q16",
        type: "IMAGE_MULTIPLE_CHOICE",
        question: "Which graph represents the function y = sin(x)?",
        options: [
          {
            id: "option2",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
            text: "el vaso",
          },
          {
            id: "option3",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
            text: "la leche",
            correct: true,
          },
          {
            id: "option1",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
            text: "la taza",
          },
          {
            id: "option4",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
            text: "el café",
          },
        ]
      },
      {
        id: "q17",
        type: "IMAGE_MULTIPLE_CHOICE",
        question: "Select the graph that shows y = cos(x).",
        options: [
          {
            id: "option2",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
            text: "el vaso",
          },
          {
            id: "option3",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
            text: "la leche",
            correct: true,
          },
          {
            id: "option1",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
            text: "la taza",
          },


          {
            id: "option4",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
            text: "el café",
          },
        ]
      },
      {
        id: "q18",
        type: "IMAGE_MULTIPLE_CHOICE",
        question: "Which graph corresponds to the tangent function?",
        options: [
          {
            id: "option2",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
            text: "el vaso",
          },
          {
            id: "option3",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
            text: "la leche",
            correct: true,
          },
          {
            id: "option1",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
            text: "la taza",
          },


          {
            id: "option4",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
            text: "el café",
          },
        ]
      },
      {
        id: "q19",
        type: "IMAGE_MULTIPLE_CHOICE",
        question: "Identify the graph of y = cot(x).",
        options: [
          {
            id: "option2",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
            text: "el vaso",
          },
          {
            id: "option3",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
            text: "la leche",
            correct: true,
          },
          {
            id: "option1",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
            text: "la taza",
          },


          {
            id: "option4",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
            text: "el café",
          },
        ]
      }
    ]
  },




  {
    id: '3',
    title: 'Complex Numbers',
    iconName: 'infinite-outline',
    questions: [
      {
        id: "q20",
        type: "OPEN_ENDED",
        text: "Is the square of an imaginary number always negative?",
        answer: "Yes"
      },
      {
        id: "q21",
        type: "OPEN_ENDED",
        text: "Can a complex number have a zero real part?",
        answer: "Yes"
      },
      {
        id: "q22",
        type: "FILL_IN_THE_BLANK",
        text: "The complex number z = 3 + 4i has an absolute value of:",
        options: ["5", "7", "12", "9"],
        correct: "5"
      },
      {
        id: "q23",
        type: "FILL_IN_THE_BLANK",
        text: "If z = 1 + i, then the real part of z is:",
        options: ["1", "2", "0", "i"],
        correct: "1"
      },
      {
        id: "q24",
        type: "FILL_IN_THE_BLANK",
        text: "The imaginary part of z = 7 - 2i is:",
        options: ["-2", "7", "5", "-7"],
        correct: "-2"
      },
      {
        id: "q25",
        type: "FILL_IN_THE_BLANK",
        text: "If z = 5i, then z^2 equals:",
        options: ["-25", "25", "10i", "-10i"],
        correct: "-25"
      },
      {
        id: "q26",
        type: "IMAGE_MULTIPLE_CHOICE",
        question: "Which graph represents the complex number 2 + 3i?",
        options: [
          {
            id: "option2",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
            text: "el vaso",
          },
          {
            id: "option3",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
            text: "la leche",
            correct: true,
          },
          {
            id: "option1",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
            text: "la taza",
          },

          {
            id: "option4",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
            text: "el café",
          },
        ]
      },
      {
        id: "q27",
        type: "IMAGE_MULTIPLE_CHOICE",
        question: "Select the graph that shows the complex number -1 + i.",
        options: [
          {
            id: "option2",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
            text: "el vaso",
          },
          {
            id: "option3",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
            text: "la leche",
            correct: true,
          },
          {
            id: "option1",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
            text: "la taza",
          },

          {
            id: "option4",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
            text: "el café",
          },
        ]
      },
      {
        id: "q28",
        type: "IMAGE_MULTIPLE_CHOICE",
        question: "Which graph corresponds to the complex number -i?",
        options: [
          {
            id: "option2",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
            text: "el vaso",
          },
          {
            id: "option3",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
            text: "la leche",
            correct: true,
          },
          {
            id: "option1",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
            text: "la taza",
          },

          {
            id: "option4",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
            text: "el café",
          },
        ]
      },
      {
        id: "q29",
        type: "IMAGE_MULTIPLE_CHOICE",
        question: "Identify the graph that represents the complex number 4 - 2i.",
        options: [
          {
            id: "option2",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
            text: "el vaso",
          },
          {
            id: "option3",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
            text: "la leche",
            correct: true,
          },
          {
            id: "option1",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
            text: "la taza",
          },

          {
            id: "option4",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
            text: "el café",
          },
        ]
      }
    ]
  },
  {
    id: '4',
    title: 'Rational Functions',
    iconName: 'calculator-outline',
    questions: [
      {
        id: "q30",
        type: "OPEN_ENDED",
        text: "Does a rational function always have a horizontal asymptote?",
        answer: "No"
      },
      {
        id: "q31",
        type: "OPEN_ENDED",
        text: "Can a rational function have a vertical asymptote at x = 0?",
        answer: "Yes"
      },
      {
        id: "q32",
        type: "FILL_IN_THE_BLANK",
        text: "The rational function (x^2 - 4) / (x - 2) simplifies to",
        options: ["x + 2", "x - 2", "2x - 4", "x^2 - 4"],
        correct: "x + 2"
      },
      {
        id: "q33",
        type: "FILL_IN_THE_BLANK",
        text: "If f(x) = 1 / (x - 3), then the vertical asymptote is at x =",
        options: ["3", "-3", "0", "1"],
        correct: "3"
      },
      {
        id: "q34",
        type: "FILL_IN_THE_BLANK",
        text: "The horizontal asymptote of f(x) = (2x^2 + 3x + 1) / (x^2 + 2x + 1) is y =",
        options: ["2", "1", "3", "5"],
        correct: "2"
      },
      {
        id: "q35",
        type: "FILL_IN_THE_BLANK",
        text: "For the rational function f(x) = (3x - 4) / (2x + 5), f(1) equals",
        options: ["-1/7", "1/7", "-7", "7"],
        correct: "-1/7"
      },
      {
        id: "q36",
        type: "IMAGE_MULTIPLE_CHOICE",
        question: "Which graph represents the rational function f(x) = 1/x?",
        options: [
          {
            id: "option2",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
            text: "el vaso",
          },
          {
            id: "option3",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
            text: "la leche",
            correct: true,
          },
          {
            id: "option1",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
            text: "la taza",
          },

          {
            id: "option4",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
            text: "el café",
          },
        ]
      },
      {
        id: "q37",
        type: "IMAGE_MULTIPLE_CHOICE",
        question: "Select the graph that shows the rational function f(x) = x / (x^2 - 1)",
        options: [
          {
            id: "option2",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
            text: "el vaso",
          },
          {
            id: "option3",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
            text: "la leche",
            correct: true,
          },
          {
            id: "option1",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
            text: "la taza",
          },

          {
            id: "option4",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
            text: "el café",
          },
        ]
      },
      {
        id: "q38",
        type: "IMAGE_MULTIPLE_CHOICE",
        question: "Which graph corresponds to the rational function (x^2 - 4) / (x - 2)?",
        options: [
          {
            id: "option2",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
            text: "el vaso",
          },
          {
            id: "option3",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
            text: "la leche",
            correct: true,
          },
          {
            id: "option1",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
            text: "la taza",
          },

          {
            id: "option4",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
            text: "el café",
          },
        ]
      },
      {
        id: "q39",
        type: "IMAGE_MULTIPLE_CHOICE",
        question: "Identify the graph that represents the rational function (2x + 3) / (x - 5).",
        options: [
          {
            id: "option2",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
            text: "el vaso",
          },
          {
            id: "option3",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
            text: "la leche",
            correct: true,
          },
          {
            id: "option1",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
            text: "la taza",
          },

          {
            id: "option4",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
            text: "el café",
          },
        ]
      }
    ]
  },

  {
    id: '5',
    title: 'Conics',
    iconName: 'ellipse-outline',
    questions: [
      {
        id: "q40",
        type: "OPEN_ENDED",
        text: "Is a circle a special case of an ellipse?",
        answer: "Yes"
      },
      {
        id: "q41",
        type: "OPEN_ENDED",
        text: "Can a hyperbola have both branches in the same quadrant?",
        answer: "No"
      },
      {
        id: "q42",
        type: "FILL_IN_THE_BLANK",
        text: "Equation of a circle with radius 5 at the origin: x^2 + y^2 =",
        options: ["25", "10", "5", "30"],
        correct: "25"
      },
      {
        id: "q43",
        type: "FILL_IN_THE_BLANK",
        text: "Major axis length of an ellipse is 10, minor axis length is 8. Value for x^2 term:",
        options: ["25", "100", "10", "50"],
        correct: "25"
      },
      {
        id: "q44",
        type: "FILL_IN_THE_BLANK",
        text: "Hyperbola with vertices at (±2, 0), value for x^2 term:",
        options: ["4", "2", "8", "16"],
        correct: "4"
      },
      {
        id: "q45",
        type: "FILL_IN_THE_BLANK",
        text: "Parabola opening upwards with vertex (0, 0), coefficient of x^2:",
        options: ["a", "b", "c", "1"],
        correct: "a"
      },
      {
        id: "q46",
        type: "IMAGE_MULTIPLE_CHOICE",
        question: "Which graph represents a circle?",
        options: [
          {
            id: "option2",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
            text: "el vaso",
          },
          {
            id: "option3",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
            text: "la leche",
            correct: true,
          },
          {
            id: "option1",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
            text: "la taza",
          },

          {
            id: "option4",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
            text: "el café",
          },
        ]
      },
      {
        id: "q47",
        type: "IMAGE_MULTIPLE_CHOICE",
        question: "Select the graph that shows an ellipse.",
        options: [
          {
            id: "option2",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
            text: "el vaso",
          },
          {
            id: "option3",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
            text: "la leche",
            correct: true,
          },
          {
            id: "option1",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
            text: "la taza",
          },

          {
            id: "option4",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
            text: "el café",
          },
        ]
      },
      {
        id: "q48",
        type: "IMAGE_MULTIPLE_CHOICE",
        question: "Which graph corresponds to a hyperbola?",
        options: [
          {
            id: "option2",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
            text: "el vaso",
          },
          {
            id: "option3",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
            text: "la leche",
            correct: true,
          },
          {
            id: "option1",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
            text: "la taza",
          },

          {
            id: "option4",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
            text: "el café",
          },
        ]
      },
      {
        id: "q49",
        type: "IMAGE_MULTIPLE_CHOICE",
        question: "Identify the graph that represents a parabola.",
        options: [
          {
            id: "option2",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
            text: "el vaso",
          },
          {
            id: "option3",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
            text: "la leche",
            correct: true,
          },
          {
            id: "option1",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
            text: "la taza",
          },

          {
            id: "option4",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
            text: "el café",
          },
        ]
      }
    ]
  },

  {
    id: '6',
    title: 'Vectors',
    iconName: 'vector-combine',
    questions: [
      {
        id: "q60",
        type: "OPEN_ENDED",
        text: "Is the dot product of two orthogonal vectors zero?",
        answer: "Yes"
      },
      {
        id: "q61",
        type: "OPEN_ENDED",
        text: "Can the cross product of two parallel vectors be non-zero?",
        answer: "No"
      },
      {
        id: "q62",
        type: "FILL_IN_THE_BLANK",
        text: "Magnitude of the vector [3, 4] is: ",
        options: ["5", "7", "12", "9"],
        correct: "5"
      },
      {
        id: "q63",
        type: "FILL_IN_THE_BLANK",
        text: "Dot product of v = [1, 2, 3] and w = [4, 5, 6] is: ",
        options: ["32", "18", "24", "30"],
        correct: "32"
      },
      {
        id: "q64",
        type: "FILL_IN_THE_BLANK",
        text: "A unit vector's magnitude is:",
        options: ["1", "0", "2", "0.5"],
        correct: "1"
      },
      {
        id: "q65",
        type: "FILL_IN_THE_BLANK",
        text: "An orthogonal vector to u = [0, 0, 1] on the xy-plane is",
        options: ["[1, 0, 0]", "[0, 1, 0]", "[1, 1, 0]", "[0, 0, 1]"],
        correct: "[1, 0, 0]"
      },
      {
        id: "q66",
        type: "IMAGE_MULTIPLE_CHOICE",
        question: "Which graph represents the vector addition process?",
        options: [
          {
            id: "option2",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
            text: "el vaso",
          },
          {
            id: "option3",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
            text: "la leche",
            correct: true,
          },
          {
            id: "option1",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
            text: "la taza",
          },

          {
            id: "option4",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
            text: "el café",
          },
        ]
      },
      {
        id: "q67",
        type: "IMAGE_MULTIPLE_CHOICE",
        question: "Select the graph that shows the vector subtraction process.",
        options: [
          {
            id: "option2",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
            text: "el vaso",
          },
          {
            id: "option3",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
            text: "la leche",
            correct: true,
          },
          {
            id: "option1",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
            text: "la taza",
          },

          {
            id: "option4",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
            text: "el café",
          },
        ]
      },
      {
        id: "q68",
        type: "IMAGE_MULTIPLE_CHOICE",
        question: "Which graph corresponds to the scalar multiplication of a vector?",
        options: [
          {
            id: "option2",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
            text: "el vaso",
          },
          {
            id: "option3",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
            text: "la leche",
            correct: true,
          },
          {
            id: "option1",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
            text: "la taza",
          },

          {
            id: "option4",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
            text: "el café",
          },
        ]
      },
      {
        id: "q69",
        type: "IMAGE_MULTIPLE_CHOICE",
        question: "Identify the graph that represents the cross product of two vectors.",
        options: [
          {
            id: "option2",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
            text: "el vaso",
          },
          {
            id: "option3",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
            text: "la leche",
            correct: true,
          },
          {
            id: "option1",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
            text: "la taza",
          },

          {
            id: "option4",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
            text: "el café",
          },
        ]
      }
    ]
  },
  {
    id: '7',
    title: 'Matrices',
    iconName: 'grid-outline',
    questions: [
      {
        id: "q50",
        type: "OPEN_ENDED",
        text: "Is the determinant of a 2x2 matrix the product of its diagonal elements?",
        answer: "No"
      },
      {
        id: "q51",
        type: "OPEN_ENDED",
        text: "Can a matrix have an inverse if its determinant is 0?",
        answer: "No"
      },
      {
        id: "q52",
        type: "FILL_IN_THE_BLANK",
        text: "If A = [[1, 2], [3, 4]], the determinant of matrix A is:",
        options: ["-2", "2", "10", "0"],
        correct: "-2"
      },
      {
        id: "q53",
        type: "FILL_IN_THE_BLANK",
        text: "The inverse of the matrix [[1, 0], [0, 1]] is:",
        options: ["[[1, 0], [0, 1]]", "[[0, 1], [1, 0]]", "[[-1, 0], [0, -1]]", "[[1, 1], [1, 1]]"],
        correct: "[[1, 0], [0, 1]]"
      },
      {
        id: "q54",
        type: "FILL_IN_THE_BLANK",
        text: "For A = [[2, 4], [1, 2]], A × A^-1 equals:",
        options: ["[[1, 0], [0, 1]]", "[[2, 4], [1, 2]]", "[[0, 0], [0, 0]]", "[[1, 1], [1, 1]]"],
        correct: "[[1, 0], [0, 1]]"
      },
      {
        id: "q55",
        type: "FILL_IN_THE_BLANK",
        text: "The trace of the matrix [[3, 7], [5, 9]] is:",
        options: ["12", "16", "10", "22"],
        correct: "12"
      },
      {
        id: "q56",
        type: "IMAGE_MULTIPLE_CHOICE",
        question: "Which graph represents the matrix multiplication process?",
        options: [
          {
            id: "option2",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
            text: "el vaso",
          },
          {
            id: "option3",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
            text: "la leche",
            correct: true,
          },
          {
            id: "option1",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
            text: "la taza",
          },

          {
            id: "option4",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
            text: "el café",
          },
        ]
      },
      {
        id: "q57",
        type: "IMAGE_MULTIPLE_CHOICE",
        question: "Select the graph that shows the concept of matrix inversion.",
        options: [
          {
            id: "option2",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
            text: "el vaso",
          },
          {
            id: "option3",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
            text: "la leche",
            correct: true,
          },
          {
            id: "option1",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
            text: "la taza",
          },

          {
            id: "option4",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
            text: "el café",
          },
        ]
      },
      {
        id: "q58",
        type: "IMAGE_MULTIPLE_CHOICE",
        question: "Which graph corresponds to the determinant calculation of a matrix?",
        options: [
          {
            id: "option2",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
            text: "el vaso",
          },
          {
            id: "option3",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
            text: "la leche",
            correct: true,
          },
          {
            id: "option1",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
            text: "la taza",
          },

          {
            id: "option4",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
            text: "el café",
          },
        ]
      },
      {
        id: "q59",
        type: "IMAGE_MULTIPLE_CHOICE",
        question: "Identify the graph that represents the trace of a matrix.",
        options: [
          {
            id: "option2",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
            text: "el vaso",
          },
          {
            id: "option3",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
            text: "la leche",
            correct: true,
          },
          {
            id: "option1",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
            text: "la taza",
          },

          {
            id: "option4",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
            text: "el café",
          },
        ]
      }
    ]
  }
];

// Function to upload quizzes
const uploadQuizzes = async () => {
  for (const quiz of quizzes) {
    await set(ref(db, `Quizzes/${quiz.id}`), quiz)
      .then(() => console.log(`Quiz ${quiz.id} added successfully!`))
      .catch((error) => console.error(`Failed to add Quiz ${quiz.id}:`, error));
  }
};

export default uploadQuizzes;
//import uploadQuizzes  from './src/data.js';
// uploadQuizzes();


// const quizzes1 = [
//   {
//     id: '1',
//     title: 'Composite and Inverse Functions',
//     iconName: 'git-compare-outline',
//     questions: [
//       {
//         id: "q0",
//         type: "OPEN_ENDED",
//         text: "Is the inverse of a linear function also linear?",
//         answer: "Yes"
//       },
//       {
//         id: "q1",
//         type: "OPEN_ENDED",
//         text: "Is every composite function non-invertible?",
//         answer: "No"
//       },
//       {
//         id: "q2",
//         type: "FILL_IN_THE_BLANK",
//         text: "If f(x) = 2x + 3, the inverse function f^-1(x) is y = ___.",
//         correct: "(y - 3) / 2"
//       },
//       {
//         id: "q3",
//         type: "FILL_IN_THE_BLANK",
//         text: "The composite function f(g(x)) where f(x) = x^2 and g(x) = x + 1 is ___.",
//         correct: "(x + 1)^2"
//       },
//       {
//         id: "q4",
//         type: "FILL_IN_THE_BLANK",
//         text: "If h(x) = 3x and j(x) = x - 2, h(j(x)) is ___.",
//         correct: "3(x - 2)"
//       },
//       {
//         id: "q5",
//         type: "FILL_IN_THE_BLANK",
//         text: "The inverse function of f(x) = 1/x is f^-1(x) = ___.",
//         correct: "1/x"
//       },
//       {
//         id: "q6",
//         type: "IMAGE_MULTIPLE_CHOICE",
//         question: "Which graph represents the inverse function of y = x^2 for x ≥ 0?",
//         options: [
//           {
//             id: "option2",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
//             text: "el vaso",
//           },
//           {
//             id: "option3",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
//             text: "la leche",
//             correct: true,
//           },
//           {
//             id: "option1",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
//             text: "la taza",
//           },
//           {
//             id: "option4",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
//             text: "el café",
//           },
//         ]
//       },
//       {
//         id: "q7",
//         type: "IMAGE_MULTIPLE_CHOICE",
//         question: "Select the graph of the composite function f(g(x)) where f(x) = x + 2 and g(x) = 2x.",
//         options: [
//           {
//             id: "option2",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
//             text: "el vaso",
//           },
//           {
//             id: "option3",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
//             text: "la leche",
//             correct: true,
//           },
//           {
//             id: "option1",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
//             text: "la taza",
//           },
//           {
//             id: "option4",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
//             text: "el café",
//           },
//         ]
//       },
//       {
//         id: "q8",
//         type: "IMAGE_MULTIPLE_CHOICE",
//         question: "Which graph shows the inverse of y = 1/x?",
//         options: [
//           {
//             id: "option2",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
//             text: "el vaso",
//           },
//           {
//             id: "option3",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
//             text: "la leche",
//             correct: true,
//           },
//           {
//             id: "option1",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
//             text: "la taza",
//           },
//           {
//             id: "option4",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
//             text: "el café",
//           },
//         ]
//       },
//       {
//         id: "q9",
//         type: "IMAGE_MULTIPLE_CHOICE",
//         question: "Identify the graph that represents the composite function h(j(x)) where h(x) = x^2 and j(x) = 2x + 1.",
//         options: [
//           {
//             id: "option2",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
//             text: "el vaso",
//           },
//           {
//             id: "option3",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
//             text: "la leche",
//             correct: true,
//           },
//           {
//             id: "option1",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
//             text: "la taza",
//           },
//
//           {
//             id: "option4",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
//             text: "el café",
//           },
//         ]
//       }
//     ]
//   },
//   {
//     id: '2',
//     title: 'Trigonometry',
//     iconName: 'compass-outline',
//     questions: [
//       {
//         id: "q10",
//         type: "OPEN_ENDED",
//         text: "Is sin(90°) equal to 1?",
//         answer: "Yes"
//       },
//       {
//         id: "q11",
//         type: "OPEN_ENDED",
//         text: "Can the tangent of an angle be equal to 1?",
//         answer: "Yes"
//       },
//       {
//         id: "q12",
//         type: "FILL_IN_THE_BLANK",
//         text: "If cos(θ) = 1/2, then θ = ___° in the first quadrant.",
//         correct: "60"
//       },
//       {
//         id: "q13",
//         type: "FILL_IN_THE_BLANK",
//         text: "The sin(θ) is equal to cos(90° - θ) for any angle θ. Therefore, if sin(30°) = 1/2, cos(60°) is ___.",
//         correct: "1/2"
//       },
//       {
//         id: "q14",
//         type: "FILL_IN_THE_BLANK",
//         text: "The value of tan(45°) is ___.",
//         correct: "1"
//       },
//       {
//         id: "q15",
//         type: "FILL_IN_THE_BLANK",
//         text: "If sec(θ) = 2, then cos(θ) = ___.",
//         correct: "1/2"
//       },
//       {
//         id: "q16",
//         type: "IMAGE_MULTIPLE_CHOICE",
//         question: "Which graph represents the function y = sin(x)?",
//         options: [
//           {
//             id: "option2",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
//             text: "el vaso",
//           },
//           {
//             id: "option3",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
//             text: "la leche",
//             correct: true,
//           },
//           {
//             id: "option1",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
//             text: "la taza",
//           },
//
//           {
//             id: "option4",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
//             text: "el café",
//           },
//         ]
//       },
//       {
//         id: "q17",
//         type: "IMAGE_MULTIPLE_CHOICE",
//         question: "Select the graph that shows y = cos(x).",
//         options: [
//           {
//             id: "option2",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
//             text: "el vaso",
//           },
//           {
//             id: "option3",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
//             text: "la leche",
//             correct: true,
//           },
//           {
//             id: "option1",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
//             text: "la taza",
//           },
//
//           {
//             id: "option4",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
//             text: "el café",
//           },
//         ]
//       },
//       {
//         id: "q18",
//         type: "IMAGE_MULTIPLE_CHOICE",
//         question: "Which graph corresponds to the tangent function?",
//         options: [
//           {
//             id: "option2",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
//             text: "el vaso",
//           },
//           {
//             id: "option3",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
//             text: "la leche",
//             correct: true,
//           },
//           {
//             id: "option1",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
//             text: "la taza",
//           },
//
//           {
//             id: "option4",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
//             text: "el café",
//           },
//         ]
//       },
//       {
//         id: "q19",
//         type: "IMAGE_MULTIPLE_CHOICE",
//         question: "Identify the graph of y = cot(x).",
//         options: [
//           {
//             id: "option2",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
//             text: "el vaso",
//           },
//           {
//             id: "option3",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
//             text: "la leche",
//             correct: true,
//           },
//           {
//             id: "option1",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
//             text: "la taza",
//           },
//
//           {
//             id: "option4",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
//             text: "el café",
//           },
//         ]
//       }
//     ]
//   },
//
//   {
//     id: '3',
//     title: 'Complex Numbers',
//     iconName: 'infinite-outline',
//     questions: [
//       {
//         id: "q20",
//         type: "OPEN_ENDED",
//         text: "Is the square of an imaginary number always negative?",
//         answer: "Yes"
//       },
//       {
//         id: "q21",
//         type: "OPEN_ENDED",
//         text: "Can a complex number have a zero real part?",
//         answer: "Yes"
//       },
//       {
//         id: "q22",
//         type: "FILL_IN_THE_BLANK",
//         text: "The complex number z = 3 + 4i has an absolute value of ___.",
//         correct: "5"
//       },
//       {
//         id: "q23",
//         type: "FILL_IN_THE_BLANK",
//         text: "If z = 1 + i, then the real part of z is ___.",
//         correct: "1"
//       },
//       {
//         id: "q24",
//         type: "FILL_IN_THE_BLANK",
//         text: "The imaginary part of z = 7 - 2i is ___.",
//         correct: "-2"
//       },
//       {
//         id: "q25",
//         type: "FILL_IN_THE_BLANK",
//         text: "If z = 5i, then z^2 equals ___.",
//         correct: "-25"
//       },
//       {
//         id: "q26",
//         type: "IMAGE_MULTIPLE_CHOICE",
//         question: "Which graph represents the complex number 2 + 3i?",
//         options: [
//           {
//             id: "option2",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
//             text: "el vaso",
//           },
//           {
//             id: "option3",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
//             text: "la leche",
//             correct: true,
//           },
//           {
//             id: "option1",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
//             text: "la taza",
//           },
//
//           {
//             id: "option4",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
//             text: "el café",
//           },
//         ]
//       },
//       {
//         id: "q27",
//         type: "IMAGE_MULTIPLE_CHOICE",
//         question: "Select the graph that shows the complex number -1 + i.",
//         options: [
//           {
//             id: "option2",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
//             text: "el vaso",
//           },
//           {
//             id: "option3",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
//             text: "la leche",
//             correct: true,
//           },
//           {
//             id: "option1",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
//             text: "la taza",
//           },
//
//           {
//             id: "option4",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
//             text: "el café",
//           },
//         ]
//       },
//       {
//         id: "q28",
//         type: "IMAGE_MULTIPLE_CHOICE",
//         question: "Which graph corresponds to the complex number -i?",
//         options: [
//           {
//             id: "option2",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
//             text: "el vaso",
//           },
//           {
//             id: "option3",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
//             text: "la leche",
//             correct: true,
//           },
//           {
//             id: "option1",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
//             text: "la taza",
//           },
//
//           {
//             id: "option4",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
//             text: "el café",
//           },
//         ]
//       },
//       {
//         id: "q29",
//         type: "IMAGE_MULTIPLE_CHOICE",
//         question: "Identify the graph that represents the complex number 4 - 2i.",
//         options: [
//           {
//             id: "option2",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
//             text: "el vaso",
//           },
//           {
//             id: "option3",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
//             text: "la leche",
//             correct: true,
//           },
//           {
//             id: "option1",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
//             text: "la taza",
//           },
//
//           {
//             id: "option4",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
//             text: "el café",
//           },
//         ]
//       }
//     ]
//   },
//
//   {
//     id: '4',
//     title: 'Rational Functions',
//     iconName: 'calculator-outline',
//     questions: [
//       {
//         id: "q30",
//         type: "OPEN_ENDED",
//         text: "Does a rational function always have a horizontal asymptote?",
//         answer: "No"
//       },
//       {
//         id: "q31",
//         type: "OPEN_ENDED",
//         text: "Can a rational function have a vertical asymptote at x = 0?",
//         answer: "Yes"
//       },
//       {
//         id: "q32",
//         type: "FILL_IN_THE_BLANK",
//         text: "The rational function (x^2 - 4) / (x - 2) simplifies to ___.",
//         correct: "x + 2"
//       },
//       {
//         id: "q33",
//         type: "FILL_IN_THE_BLANK",
//         text: "If f(x) = 1 / (x - 3), then the vertical asymptote is at x = ___.",
//         correct: "3"
//       },
//       {
//         id: "q34",
//         type: "FILL_IN_THE_BLANK",
//         text: "The horizontal asymptote of f(x) = (2x^2 + 3x + 1) / (x^2 + 2x + 1) is y = ___.",
//         correct: "2"
//       },
//       {
//         id: "q35",
//         type: "FILL_IN_THE_BLANK",
//         text: "For the rational function f(x) = (3x - 4) / (2x + 5), f(1) equals ___.",
//         correct: "-1/7"
//       },
//       {
//         id: "q36",
//         type: "IMAGE_MULTIPLE_CHOICE",
//         question: "Which graph represents the rational function f(x) = 1/x?",
//         options: [
//           {
//             id: "option2",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
//             text: "el vaso",
//           },
//           {
//             id: "option3",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
//             text: "la leche",
//             correct: true,
//           },
//           {
//             id: "option1",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
//             text: "la taza",
//           },
//
//           {
//             id: "option4",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
//             text: "el café",
//           },
//         ]
//       },
//       {
//         id: "q37",
//         type: "IMAGE_MULTIPLE_CHOICE",
//         question: "Select the graph that shows the rational function f(x) = x / (x^2 - 1)",
//         options: [
//           {
//             id: "option2",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
//             text: "el vaso",
//           },
//           {
//             id: "option3",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
//             text: "la leche",
//             correct: true,
//           },
//           {
//             id: "option1",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
//             text: "la taza",
//           },
//
//           {
//             id: "option4",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
//             text: "el café",
//           },
//         ]
//       },
//       {
//         id: "q38",
//         type: "IMAGE_MULTIPLE_CHOICE",
//         question: "Which graph corresponds to the rational function (x^2 - 4) / (x - 2)?",
//         options: [
//           {
//             id: "option2",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
//             text: "el vaso",
//           },
//           {
//             id: "option3",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
//             text: "la leche",
//             correct: true,
//           },
//           {
//             id: "option1",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
//             text: "la taza",
//           },
//
//           {
//             id: "option4",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
//             text: "el café",
//           },
//         ]
//       },
//       {
//         id: "q39",
//         type: "IMAGE_MULTIPLE_CHOICE",
//         question: "Identify the graph that represents the rational function (2x + 3) / (x - 5).",
//         options: [
//           {
//             id: "option2",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
//             text: "el vaso",
//           },
//           {
//             id: "option3",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
//             text: "la leche",
//             correct: true,
//           },
//           {
//             id: "option1",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
//             text: "la taza",
//           },
//
//           {
//             id: "option4",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
//             text: "el café",
//           },
//         ]
//       }
//     ]
//   },
//   {
//     id: '5',
//     title: 'Conics',
//     iconName: 'ellipse-outline',
//     questions: [
//       {
//         id: "q40",
//         type: "OPEN_ENDED",
//         text: "Is a circle a special case of an ellipse?",
//         answer: "Yes"
//       },
//       {
//         id: "q41",
//         type: "OPEN_ENDED",
//         text: "Can a hyperbola have both branches in the same quadrant?",
//         answer: "No"
//       },
//       {
//         id: "q42",
//         type: "FILL_IN_THE_BLANK",
//         text: "The standard equation of a circle with radius 5 centered at the origin is x^2 + y^2 = ___.",
//         correct: "25"
//       },
//       {
//         id: "q43",
//         type: "FILL_IN_THE_BLANK",
//         text: "An ellipse with a major axis length of 10 and minor axis length of 8 has the equation x^2 / ___ + y^2 / ___ = 1.",
//         correct: ["25", "16"]
//       },
//       {
//         id: "q44",
//         type: "FILL_IN_THE_BLANK",
//         text: "The standard form of a hyperbola with vertices at (±2, 0) and asymptotes through the origin is x^2 / ___ - y^2 / ___ = 1.",
//         correct: ["4", "4"]
//       },
//       {
//         id: "q45",
//         type: "FILL_IN_THE_BLANK",
//         text: "A parabola that opens upward and has a vertex at (0, 0) can be represented by the equation y = __x^2.",
//         correct: "a"
//       },
//       {
//         id: "q46",
//         type: "IMAGE_MULTIPLE_CHOICE",
//         question: "Which graph represents a circle?",
//         options: [
//           {
//             id: "option2",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
//             text: "el vaso",
//           },
//           {
//             id: "option3",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
//             text: "la leche",
//             correct: true,
//           },
//           {
//             id: "option1",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
//             text: "la taza",
//           },
//
//           {
//             id: "option4",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
//             text: "el café",
//           },
//         ]
//       },
//       {
//         id: "q47",
//         type: "IMAGE_MULTIPLE_CHOICE",
//         question: "Select the graph that shows an ellipse.",
//         options: [
//           {
//             id: "option2",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
//             text: "el vaso",
//           },
//           {
//             id: "option3",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
//             text: "la leche",
//             correct: true,
//           },
//           {
//             id: "option1",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
//             text: "la taza",
//           },
//
//           {
//             id: "option4",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
//             text: "el café",
//           },
//         ]
//       },
//       {
//         id: "q48",
//         type: "IMAGE_MULTIPLE_CHOICE",
//         question: "Which graph corresponds to a hyperbola?",
//         options: [
//           {
//             id: "option2",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
//             text: "el vaso",
//           },
//           {
//             id: "option3",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
//             text: "la leche",
//             correct: true,
//           },
//           {
//             id: "option1",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
//             text: "la taza",
//           },
//
//           {
//             id: "option4",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
//             text: "el café",
//           },
//         ]
//       },
//       {
//         id: "q49",
//         type: "IMAGE_MULTIPLE_CHOICE",
//         question: "Identify the graph that represents a parabola.",
//         options: [
//           {
//             id: "option2",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
//             text: "el vaso",
//           },
//           {
//             id: "option3",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
//             text: "la leche",
//             correct: true,
//           },
//           {
//             id: "option1",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
//             text: "la taza",
//           },
//
//           {
//             id: "option4",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
//             text: "el café",
//           },
//         ]
//       }
//     ]
//   },
//   {
//     id: '6',
//     title: 'Vectors',
//     iconName: 'vector-combine',
//     questions: [
//       {
//         id: "q60",
//         type: "OPEN_ENDED",
//         text: "Is the dot product of two orthogonal vectors zero?",
//         answer: "Yes"
//       },
//       {
//         id: "q61",
//         type: "OPEN_ENDED",
//         text: "Can the cross product of two parallel vectors be non-zero?",
//         answer: "No"
//       },
//       {
//         id: "q62",
//         type: "FILL_IN_THE_BLANK",
//         text: "The magnitude of the vector [3, 4] is ___.",
//         correct: "5"
//       },
//       {
//         id: "q63",
//         type: "FILL_IN_THE_BLANK",
//         text: "If vector v = [1, 2, 3] and w = [4, 5, 6], then the dot product of v and w is ___.",
//         correct: "32"
//       },
//       {
//         id: "q64",
//         type: "FILL_IN_THE_BLANK",
//         text: "A unit vector has a magnitude of ___.",
//         correct: "1"
//       },
//       {
//         id: "q65",
//         type: "FILL_IN_THE_BLANK",
//         text: "If vector u = [0, 0, 1], the vector orthogonal to u on the xy-plane is ___.",
//         correct: "[1, 0, 0] or [0, 1, 0]"  // Accepting any orthogonal vector on the xy-plane
//       },
//       {
//         id: "q66",
//         type: "IMAGE_MULTIPLE_CHOICE",
//         question: "Which graph represents the vector addition process?",
//         options: [
//           {
//             id: "option2",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
//             text: "el vaso",
//           },
//           {
//             id: "option3",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
//             text: "la leche",
//             correct: true,
//           },
//           {
//             id: "option1",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
//             text: "la taza",
//           },
//
//           {
//             id: "option4",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
//             text: "el café",
//           },
//         ]
//       },
//       {
//         id: "q67",
//         type: "IMAGE_MULTIPLE_CHOICE",
//         question: "Select the graph that shows the vector subtraction process.",
//         options: [
//           {
//             id: "option2",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
//             text: "el vaso",
//           },
//           {
//             id: "option3",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
//             text: "la leche",
//             correct: true,
//           },
//           {
//             id: "option1",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
//             text: "la taza",
//           },
//
//           {
//             id: "option4",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
//             text: "el café",
//           },
//         ]
//       },
//       {
//         id: "q68",
//         type: "IMAGE_MULTIPLE_CHOICE",
//         question: "Which graph corresponds to the scalar multiplication of a vector?",
//         options: [
//           {
//             id: "option2",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
//             text: "el vaso",
//           },
//           {
//             id: "option3",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
//             text: "la leche",
//             correct: true,
//           },
//           {
//             id: "option1",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
//             text: "la taza",
//           },
//
//           {
//             id: "option4",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
//             text: "el café",
//           },
//         ]
//       },
//       {
//         id: "q69",
//         type: "IMAGE_MULTIPLE_CHOICE",
//         question: "Identify the graph that represents the cross product of two vectors.",
//         options: [
//           {
//             id: "option2",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
//             text: "el vaso",
//           },
//           {
//             id: "option3",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
//             text: "la leche",
//             correct: true,
//           },
//           {
//             id: "option1",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
//             text: "la taza",
//           },
//
//           {
//             id: "option4",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
//             text: "el café",
//           },
//         ]
//       }
//     ]
//   },
//   {
//     id: '7',
//     title: 'Matrices',
//     iconName: 'grid-outline',
//     questions: [
//       {
//         id: "q50",
//         type: "OPEN_ENDED",
//         text: "Is the determinant of a 2x2 matrix the product of its diagonal elements?",
//         answer: "No"
//       },
//       {
//         id: "q51",
//         type: "OPEN_ENDED",
//         text: "Can a matrix have an inverse if its determinant is 0?",
//         answer: "No"
//       },
//       {
//         id: "q52",
//         type: "FILL_IN_THE_BLANK",
//         text: "If A = [[1, 2], [3, 4]], then the determinant of matrix A is ___.",
//         correct: "-2"
//       },
//       {
//         id: "q53",
//         type: "FILL_IN_THE_BLANK",
//         text: "The inverse of the matrix [[1, 0], [0, 1]] is ___.",
//         correct: "[[1, 0], [0, 1]]"
//       },
//       {
//         id: "q54",
//         type: "FILL_IN_THE_BLANK",
//         text: "For A = [[2, 4], [1, 2]], A × A^-1 equals ___.",
//         correct: "[[1, 0], [0, 1]]"
//       },
//       {
//         id: "q55",
//         type: "FILL_IN_THE_BLANK",
//         text: "The trace of the matrix [[3, 7], [5, 9]] is ___.",
//         correct: "12"
//       },
//       {
//         id: "q56",
//         type: "IMAGE_MULTIPLE_CHOICE",
//         question: "Which graph represents the matrix multiplication process?",
//         options: [
//           {
//             id: "option2",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
//             text: "el vaso",
//           },
//           {
//             id: "option3",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
//             text: "la leche",
//             correct: true,
//           },
//           {
//             id: "option1",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
//             text: "la taza",
//           },
//
//           {
//             id: "option4",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
//             text: "el café",
//           },
//         ]
//       },
//       {
//         id: "q57",
//         type: "IMAGE_MULTIPLE_CHOICE",
//         question: "Select the graph that shows the concept of matrix inversion.",
//         options: [
//           {
//             id: "option2",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
//             text: "el vaso",
//           },
//           {
//             id: "option3",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
//             text: "la leche",
//             correct: true,
//           },
//           {
//             id: "option1",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
//             text: "la taza",
//           },
//
//           {
//             id: "option4",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
//             text: "el café",
//           },
//         ]
//       },
//       {
//         id: "q58",
//         type: "IMAGE_MULTIPLE_CHOICE",
//         question: "Which graph corresponds to the determinant calculation of a matrix?",
//         options: [
//           {
//             id: "option2",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
//             text: "el vaso",
//           },
//           {
//             id: "option3",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
//             text: "la leche",
//             correct: true,
//           },
//           {
//             id: "option1",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
//             text: "la taza",
//           },
//
//           {
//             id: "option4",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
//             text: "el café",
//           },
//         ]
//       },
//       {
//         id: "q59",
//         type: "IMAGE_MULTIPLE_CHOICE",
//         question: "Identify the graph that represents the trace of a matrix.",
//         options: [
//           {
//             id: "option2",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
//             text: "el vaso",
//           },
//           {
//             id: "option3",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
//             text: "la leche",
//             correct: true,
//           },
//           {
//             id: "option1",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
//             text: "la taza",
//           },
//
//           {
//             id: "option4",
//             image:
//               "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
//             text: "el café",
//           },
//         ]
//       }
//     ]
//   }
// ];
