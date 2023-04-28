// Dynamic speakers
  const speakers = [
    {
      image: 'img/speakers/speaker1.png',
      name: 'Yochai Bankler',
      occupation: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
      description: 'Benkler studies scholars-based imrovement, and published his seminal book The Wealth in Creativity in 2006.',
    },
    {
      image: 'img/speakers/speaker2.png',
      name: 'Yochai Bankler',
      occupation: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
      description: 'Benkler studies scholars-based imrovement, and published his seminal book The Wealth in Creativity in 2006.',
    },
    {
      image: 'img/speakers/speaker3.png',
      name: 'Yochai Bankler',
      occupation: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
      description: 'Benkler studies scholars-based imrovement, and published his seminal book The Wealth in Creativity in 2006.',
    },
    {
      image: 'img/speakers/speaker4.png',
      name: 'Yochai Bankler',
      occupation: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
      description: 'Benkler studies scholars-based imrovement, and published his seminal book The Wealth in Creativity in 2006.',
    },
    {
      image: 'img/speakers/speaker5.png',
      name: 'Yochai Bankler',
      occupation: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
      description: 'Benkler studies scholars-based imrovement, and published his seminal book The Wealth in Creativity in 2006.',
    },
    {
      image: 'img/speakers/speaker6.png',
      name: 'Yochai Bankler',
      occupation: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
      description: 'Benkler studies scholars-based imrovement, and published his seminal book The Wealth in Creativity in 2006.',
    },
  ];

  const appendFeatured = document.getElementById('featured-speakers');

  const image = speakers.map((speak) => speak.image);

  const name = speakers.map((speak) => speak.name);

  const occupation = speakers.map((speak) => speak.occupation);

  const description  = speakers.map((speak) => speak.description);

  appendFeatured.insertAdjacentHTML('afterbegin', 
  '<div class="fs-header"> <h2>Featured Speakers</h2> <hr class="hr-line"> </div>'
  );

  for(let i = 0; i < speakers.length; i+=1) {
    appendFeatured.insertAdjacentHTML('beforeend', `
      <div class="fs-content"> 
          <div class="speaker">
            <img src="${image[i]}" alt="Speaker 1" class="speaker-img">
            <div class="speaker-content">
                <h2 class="speaker-title">${name[i]}</h2>
                <p class="italic-text">
                    ${occupation[i]}
                </p>
                <hr class="speaker-hr">
                <p class="speaker-description">
                    ${description[i]}
                </p>
            </div>
          </div>
        </div>
    `);
  };


