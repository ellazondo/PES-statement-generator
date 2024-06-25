function displayPES(response) {
  new Typewriter('#generated-pes', {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: '',
  });
}

function generatePes(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector('#user-instructions');
  let apiKey = '3ccbb01f4026aa2f9133ot25bad6fafe';
  let prompt = `User Instructions: Generate a PES statement based on ${instructionsInput.value}`;
  let context =
    "You are a clinical pediatric dietitian expert. Using the user instructions, please create a one-sentence PES statement which clearly identifies a specific health issue, its underlying causes, and the observable characteristics or indicators of this condition. The statement should be one sentence, seperated by related to and as evidenced by. Sign at the bottom with 'SheCodes AI' inside a <strong> element and in purple text, one space below the statement";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  //build the API url
  //make a call to the API
  axios.get(apiURL).then(displayPES);
  //Display the generated pes statement

  //   pesElement.innerHTML = 'PES statement generated';
}

let pesFormElement = document.querySelector('#pes-gen-form');
pesFormElement.addEventListener('submit', generatePes);
