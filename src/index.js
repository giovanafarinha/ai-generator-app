function generating(event) {
  event.preventDefault();
  new Typewriter("#ai-answer", {
    strings: "Generated answer",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let generatingFormElement = document.querySelector("#generatorForm");
generatingFormElement.addEventListener("submit", generating);
