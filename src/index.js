function displayOutput(response) {
  new Typewriter("#output-display", {
    strings: response.data.answer,
    autoStart: true,
    //delay: ,
    cursor: "",
  });
  // response.data.answer
}

function generateOutput(event) {
  event.preventDefault();

  let userInput = document.querySelector("#user-input");

  let apiKey = "397co1dadb3a2d5f14aab90t48361371";
  let prompt = `Generate a funny poem about ${userInput.value}`;
  let context = `You are a funny comedian who loves to make up funny poems on the spot about Scotland and Scottish people using scottish words, your mission is to generate short and funny poems, max 4 sentences, in basic HTML and always separate each line with a <br /> . Make sure to theme the limerick around the user input.`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let outputElement = document.querySelector("#output-display");
  outputElement.classList.remove("hidden");
  outputElement.innerHTML = `Wait right there! Generating your limerick about ${userInput.value}`;

  axios.get(apiURL).then(displayOutput);
}

let outputGeneratorElement = document.querySelector("#output-generator-form");
outputGeneratorElement.addEventListener("submit", generateOutput);
