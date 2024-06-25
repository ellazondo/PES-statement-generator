function generatePes(event) {
  event.preventDefault();

  new Typewriter('#generated-pes', {
    strings: ['AI generated PES'],
    autoStart: true,
    delay: 1,
    cursor: '',
  });
  pesElement.innerHTML = 'PES statement generated';
}

let pesFormElement = document.querySelector('#pes-gen-form');
pesFormElement.addEventListener('submit', generatePes);
