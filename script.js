const speakersData = [{
    id: 1,
    name: 'Gode',
    title: 'Associate Professor',
    details: 'Information Technology Head at Nord University Business School, Norway.',
    image: './images/Gode.png',
  },
  {
    id: 2,
    name: 'kersten',
    title: 'Senior web developer',
    details: 'A seasoned web developer working with RSA, a leading tech company in Rwanda.',
    image: './images/kersten.png',
  },
  {
    id: 3,
    name: 'brade',
    title: 'Professor for Media Computer Science',
    details: 'Head of the New Work Design Lab his interest lies in creating and researching tools for empowerment of humans in information technology.',
    image: './images/brade.png',
  },
  {
    id: 4,
    name: 'Emeh',
    title: 'An expatriate in foreign country',
    details: 'Well recognized program analyst, an African from Nigeia who is currently working in Saudi Arabia.',
    image: './images/Emeh.jpg',
  },
  {
    id: 5,
    name: 'enobong',
    title: 'Industrial Sociologist, Web Developer',
    details: 'Has more more than 10 years in the field of Information Technology.',
    image: './images/enobong.png',
  },
  {
    id: 6,
    name: 'Ken',
    title: 'A civil engineer cum software developer',
    details: 'Dr. Chee Ken Nee has more than 12 years of experience as a high school teacher with PhD in Educational Technology.',
    image: './images/Ken.png',
  },
  ];
  
  function speakerfunc() {
    const container = document.querySelector('.experts');
    speakersData.map((el) => {
      const div = document.createElement('div');
      div.innerHTML = `<img class="images" src=${el.image} width="150" height="150" alt="Exhibition image" />
  <div class="details">
    <h4>${el.name}</h4>
    <h5>${el.title}</h5>
    <p>
    ${el.details}
    </p>
  </div>`;
      return container.appendChild(div);
    });
  }
  window.addEventListener('load', speakerfunc);
  