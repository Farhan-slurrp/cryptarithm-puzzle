const questions = [
  {
    "level": 1,
    "top": ["A", "B"],
    "bottom": ["A"],
    "answer": ["M", "O", "M"]
  },
  {
    "level": 2,
    "top": ["T", "O"],
    "bottom": ["G", "O"],
    "answer": ["O", "U", "T"]
  },
  {
    "level": 3,
    "top": ["T", "T", "B"],
    "bottom": ["C"],
    "answer": ["J", "O", "O", "G"]
  },
  {
    "level": 4,
    "top": ["D", "O", "G"],
    "bottom": ["G", "O", "D"],
    "answer": ["C", "A", "T"]
  },
  {
    "level": 5,
    "top": ["S", "E", "N", "D"],
    "bottom": ["M", "O", "R", "E"],
    "answer": ["M", "O", "N", "E", "Y"]
  },
  {
    "level": 6,
    "top": ["M", "O", "U", "S", "E"],
    "bottom": ["H", "O", "U", "S", "E"],
    "answer": ["R", "E", "N", "O", "V", "A", "T", "E"]
  },
  {
    "level": 7,
    "top": ["S", "U", "N"],
    "bottom": ["R", "A", "I", "N"],
    "answer": ["W", "E", "A", "T", "H", "E", "R"]
  },
  {
    "level": 8,
    "top": ["S", "T", "A", "R"],
    "bottom": ["M", "O", "O", "N"],
    "answer": ["S", "P", "A", "C", "E"]
  },
  {
    "level": 9,
    "top": ["F", "L", "O", "W", "E", "R"],
    "bottom": ["G", "R", "A", "S", "S"],
    "answer": ["N", "A", "T", "U", "R", "E"]
  },
  {
    "level": 10,
    "top": ["P", "E", "A", "C", "E"],
    "bottom": ["L", "O", "V", "E"],
    "answer": ["H", "A", "R", "M", "O", "N", "Y"]
  },
  {
    "level": 11,
    "top": ["C", "A", "T"],
    "bottom": ["D", "O", "G"],
    "answer": ["P", "E", "T"]
  },
  {
    "level": 12,
    "top": ["S", "M", "I", "L", "E"],
    "bottom": ["F", "R", "O", "W", "N"],
    "answer": ["H", "A", "P", "P", "Y"]
  },
  {
    "level": 13,
    "top": ["B", "O", "O", "K"],
    "bottom": ["P", "A", "G", "E"],
    "answer": ["R", "E", "A", "D"]
  },
  {
    "level": 14,
    "top": ["B", "L", "A", "C", "K"],
    "bottom": ["W", "H", "I", "T", "E"],
    "answer": ["C", "O", "L", "O", "R"]
  },
  {
    "level": 15,
    "top": ["B", "I", "R", "T", "H"],
    "bottom": ["D", "A", "T", "E"],
    "answer": ["C", "A", "L", "E", "N", "D", "A", "R"]
  },
  {
    "level": 16,
    "top": ["A", "P", "P", "L", "E"],
    "bottom": ["B", "A", "N", "A", "N", "A"],
    "answer": ["F", "R", "U", "I", "T"]
  },
  {
    "level": 17,
    "top": ["T", "R", "E", "E"],
    "bottom": ["L", "E", "A", "F"],
    "answer": ["N", "A", "T", "U", "R", "E"]
  },
  {
    "level": 18,
    "top": ["B", "I", "R", "D"],
    "bottom": ["F", "L", "Y"],
    "answer": ["A", "I", "R"]
  },
  {
    "level": 19,
    "top": ["P", "E", "N"],
    "bottom": ["P", "A", "P", "E", "R"],
    "answer": ["W", "R", "I", "T", "E"]
  },
  {
    "level": 20,
    "top": ["L", "I", "G", "H", "T"],
    "bottom": ["D", "A", "R", "K"],
    "answer": ["D", "A", "Y", "N", "I", "G", "H", "T"]
  },
  {
    "level": 21,
    "top": ["M", "A", "T", "H"],
    "bottom": ["S", "C", "I", "E", "N", "C", "E"],
    "answer": ["S", "T", "U", "D", "Y"]
  },
  {
    "level": 22,
    "top": ["E", "N", "G", "I", "N", "E"],
    "bottom": ["C", "A", "R"],
    "answer": ["T", "R", "A", "V", "E", "L"]
  },
  {
    "level": 23,
    "top": ["H", "O", "M", "E"],
    "bottom": ["H", "O", "U", "S", "E"],
    "answer": ["S", "H", "E", "L", "T", "E", "R"]
  },
  {
    "level": 24,
    "top": ["B", "O", "A", "T"],
    "bottom": ["S", "E", "A"],
    "answer": ["W", "A", "T", "E", "R"]
  },
  {
    "level": 25,
    "top": ["M", "O", "U", "N", "T", "A", "I", "N"],
    "bottom": ["H", "I", "L", "L"],
    "answer": ["E", "A", "R", "T", "H"]
  },
  {
    "level": 26,
    "top": ["C", "O", "M", "P", "U", "T", "E", "R"],
    "bottom": ["K", "E", "Y", "B", "O", "A", "R", "D"],
    "answer": ["T", "E", "C", "H", "N", "O", "L", "O", "G", "Y"]
  },
  {
    "level": 27,
    "top": ["M", "O", "R", "N", "I", "N", "G"],
    "bottom": ["N", "I", "G", "H", "T"],
    "answer": ["D", "A", "Y"]
  },
  {
    "level": 28,
    "top": ["S", "U", "M", "M", "E", "R"],
    "bottom": ["W", "I", "N", "T", "E", "R"],
    "answer": ["S", "E", "A", "S", "O", "N"]
  },
  {
    "level": 29,
    "top": ["F", "O", "O", "D"],
    "bottom": ["W", "A", "T", "E", "R"],
    "answer": ["E", "A", "T"]
  },
  {
    "level": 30,
    "top": ["P", "A", "R", "K"],
    "bottom": ["P", "L", "A", "Y"],
    "answer": ["F", "U", "N"]
  }
]
