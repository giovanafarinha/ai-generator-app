function displayGeneratedAnswer(response) {
  console.log("response generated ");
  new Typewriter("#ai-answer", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generating(event) {
  event.preventDefault();
  let instructionInput = document.querySelector("#instruction");
  let apiKey = "afe65a6af8c45atd7o6f5fb347163020";
  let context =
    "You are an intelligent,and you know every word, like a dictionary expert. Your missions its to Mention how to divise the syllables with <em> element and font-size 35 in the beginnsing and then paragraphe  the  short definition of word. ";
  let prompt = `Generate a short definition of the word ${instructionInput.value} `;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("generating definition");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displayGeneratedAnswer);
}
let generatingFormElement = document.querySelector("#generatorForm");
generatingFormElement.addEventListener("submit", generating);
