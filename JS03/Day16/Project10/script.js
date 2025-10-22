const form = document.querySelector('form');
const answer = {
  q1: "Sachin Tendulkar",
  q2: "West Indies",
  q3: "Sachin Tendulkar",
  q4: "264",
  q5: "Muttiah Muralitharan",
  q6: "MS Dhoni",
  q7: "Rahul Dravid",
  q8: "Anil Kumble",
  q9: "Yuvraj Singh",
  q10: "Virat Kohli"
};

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const data = new FormData(form);
  let finalScore = 0;

  for (let [name, value] of data) {
    if (answer[name] === value)
      finalScore++;
  }

  const out = document.getElementById("out");
  out.innerHTML = `
    🎯 You scored <span style="color: yellow;">${finalScore}</span> out of 10! 
    <br>
    ${finalScore >= 8 ? "🏆 Excellent! You're a cricket pro!" : finalScore >= 5 ? "👏 Nice! You know your cricket!" : "😅 Keep learning, champ!"}
  `;

  form.reset();
});
