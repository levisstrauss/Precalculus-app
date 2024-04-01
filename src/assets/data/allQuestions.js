export default [
  {
    id: "q0",
    type: "FILL_IN_THE_BLANK",
    text: "g(x) = x^2 + 2x + 1",
    options: ["x^2 + 2x + 1", "x^2 + 2x + 1", "x^2 + 2x + 1", "x^2 + 2x + 1"],
    correct: "x^2 + 2x + 1",
  },
  {
    id: "q1",
    type: "IMAGE_MULTIPLE_CHOICE",
    question: 'What is the derivative of "X" ?',
    options: [
      {
        id: "option1",
        image:
          "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
        text: "xe^x",
      },
      {
        id: "option2",
        image:
          "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
        text: "e^x",
        correct: true,
      },
      {
        id: "option3",
        image:
          "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
        text: "2xe^x",
      },
      {
        id: "option4",
        image:
          "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
        text: "x^2e^x",
      },
    ],
  },
  {
    id: "q2",
    type: "OPEN_ENDED",
    text: "Is derivative and integral the same?",
    answer: "No",
  },
  {
    id: "q3",
    type: "IMAGE_MULTIPLE_CHOICE",
    question: 'What is the derivative of lnx"?',
    options: [
      {
        id: "option4",
        image:
          "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
        text: "1/x",
        correct: true,
      },
      {
        id: "option1",
        image:
          "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
        text: "2x",
      },
      {
        id: "option3",
        image:
          "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
        text: "3xlnx",
      },
      {
        id: "option2",
        image:
          "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
        text: "e^x",
      },
    ],
  },
  {
    id: "q4",
    type: "IMAGE_MULTIPLE_CHOICE",
    type: "OPEN_ENDED",
    text: "La mujer",
    answer: "the woman",
  },
  {
    id: "q3",
    question: 'Which of these is "the cup"?',
    type: "IMAGE_MULTIPLE_CHOICE",
    options: [
      {
        id: "option3",
        image:
          "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
        text: "la leche",
      },
      {
        id: "option2",
        image:
          "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
        text: "el vaso",
      },
      {
        id: "option4",
        image:
          "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
        text: "el café",
      },
      {
        id: "option1",
        image:
          "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
        text: "la taza",
        correct: true,
      },
    ],
  },
  {
    id: "q5",
    type: "OPEN_ENDED",
    text: "Me gusta React Native",
    answer: "I like react native",
  },
  {
    id: "q6",
    type: "IMAGE_MULTIPLE_CHOICE",
    question: 'Which of these is "the milk"?',
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
    ],
  },
];
