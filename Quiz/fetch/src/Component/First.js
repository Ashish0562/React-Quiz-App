import React, { useState } from 'react'

const First = () => {

  const question = [
    {
      ques: "Who is the father of Computers?",
      ans: [
        { answer: "James Gosling", rightorwrong: false },
        { answer: "Dennis Ritchie", rightorwrong: false },
        { answer: "Charles Babbage", rightorwrong: true },
        { answer: "Bjarne Stroustrup", rightorwrong: false },
      ],
    },
    {
      ques: "Which of the following language does the computer understand?",
      ans: [
        { answer: "Assembly Language", rightorwrong: false },
        { answer: "Binary Language", rightorwrong: true },
        { answer: "Kotlin Language", rightorwrong: false },
        { answer: "C Language", rightorwrong: false },
      ],
    },
    {
      ques: "Which of the following is the smallest unit of data in a computer?",
      ans: [
        { answer: "Bit", rightorwrong: true },
        { answer: "Byte", rightorwrong: false },
        { answer: "KiloByte", rightorwrong: false },
        { answer: "Nibble", rightorwrong: false },
      ],
    },
    {
      ques: "Which of the following is not a type of computer code?",
      ans: [
        { answer: "EBCDIC", rightorwrong: false },
        { answer: "ASCII", rightorwrong: false },
        { answer: "BCD", rightorwrong: false },
        { answer: "EDIC", rightorwrong: true },
      ],
    },
    {
      ques: "Which of the following is used in EBCDIC?",
      ans: [
        { answer: "Super Computer", rightorwrong: false },
        { answer: "Programming", rightorwrong: false },
        { answer: "Machine Codes", rightorwrong: false },
        { answer: "MainFrame", rightorwrong: true },
      ],
    },
    
  ];


  const [count, setcount] = useState(0);
  const [score, setScore] = useState(0);
  const [result, setresult] = useState(false);


  const handel = (rightorwrong) => {
    if (rightorwrong) {
      setScore(score + 1);
    }

    const nxt = count + 1;
    if (nxt < question.length) {
      setcount(nxt);
    } else {
      setresult(true);
    }
  };

  return (
    <div className="card">
      {result ? (
        <div>
          You scored {score} out of {question.length}
        </div>
      ) : (
        <>
          <div>
              Question {count + 1}/{question.length}
              <h1>{question[count].ques}</h1>
          </div>
          <div>
            {
              question[count].ans.map((e) => (
                <p className='ans' onClick={() => handel(e.rightorwrong)}>{e.answer}</p>
              ))
            }
          </div>
        </>
      )}
    </div>
  );
}

export default First