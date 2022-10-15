console.log(
  'Если будут какие-то вопросы пожалуйста пишите лучше в дискорд : bvc#7569'
);
const burgerButton = document.querySelector('.burger-line');
const sliderItems = document.querySelector('.backstage__slider__items');
const burgerWrapper = document.querySelector('.burger__wrapper');
const sliderArrowRight = document.querySelector('.left');
const sliderArrowLeft = document.querySelector('.right');

const burgerActive = () => {
  burgerButton.classList.toggle('active-burger');
  burgerWrapper.classList.toggle('burger__wrapper__active');
  document.querySelector('.grey__bg').classList.toggle('grey__bg-active');
  document.querySelectorAll('.burger__link').forEach((item) => {
    item.classList.toggle('burger__link__active');
  });
};

burgerButton.addEventListener('click', () => {
  burgerActive();
});
document.querySelector('.grey__bg').addEventListener('click', () => {
  burgerActive();
});

// generator slider item
const store = {
  state: [
    {
      id: 1,
      img: './assets/backstage-slider/1.svg',
      describtion: 'giant Pandas',
      subtitle: 'Native to Southwest China',
      icon: './assets/backstage-slider/icons/banana.svg',
    },
    {
      id: 2,
      img: './assets/backstage-slider/2.svg',
      describtion: 'Eagles',
      subtitle: 'Native to South America',
      icon: './assets/backstage-slider/icons/meat-fish.svg',
    },
    {
      id: 3,
      img: './assets/backstage-slider/3.svg',
      describtion: 'Gorillas',
      subtitle: 'Native to Congo',
      icon: './assets/backstage-slider/icons/banana.svg',
    },
    {
      id: 4,
      img: './assets/backstage-slider/4.svg',
      describtion: 'Two-toed Sloth',
      subtitle: 'Mesoamerica, South America',
      icon: './assets/backstage-slider/icons/banana.svg',
    },
    {
      id: 5,
      img: './assets/backstage-slider/5.svg',
      describtion: 'cheetahs',
      subtitle: 'Native to Africa',
      icon: './assets/backstage-slider/icons/meat-fish.svg',
    },
    {
      id: 6,
      img: './assets/backstage-slider/6.svg',
      describtion: 'Penguins',
      subtitle: 'Native to Antarctica',
      icon: './assets/backstage-slider/icons/meat-fish.svg',
    },
    {
      id: 7,
      img: './assets/backstage-slider/7.jpg',
      describtion: 'LUNX',
      subtitle: 'Russia',
      icon: './assets/backstage-slider/icons/meat-fish.svg',
    },
    {
      id: 8,
      img: './assets/backstage-slider/8.jpg',
      describtion: 'HIPPOPOTAMUS',
      subtitle: 'South Africa',
      icon: './assets/backstage-slider/icons/banana.svg',
    },
    {
      id: 9,
      img: './assets/backstage-slider/9.jpg',
      describtion: 'HYENA',
      subtitle: 'Africa',
      icon: './assets/backstage-slider/icons/meat-fish.svg',
    },
    {
      id: 10,
      img: './assets/backstage-slider/10.jpg',
      describtion: 'ELK',
      subtitle: 'Canada',
      icon: './assets/backstage-slider/icons/banana.svg',
    },
    {
      id: 11,
      img: './assets/backstage-slider/11.jpg',
      describtion: 'BEAVER',
      subtitle: 'Europe',
      icon: './assets/backstage-slider/icons/banana.svg',
    },
    {
      id: 12,
      img: './assets/backstage-slider/12.jpg',
      describtion: 'TITMOUSE',
      subtitle: 'Europe',
      icon: './assets/backstage-slider/icons/banana.svg',
    },
    {
      id: 13,
      img: './assets/backstage-slider/13.jpg',
      describtion: 'MONITOR LIZARD',
      subtitle: 'Australia',
      icon: './assets/backstage-slider/icons/meat-fish.svg',
    },
    {
      id: 14,
      img: './assets/backstage-slider/14.jpg',
      describtion: 'VOLE',
      subtitle: 'Europe',
      icon: './assets/backstage-slider/icons/banana.svg',
    },
    {
      id: 15,
      img: './assets/backstage-slider/15.jpg',
      describtion: 'MOLE',
      subtitle: 'Europe',
      icon: './assets/backstage-slider/icons/banana.svg',
    },
    {
      id: 16,
      img: './assets/backstage-slider/16.jpg',
      describtion: 'RHINOCEROS',
      subtitle: 'North Africa',
      icon: './assets/backstage-slider/icons/banana.svg',
    },
    {
      id: 17,
      img: './assets/backstage-slider/17.jpg',
      describtion: 'CROCODILE',
      subtitle: 'North Africa',
      icon: './assets/backstage-slider/icons/meat-fish.svg',
    },
    {
      id: 18,
      img: './assets/backstage-slider/18.jpg',
      describtion: 'PORCUPINE',
      subtitle: 'Australia',
      icon: './assets/backstage-slider/icons/banana.svg',
    },
  ],
  rev: [
    {
      id: 1,
      img: './assets/testimonials/user-icon.svg',
      name: 'Michael John',
      location: 'Local Austria • Today',
      feedback: ` The best online zoo I’ve met. My son delighted very much ljves to watch <span class="hide__320px">gouillas. Online
        zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. <span class="hide__640px"> My
            son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to
            instill a love for animals.
            The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online
            zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My
            son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to
            instill a love for </span></span>`,
    },
    {
      id: 2,
      img: './assets/testimonials/user-icon2.svg',
      name: 'Oskar Samborsky',
      location: 'Local Austria • Yesterday',
      feedback: `  My son delighted very much ljves to watch gouillas. Online zoo <span class="hide__320px">is one jf the ways to instill a love for animals.The best online zoo I <span class="hide__320px">’ve met.The best online zoo I’ve met. My<span class="hide__640px"> son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.
        The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.
         </span></span></span>`,
    },
    {
      id: 3,
      img: './assets/testimonials/user-icon3.svg',
      name: 'Fredericka Michelin',
      location: ' Local Austria • Yesterday',
      feedback: ` Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve <span class="hide__320px"> met. My son delighted very much ljves to watch gouillas. <span class="hide__320px">The best online zoo I’ve met. My<span class="hide__640px"> son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.
        The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.
         </span></span></span>`,
    },
    {
      id: 4,
      img: './assets/testimonials/user-icon4.svg',
      name: 'Mila Riksha',
      location: ' Local Austria • Yesterday',
      feedback: `  My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas.
        The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf `,
    },
    {
      id: 5,
      img: './assets/testimonials/user-icon.svg',
      name: 'Michael John',
      location: 'Local Austria • Today',
      feedback: ` The best online zoo I’ve met. My son delighted very much ljves to watch <span class="hide__320px">gouillas. Online
        zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. <span class="hide__640px"> My
            son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to
            instill a love for animals.
            The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online
            zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My
            son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to
            instill a love for </span></span>`,
    },
    {
      id: 6,
      img: './assets/testimonials/user-icon2.svg',
      name: 'Oskar Samborsky',
      location: 'Local Austria • Yesterday',
      feedback: `  My son delighted very much ljves to watch gouillas. Online zoo <span class="hide__320px">is one jf the ways to instill a love for animals.The best online zoo I <span class="hide__320px">’ve met.The best online zoo I’ve met. My<span class="hide__640px"> son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.
        The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.
         </span></span></span>`,
    },
    {
      id: 7,
      img: './assets/testimonials/user-icon3.svg',
      name: 'Fredericka Michelin',
      location: ' Local Austria • Yesterday',
      feedback: ` Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve <span class="hide__320px"> met. My son delighted very much ljves to watch gouillas. <span class="hide__320px">The best online zoo I’ve met. My<span class="hide__640px"> son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.
        The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.
         </span></span></span>`,
    },
    {
      id: 8,
      img: './assets/testimonials/user-icon4.svg',
      name: 'Mila Riksha',
      location: ' Local Austria • Yesterday',
      feedback: `  My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas.
        The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf `,
    },
    {
      id: 9,
      img: './assets/testimonials/user-icon.svg',
      name: 'Michael John',
      location: 'Local Austria • Today',
      feedback: ` The best online zoo I’ve met. My son delighted very much ljves to watch <span class="hide__320px">gouillas. Online
        zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. <span class="hide__640px"> My
            son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to
            instill a love for animals.
            The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online
            zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My
            son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to
            instill a love for </span></span>`,
    },
    {
      id: 10,
      img: './assets/testimonials/user-icon2.svg',
      name: 'Oskar Samborsky',
      location: 'Local Austria • Yesterday',
      feedback: `  My son delighted very much ljves to watch gouillas. Online zoo <span class="hide__320px">is one jf the ways to instill a love for animals.The best online zoo I <span class="hide__320px">’ve met.The best online zoo I’ve met. My<span class="hide__640px"> son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.
        The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.
         </span></span></span>`,
    },
    {
      id: 11,
      img: './assets/testimonials/user-icon3.svg',
      name: 'Fredericka Michelin',
      location: ' Local Austria • Yesterday',
      feedback: ` Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve <span class="hide__320px"> met. My son delighted very much ljves to watch gouillas. <span class="hide__320px">The best online zoo I’ve met. My<span class="hide__640px"> son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.
        The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.
         </span></span></span>`,
    },
    {
      id: 12,
      img: './assets/testimonials/user-icon4.svg',
      name: 'Mila Riksha',
      location: ' Local Austria • Yesterday',
      feedback: `  My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas.
        The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf `,
    },
  ],
};

const testimonialsGenerator = (id, img, name, location, feedback) => {
  return `
    <div id="${id}" class="feedback__item">
    <div id="${id}" class="feedback__up">
        <div id="${id}" class="feedback__icon">
            <img id="${id}" src="${img}" alt="">
        </div>
        <div id="${id}" class="feedbackinfo">
            <div id="${id}" class="feedback__name">
                ${name}
            </div>
            <div id="${id}" class="feedback__online">
                ${location}
            </div>
        </div>
    </div>
    <div id="${id}" class="feedback__down">
       ${feedback}
    </div>
</div>`;
};

const testimonialsWrapper = document.querySelector('.feedback__items');
store.rev.forEach((item) => {
  testimonialsWrapper.insertAdjacentHTML(
    'beforeend',
    testimonialsGenerator(
      item.id,
      item.img,
      item.name,
      item.location,
      item.feedback
    )
  );
});

const popupGenerator = (img, name, location, feedback) => {
  return `
    
                <div class="testimonials__popup-up">
                    <div class="popup__img">
                        <img src="${img}" alt="">
                    </div>
                    <div class="popup__describtion">
                        <div class="popup__describtion-up">
                            ${name} 
                        </div>
                        <div class="popup__describtion-down">
                            ${location}
                        </div>
                    </div>
                    <img class="popup__close" src="./assets/testimonials/x_icon.svg" alt="">
                </div>
                <div class="testimonials__popup-down">
                    ${feedback}
                </div>
            `;
};

document.querySelector('.testimonials__popup').innerHTML = popupGenerator(
  store.rev[0].img,
  store.rev[0].name,
  store.rev[0].location,
  store.rev[0].feedback
);
const popups = document.querySelectorAll('.feedback__item');
popups.forEach((item) => {
  item.addEventListener('click', (e) => {
    if (e.target.id === 1) {
      document.querySelector('.testimonials__popup').innerHTML = popupGenerator(
        store.rev[e.target.id].img,
        store.rev[e.target.id].name,
        store.rev[e.target.id].location,
        store.rev[e.target.id].feedback
      );
    } else {
      document.querySelector('.testimonials__popup').innerHTML = popupGenerator(
        store.rev[e.target.id - 1].img,
        store.rev[e.target.id - 1].name,
        store.rev[e.target.id - 1].location,
        store.rev[e.target.id - 1].feedback
      );
    }
    document.querySelector('.popup__close').addEventListener('click', () => {
      document.querySelector('.testimonials__popup').classList.toggle('hidden');
      document
        .querySelector('.testimonials__grey-bg')
        .classList.toggle('hidden');
    });
    document.querySelector('.testimonials__popup').classList.toggle('hidden');
    document.querySelector('.testimonials__grey-bg').classList.toggle('hidden');
  });
});
document
  .querySelector('.testimonials__grey-bg')
  .addEventListener('click', () => {
    document.querySelector('.testimonials__popup').classList.toggle('hidden');
    document.querySelector('.testimonials__grey-bg').classList.toggle('hidden');
  });
let state = store.state;
const sliderItemGenerator = (img, describtion, subtitle, icon) => {
  return `<div class="backstage__slider__item">
    <div class="img__wrapper">
        <img src="${img}" class="backstage__img" alt="panda">
        <div class="img__wrapper-hover">${describtion}
            <p> Native to Southwest China</p>
        </div>
    </div>
    <div class="slider__item__decribtion">
        <div class="item__describtion-left">
            <div class="item__describtion__title">
               ${describtion}
            </div>
            ${subtitle}
        </div>
        <div class="item__describtion-right">
            <img src="${icon}" alt="">
        </div>
    </div>
</div>`;
};

const generateRandNumber = (length) => {
  const range = length; // максимальное значение (1..1000000 включительно)
  const count = length; // кол-во требуемых чисел

  let m = {};
  let a = [];
  for (let i = 0; i < count; ++i) {
    let r = Math.floor(Math.random() * (range - i));
    a.push((r in m ? m[r] : r) + 1);
    let l = range - i - 1;
    m[r] = l in m ? m[l] : l;
  }
  console.log(a);
  return a;
};
generateRandNumber(state.length).forEach((item) => {
  sliderItems.insertAdjacentHTML(
    'beforeend',
    sliderItemGenerator(
      state[item - 1].img,
      state[item - 1].describtion,
      state[item - 1].subtitle,
      state[item - 1].icon
    )
  );
});
if(window.screen.width === 1000) {
  sliderItems.style.right = '-1454px'
}
if(window.screen.width === 640) {
  sliderItems.style.right = '-1102px'
}
sliderArrowLeft.addEventListener('click', () => {
  const screenWidth = window.screen.width
  let temp = sliderItems.style.right;
  if(screenWidth <= 640) {
    if (temp <= '-1102px' || temp === '-1103px') {
      temp = '787px';
      sliderItems.style.right = temp;
    } else {
      sliderItems.style.right = `${eval(temp.slice(0, -2) + '-315')}px`;
    }
  }else if(screenWidth <= 1000) {
    if (temp === '-2423px') {
      temp = '-485px';
      sliderItems.style.right = temp;
    } else {
      sliderItems.style.right = `${eval(temp.slice(0, -2) + '-969')}px`;
    }
  }
  if(screenWidth > 1000) {
    let temp = sliderItems.style.right;
    if (temp === '-1189px') {
      temp = '1189px';
      sliderItems.style.right = temp;
    } else {
      sliderItems.style.right = '';
      sliderItems.style.right = temp + '-1189px';
    }
  }
 
  
});
sliderArrowRight.addEventListener('click', () => {
  const screenWidth = window.screen.width
  let temp = sliderItems.style.right;
  if(screenWidth <= 640) {
    if (temp === '787px' || temp === '788px') {
      temp = '-1103px';
      sliderItems.style.right = temp;
    } else {
      sliderItems.style.right = `${eval(temp.slice(0, -2) + '+315')}px`;
    }
   }else if(screenWidth <= 1000) {
    if (temp === '-485px') {
      temp = '-2423px';
      sliderItems.style.right = temp;
    } else {
      sliderItems.style.right = `${eval(temp.slice(0, -2) + '+969')}px`;
    }
   }
 if(screenWidth > 1000) {
  if (temp === '1189px') {
    temp = '-1189px';
    sliderItems.style.right = temp;
  } else {
    sliderItems.style.right = '';
    sliderItems.style.right = temp + '1189px';
  }
 }

 
});
if(window.screen.width === 1000) {
  testimonialsWrapper.style.right = '-1480px'
}


const inputRange = document.querySelector('.input_range_slider');
inputRange.addEventListener('change', function () {
  const screenWidth = window.screen.width
  if(screenWidth <= 1000) {
    testimonialsWrapper.style.right = '';
  testimonialsWrapper.style.right = `${-1480 + (this.value * 28)}px`;
    
  }else if (screenWidth > 1000) {
    testimonialsWrapper.style.right = '';
    testimonialsWrapper.style.right = `${this.value * 23.9}px`;
  }
  
});


