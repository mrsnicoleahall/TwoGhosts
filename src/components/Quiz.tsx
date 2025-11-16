import React, { useState } from 'react';

const questions = [
  {
    questionText: 'Do any of the following reflect the experience you\'ve had with agencies thus far?',
    answerOptions: [
      { answerText: 'Overpriced', isCorrect: true },
      { answerText: 'Bloated and Fruitless', isCorrect: true },
      { answerText: 'Slow', isCorrect: true },
      { answerText: 'None of these reflect MY agency', isCorrect: false },
      { answerText: 'Never Worked With an Agency', isCorrect: true },
    ],
  },
  {
    questionText: 'Do you run/work for a good company offering a good product/service?',
    answerOptions: [
      { answerText: 'My offering is solid. It\'s other things that are shaky.', isCorrect: true },
      { answerText: 'My offering isn\'t there yet.', isCorrect: true },
      { answerText: 'I hate my company.', isCorrect: false },
    ],
  },
  {
    questionText: 'Which of the following best reflects your feelings about marketing?',
    answerOptions: [
      { answerText: 'Marketing is bullshit.', isCorrect: true },
      { answerText: 'I don\'t care. Can you just give me something that works?', isCorrect: true },
      { answerText: 'I need leads. Or a lifeline. Or something.', isCorrect: true },
      { answerText: 'Marketing is the process by which we inform our target buyers of our offering.', isCorrect: false },
    ],
  },
  {
    questionText: 'Which of the following best reflects your feelings about branding?',
    answerOptions: [
      { answerText: 'Expensive rebrand exercises are really gigantic wastes of time and energy.', isCorrect: true },
      { answerText: 'I don\'t care about all that hippy nonsense, I\'m just trying to get leads.', isCorrect: true },
      { answerText: 'My brand is perfect and amazing.', isCorrect: true },
      { answerText: 'My brand... is a pathetic mish-mash of disparate assets and elements that don\'t fit together and don\'t reflect my organization.', isCorrect: true },
    ],
  },
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerButtonClick = (isCorrect: boolean) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const scorePercent = (score / 4) * 100;

  return (
    <section class="w-full my-10">
      <h2 class="text-6xl font-black tracking-tight text-white mb-4 font-['Raleway'] text-center">
        Matchmaker
      </h2>
      <div class="bg-text opacity-10 text-7xl font-black absolute -z-10 font-['Raleway'] left-1/2 transform -translate-x-1/2">
        Compatibility
      </div>

      <p class="max-w-3xl mx-auto mb-8 text-lg leading-relaxed text-center text-white">
        With our patented (by patented, we mean, not patented) eliminate-the-BS client→agency compatibility quiz, you can save so much time and energy.
      </p>

      <div class="max-w-3xl mx-auto">
        {showScore ? (
          <div class="text-center p-8 glass rounded-lg">
            <p class="text-3xl text-white font-black font-['Raleway'] mb-8">
              According to the all-seeing-eye, we are {scorePercent}% compatible
            </p>
            {scorePercent >= 75 ? (
              <p class="text-xl text-white font-['Raleway']">
                We should definitely talk! Let's schedule a consultation.
              </p>
            ) : scorePercent >= 50 ? (
              <p class="text-xl text-white font-['Raleway']">
                There's potential here. Let's see if we can make it work.
              </p>
            ) : (
              <p class="text-xl text-white font-['Raleway']">
                Maybe we're not the right fit right now, but that's okay!
              </p>
            )}
            <button
              onClick={() => {
                setCurrentQuestion(0);
                setShowScore(false);
                setScore(0);
              }}
              class="btn-gradient mt-8"
            >
              Try Again
            </button>
          </div>
        ) : (
          <div class="space-y-6">
            <div class="text-center mb-8">
              <p class="text-2xl text-white font-['Raleway'] mb-4">
                {questions[currentQuestion].questionText}
              </p>
            </div>

            <div class="space-y-4">
              {questions[currentQuestion].answerOptions.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerButtonClick(option.isCorrect)}
                  class="w-full p-6 text-left text-white font-['Raleway'] text-lg glass rounded-lg hover:bg-white/10 transition-all border border-white/20"
                >
                  {option.answerText}
                </button>
              ))}
            </div>

            <div class="text-center mt-8">
              <p class="text-white font-['Raleway']">
                Question {currentQuestion + 1} of {questions.length}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Quiz;
