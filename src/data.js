// import { initializeApp } from "firebase/app";
// import { getDatabase, ref, set } from "firebase/database";
//
//
// const firebaseConfig = {
//   apiKey: "AIzaSyDg9evCOPYTi3UNIO5131zZp98pZBHoe_I",
//   authDomain: "authfirebasereactnatives.firebaseapp.com",
//   projectId: "authfirebasereactnatives",
//   storageBucket: "authfirebasereactnatives.appspot.com",
//   messagingSenderId: "208497038411",
//   appId: "1:208497038411:web:528d03424fa081f72929ce",
//   measurementId: "G-CC83YNZEEC"
// };
//
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getDatabase(app);
//
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
//   }
//   ,
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
//   }
//   ,
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
//   }
//   ,
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
//
// // Function to upload quizzes
// const uploadQuizzes = async () => {
//   quizzes.forEach(async (quiz) => {
//     await set(ref(db, `Quizzes/${quiz.id}`), quiz)
//       .then(() => console.log(`Quiz ${quiz.id} added successfully!`))
//       .catch((error) => console.error(`Failed to add Quiz ${quiz.id}:`, error));
//   });
// };
//
// export default uploadQuizzes;
//
// //  this one in the app
// // import uploadQuizzes from './data.js';
// //
// // // Call the function to upload quizzes data to Firebase
// // uploadQuizzes();
