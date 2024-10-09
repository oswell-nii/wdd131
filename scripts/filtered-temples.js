const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const h2 = document.querySelector('h2')
const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
    {
        templeName: "Accra Ghana Temple",
        location: "Accra, Ghana",
        dedicated: "2004, January, 11",
        area: 17500,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/400x225/accra-ghana-temple-detail-249022-2400x1200.jpg"
    },
    {
        templeName: "Dallas Texas Temple",
        location: "Dallas, Texas, United States",
        dedicated: "1984, October, 19",
        area: 44207,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/dallas-texas/400x250/dallas-temple-lds-1048888-wallpaper.jpg"
    },
    {
        templeName: "Johannesburg South Africa Temple",
        location: "Johannesburg , South Africa",
        dedicated: "1985, August, 24",
        area: 19184,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/johannesburg-south-africa/400x250/johannesburg-south-africa-temple-1021295-wallpaper.jpg"
    },
    {
        templeName: "Palmyra New York Temple",
        location: "Palmyra, New York, United States",
        dedicated: "2000, April, 6 ",
        area: 10900,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/palmyra-new-york/400x250/palmyra-temple-lds-1079094-wallpaper.jpg"
    }
];

const oldLink = document.getElementById('old');
oldLink.addEventListener('click', function(event) {
  event.preventDefault();
  h2.textContent = 'Old Temples';
  filterOldTemples();
});

const newLink = document.getElementById('new');
newLink.addEventListener('click', function(event) {
  event.preventDefault();
  h2.textContent = 'New Temples';
  filterNewTemples();
});

const largeLink = document.getElementById('large');
largeLink.addEventListener('click', function(event) {
  event.preventDefault();
  h2.textContent = 'Large Temples';
  filterLargeTemples();
});

const smallLink = document.getElementById('small');
smallLink.addEventListener('click', function(event) {
  event.preventDefault();
  h2.textContent = 'Small Temples';
  filterSmallTemples();
});


createTempleCard(temples);

function filterOldTemples() {
  const container = document.querySelector('.container');
  container.innerHTML = '';

  const oldTemples = temples.filter(temple => {
    const dedicationYear = new Date(temple.dedicated).getFullYear();
    return dedicationYear < 1900;
});
  
  createTempleCard(oldTemples);
}

function filterNewTemples() {
  const container = document.querySelector('.container');
  container.innerHTML = '';

  const newTemples = temples.filter(temple => {
    const dedicationYear = new Date(temple.dedicated).getFullYear();
    return dedicationYear > 2000;
  });
  
  createTempleCard(newTemples);
}

function filterLargeTemples() {
  const container = document.querySelector('.container');
  container.innerHTML = '';

  const largeTemples = temples.filter(temple => temple.area > 90000);
  
  createTempleCard(largeTemples);
}

function filterSmallTemples() {
  const container = document.querySelector('.container');
  container.innerHTML = '';

  const smallTemples = temples.filter(temple => temple.area < 10000);
  
  createTempleCard(smallTemples);
}


function createTempleCard(filteredTemples) {
    const container = document.querySelector('.container');

    filteredTemples.forEach(temple => {
        const card = document.createElement("section");
        const name = document.createElement("h3");
        const location = document.createElement("p");
        const dedication = document.createElement("p");
        const area = document.createElement("p");
        const img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label-location">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label-dedicated">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label-area">Area:</span> ${temple.area}`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName}`);
        img.setAttribute("loading", "lazy");

        // Adding the label class to each label for styling
        location.classList.add('label');
        dedication.classList.add('label');
        area.classList.add('label');

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);


        container.appendChild(card);
    });
}


hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});