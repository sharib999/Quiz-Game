const quesJSON = [
  {
    correctAnswer: 'Three ',
    options: ['Two', 'Three ', 'Four', 'Five'],
    question:
      "How many pieces of bun are in a Mcdonald's Big Mac?",
  },
  {
    correctAnswer: 'L. Frank Baum',
    options: [
      'Suzanne Collins',
      'James Fenimore Cooper',
      'L. Frank Baum',
      'Donna Leon',
    ],
    question:
      "Which author wrote 'The Wonderful Wizard of Oz'?",
  },
  {
    correctAnswer: 'Atlanta United',
    options: [
      'Atlanta United',
      'Atlanta Impact',
      'Atlanta Bulls',
      'Atlanta Stars',
    ],
    question:
      'Which of these is a soccer team based in Atlanta?',
  },
  {
    correctAnswer: 'A Nanny',
    options: [
      'A Sow',
      'A Lioness',
      'A Hen',
      'A Nanny',
    ],
    question: 'A female goat is known as what?',
  },
  {
    correctAnswer: 'P. L. Travers',
    options: [
      'J. R. R. Tolkien',
      'P. L. Travers',
      'Lewis Carroll',
      'Enid Blyton',
    ],
    question:
      "Which author wrote 'Mary Poppins'?",
  },
];





let score = 0
let currentQues = 0
const totalScore = quesJSON.length

// accessing all elements form HTML     
const quesEl = document.getElementById('question')
const optionEl = document.getElementById('options')
const scoreEl = document.getElementById('score')
const nextEl = document.getElementById('next')

showQuestion()
scoreEl.textContent = `Score: ${score}/${totalScore}`
nextEl.addEventListener('click', ()=>{
  nextQues()
})

function showQuestion(){
  // destructuring the object 
  const {
    question,
    correctAnswer,
    options
  } = quesJSON[currentQues]

    // setting question
  quesEl.textContent = question

  const shuffledOption = shuffleOption(options)
  // populating options with buttons
  shuffledOption.forEach(opt => {
    // creating button
    const btn = document.createElement('button')
    btn.textContent = opt
    // console.log(opt)
    optionEl.append(btn)

    //event handler
    btn.addEventListener('click', ()=>{
      if(opt == correctAnswer){
        score++
      }else{
        score = score-0.25
      }
      // console.log(score)
      scoreEl.textContent = `Score: ${score}/${totalScore}`
      nextQues()
    })
  });

}

function nextQues(){
  optionEl.textContent = ''
  currentQues++
  if(currentQues >= quesJSON.length){
    quesEl.textContent = 'Quiz Completed'
    optionEl.textContent = ""
    nextEl.remove()
  }
  else{
    showQuestion()
  }
}

// Shuffling Options
function shuffleOption(options) {
  for (let i = options.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [options[i], options[j]] = [options[j], options[i]];
  }
  return options
}

