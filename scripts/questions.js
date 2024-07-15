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
    "top": ["E", "F"],
    "bottom": ["E", "F"],
    "answer": ["T", "E", "F", "T"]
  },
  {
    "level": 4,
    "top": ["G", "H", "I"],
    "bottom": ["G"],
    "answer": ["B", "O", "B", "G"]
  },
  {
    "level": 5,
    "top": ["J", "K", "L"],
    "bottom": ["J", "K"],
    "answer": ["N", "A", "N", "J", "K"]
  },
  {
    "level": 6,
    "top": ["M", "N", "O"],
    "bottom": ["M", "N"],
    "answer": ["S", "A", "S", "M", "N"]
  },
  {
    "level": 7,
    "top": ["P", "Q", "R"],
    "bottom": ["P", "Q", "R"],
    "answer": ["P", "O", "P", "Q", "R"]
  },
  {
    "level": 8,
    "top": ["S", "T", "U"],
    "bottom": ["S", "T"],
    "answer": ["G", "A", "G", "S", "T"]
  },
  {
    "level": 9,
    "top": ["V", "W", "X"],
    "bottom": ["V", "W"],
    "answer": ["X", "A", "X", "V", "W"]
  },
  {
    "level": 10,
    "top": ["Y", "Z", "A", "B"],
    "bottom": ["Y", "Z"],
    "answer": ["M", "O", "M", "Y", "Z"]
  },
  {
    "level": 11,
    "top": ["C", "D", "E", "F"],
    "bottom": ["C", "D"],
    "answer": ["D", "A", "D", "C", "D"]
  },
  {
    "level": 12,
    "top": ["G", "H", "I", "J"],
    "bottom": ["G", "H", "I"],
    "answer": ["T", "E", "F", "T", "G", "H", "I"]
  },
  {
    "level": 13,
    "top": ["K", "L", "M", "N"],
    "bottom": ["K", "L", "M"],
    "answer": ["B", "O", "B", "K", "L", "M"]
  },
  {
    "level": 14,
    "top": ["O", "P", "Q", "R"],
    "bottom": ["O", "P", "Q"],
    "answer": ["N", "A", "N", "O", "P", "Q"]
  },
  {
    "level": 15,
    "top": ["S", "T", "U", "V"],
    "bottom": ["S", "T", "U"],
    "answer": ["S", "A", "S", "S", "T", "U"]
  },
  {
    "level": 16,
    "top": ["W", "X", "Y", "Z"],
    "bottom": ["W", "X", "Y"],
    "answer": ["P", "O", "P", "W", "X", "Y"]
  },
  {
    "level": 17,
    "top": ["A", "B", "C", "D", "E"],
    "bottom": ["A", "B", "C"],
    "answer": ["G", "A", "G", "A", "B", "C"]
  },
  {
    "level": 18,
    "top": ["F", "G", "H", "I", "J"],
    "bottom": ["F", "G", "H"],
    "answer": ["X", "A", "X", "F", "G", "H"]
  },
  {
    "level": 19,
    "top": ["K", "L", "M", "N", "O"],
    "bottom": ["K", "L", "M", "N"],
    "answer": ["M", "O", "M", "K", "L", "M", "N"]
  },
  {
    "level": 20,
    "top": ["P", "Q", "R", "S", "T"],
    "bottom": ["P", "Q", "R", "S"],
    "answer": ["D", "A", "D", "P", "Q", "R", "S"]
  },
  {
    "level": 21,
    "top": ["U", "V", "W", "X", "Y"],
    "bottom": ["U", "V", "W", "X"],
    "answer": ["T", "E", "F", "T", "U", "V", "W", "X"]
  },
  {
    "level": 22,
    "top": ["Z", "A", "B", "C", "D"],
    "bottom": ["Z", "A", "B", "C"],
    "answer": ["B", "O", "B", "Z", "A", "B", "C"]
  },
  {
    "level": 23,
    "top": ["E", "F", "G", "H", "I"],
    "bottom": ["E", "F", "G", "H"],
    "answer": ["N", "A", "N", "E", "F", "G", "H"]
  },
  {
    "level": 24,
    "top": ["J", "K", "L", "M", "N"],
    "bottom": ["J", "K", "L", "M"],
    "answer": ["S", "A", "S", "J", "K", "L", "M"]
  },
  {
    "level": 25,
    "top": ["O", "P", "Q", "R", "S"],
    "bottom": ["O", "P", "Q", "R"],
    "answer": ["P", "O", "P", "O", "P", "Q", "R"]
  },
  {
    "level": 26,
    "top": ["T", "U", "V", "W", "X"],
    "bottom": ["T", "U", "V", "W"],
    "answer": ["G", "A", "G", "T", "U", "V", "W"]
  },
  {
    "level": 27,
    "top": ["Y", "Z", "A", "B", "C", "D"],
    "bottom": ["Y", "Z", "A", "B", "C"],
    "answer": ["X", "A", "X", "Y", "Z", "A", "B", "C"]
  },
  {
    "level": 28,
    "top": ["E", "F", "G", "H", "I", "J"],
    "bottom": ["E", "F", "G", "H", "I"],
    "answer": ["M", "O", "M", "E", "F", "G", "H", "I"]
  },
  {
    "level": 29,
    "top": ["K", "L", "M", "N", "O", "P"],
    "bottom": ["K", "L", "M", "N", "O"],
    "answer": ["D", "A", "D", "K", "L", "M", "N", "O"]
  },
  {
    "level": 30,
    "top": ["Q", "R", "S", "T", "U", "V"],
    "bottom": ["Q", "R", "S", "T", "U"],
    "answer": ["T", "E", "F", "T", "Q", "R", "S", "T", "U"]
  },
  {
    "level": 31,
    "top": ["W", "X", "Y", "Z", "A", "B"],
    "bottom": ["W", "X", "Y", "Z", "A"],
    "answer": ["B", "O", "B", "W", "X", "Y", "Z", "A"]
  }
]
