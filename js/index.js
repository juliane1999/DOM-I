const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


const container = document.querySelector('.container');
console.log(container);

const nav = document.querySelector('nav');

const nav1 = nav.querySelector('a');
const nav2 = nav1.nextElementSibling
const nav3 = nav2.nextElementSibling
const nav4 = nav3.nextElementSibling
const nav5 = nav4.nextElementSibling
const nav6 = nav5.nextElementSibling

nav1.textContent = 'Services';
nav2.textContent = 'Product';
nav3.textContent = 'Vision';
nav4.textContent = 'Features';
nav5.textContent = 'About';
nav6.textContent = 'Contact';

a.style.color='green'

const extraNav1 = document.createElement('a');
extraNav1.textContent= 'Nav1';
extraNav1.href = '#';
document.querySelector('nav').appendChild(extraNav1);

const extraNav2 = document.createElement('a');
extraNav2.textContent= 'Nav 2';
extraNav2.href= '#';
document.querySelector('nav').prepend(extraNav2);


const logoImg = document.querySelector('#logo-img');
console.log(logoImg);
logoImg.src = 'img/logo.png';




const ctah1 = document.querySelector('section.cta div.cta-text h1');
console.log(ctah1);
ctah1.textContent = 'DOM Is Awesome';

const ctaButton = document.querySelector('section.cta div.cta-text button');
console.log(ctaButton);
ctaButton.textContent = 'Get Started';

const ctaImg = document.querySelector('#cta-img');
console.log(ctaImg);
ctaImg.src = 'img/header-img.png';




const topContent = document.querySelector('.top-content .text-content');

const firstHeading = topContent.querySelector('h4')
firstHeading.textContent = 'Features';

const firstP = topContent.querySelector('p');
firstP.textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

const textContent = topContent.nextElementSibling

const secondHeading = textContent.querySelector('h4');
secondHeading.textContent = 'About';

const secondP = textContent.querySelector('p');
secondP.textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'




const midImg = document.querySelector('#middle-img');
console.log(midImg);
midImg.src= 'img/mid-page-accent.jpg';



const bottomContent = document.querySelector('.bottom-content .text-content');

const thirdHeading = bottomContent.querySelector('h4');
thirdHeading.textContent = 'Services'

const thirdP = bottomContent.querySelector('p');
thirdP.textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

const secondText = bottomContent.nextElementSibling

const fourthHeading = secondText.querySelector('h4');
fourthHeading.textContent = 'Product'

const fourthP = secondText.querySelector('p');
fourthP.textContent= 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

const thirdText = secondText.nextElementSibling

const fifthHeading = thirdText.querySelector('h4');
fifthHeading.textContent= 'Vision'

const fifthP = thirdText.querySelector('p');
fifthP.textContent= 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'





const contacth4 = document.querySelector('section.contact h4');
console.log(contacth4);
contacth4.textContent = 'Contact';




const contacts = document.querySelector('section.contact');

const firstContact = contacts.querySelector('p');
firstContact.textContent='123 Way 456 Street Somewhere, USA'

const secondContact = contacts.nextElementSibling

const contactP2 = secondContact.querySelector('p');
contactP2.textContent= '1 (888) 888-8888'

const thirdContact = secondContact.nextElementSibling

const contactP3 = thirdContact.querySelector('p');
contactP3.textContent= 'sales@greatidea.io'





const footer = document.querySelector('footer p');
console.log(footer);
footer.textContent = 'Copyright Great Idea! 2018'