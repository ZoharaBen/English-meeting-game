import React, { useState } from "react";

export default function EnglishMeetingGame() {
  const [step, setStep] = useState(0);
  const [quizResult, setQuizResult] = useState("");

  const handleNext = () => setStep(step + 1);
  const handleAnswer = (isCorrect) => {
    setQuizResult(
      isCorrect
        ? "✅ Correct! That's a polite way to disagree."
        : "❌ Not quite. Try again or move on."
    );
  };

  return (
    <div className="max-w-md mx-auto p-4 font-sans bg-gray-100 min-h-screen">
      <h1 className="text-2xl text-center font-bold mb-4">Ready for Takeoff ✈️</h1>

      {step === 0 && (
        <div className="bg-white rounded-2xl shadow p-4 mb-4">
          <h2 className="text-xl font-semibold mb-2">🧠 Learning: Small Talk</h2>
          <p className="font-bold">Useful phrases:</p>
          <ul className="list-disc list-inside mb-2">
            <li>"How’s everything on your end?"</li>
            <li>"Is this your first time working with us?"</li>
            <li>"I heard your team just wrapped up a big project—congrats!"</li>
          </ul>
          <p className="mb-2">Challenge: Write a short small talk opener using one phrase above.</p>
          <button onClick={handleNext} className="bg-blue-600 text-white px-4 py-2 rounded-xl">Next ➡️</button>
        </div>
      )}

      {step === 1 && (
        <div className="bg-white rounded-2xl shadow p-4 mb-4">
          <h2 className="text-xl font-semibold mb-2">🎯 Practice</h2>
          <p className="mb-2">Open <strong>ChatGPT</strong> on your phone and paste this prompt:</p>
          <pre className="bg-gray-100 p-2 rounded mb-2">
Pretend you're my colleague from London. Let's do some small talk and then start a meeting about our Q2 goals.
          </pre>
          <p className="mb-2">Write your response, then ask the AI a follow-up question.</p>
          <button onClick={handleNext} className="bg-blue-600 text-white px-4 py-2 rounded-xl">Next ➡️</button>
        </div>
      )}

      {step === 2 && (
        <div className="bg-white rounded-2xl shadow p-4 mb-4">
          <h2 className="text-xl font-semibold mb-2">🧪 Quick Quiz</h2>
          <p className="mb-2">Which phrase is polite disagreement?</p>
          <div className="space-y-2">
            <button
              onClick={() => handleAnswer(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-xl w-full text-left"
            >
              "I see where you're coming from, but…"
            </button>
            <button
              onClick={() => handleAnswer(false)}
              className="bg-blue-600 text-white px-4 py-2 rounded-xl w-full text-left"
            >
              "You're wrong about that."
            </button>
            <button
              onClick={() => handleAnswer(false)}
              className="bg-blue-600 text-white px-4 py-2 rounded-xl w-full text-left"
            >
              "That doesn't make sense."
            </button>
          </div>
          <p className="mt-4 font-semibold">{quizResult}</p>
        </div>
      )}
    </div>
  );
}
