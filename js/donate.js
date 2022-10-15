const burgerButton = document.querySelector('.burger-line');
const burgerWrapper = document.querySelector('.burger__wrapper');
const input = document.querySelector('.input-range');

const burgerActive = () => {
  burgerButton.classList.toggle('active-burger');
  burgerWrapper.classList.toggle('burger__wrapper__active');
  document.querySelector('.grey__bg').classList.toggle('grey__bg-active');
  document.querySelectorAll('.burger__link').forEach((item) => {
    item.classList.toggle('burger__link__active');
  });
};

const updateInput = () => {
  const inputs = document.querySelectorAll('.value__item');
  inputs.forEach((item) => {
    if (item.classList.contains('active')) {
      item.classList.remove('active');
    }
  });
};

const checkActiveItem = (values) => {
  document.querySelectorAll('.value__item').forEach((item) => {
    if (item.innerHTML.trim() === `$${values}`) {
      item.classList.toggle('active');
    }
  });
};

burgerButton.addEventListener('click', () => {
  burgerActive();
});
document.querySelector('.grey__bg').addEventListener('click', () => {
  burgerActive();
});
console.log(input);


const screenWidth = window.screen.width
if(screenWidth <= 320) {
  input.addEventListener('change', (e) => {
    console.log(e.target.value);
    if (e.target.value < 816) {
      document.querySelector('.form__input-number').value = 25;
      updateInput();
      checkActiveItem(25);
    } else if (e.target.value > 816 && e.target.value < 2215) {
      document.querySelector('.form__input-number').value = 50;
      updateInput();
      checkActiveItem(50);
    } else if (e.target.value > 2215 && e.target.value < 3521) {
      document.querySelector('.form__input-number').value = 100;
      updateInput();
      checkActiveItem(100);
    } else if (e.target.value > 3521 && e.target.value < 4643) {
      document.querySelector('.form__input-number').value = 250;
      updateInput();
      checkActiveItem(250);
    } else if (e.target.value > 4643 ) {
      document.querySelector('.form__input-number').value = 500;
      updateInput();
      checkActiveItem(500);
    } 
  });
  
  document.querySelector('.form__input-number').addEventListener('input', (e) => {
    input.value = e.target.value;
    if (e.target.value < 320) {
      updateInput();
      checkActiveItem(25);
    } else if (e.target.value > 320 && e.target.value < 1058) {
      updateInput();
      checkActiveItem(50);
    } else if (e.target.value > 1058 && e.target.value < 1753) {
      updateInput();
      checkActiveItem(100);
    } else if (e.target.value > 1753 && e.target.value < 2500) {
      updateInput();
      checkActiveItem(250);
    } else if (e.target.value > 2500 && e.target.value < 3200) {
      updateInput();
      checkActiveItem(500);
    } 
  });
}else if(screenWidth <= 640){
  console.log('widht: 640px')
  input.addEventListener('change', (e) => {
    console.log(e.target.value);
    if (e.target.value < 733) {
      document.querySelector('.form__input-number').value = 25;
      updateInput();
      checkActiveItem(25);
    } else if (e.target.value > 733 && e.target.value < 1813) {
      document.querySelector('.form__input-number').value = 50;
      updateInput();
      checkActiveItem(50);
    } else if (e.target.value > 1813 && e.target.value < 3056) {
      document.querySelector('.form__input-number').value = 100;
      updateInput();
      checkActiveItem(100);
    } else if (e.target.value > 3056 && e.target.value < 4269) {
      document.querySelector('.form__input-number').value = 250;
      updateInput();
      checkActiveItem(250);
    } else if (e.target.value > 4269 ) {
      document.querySelector('.form__input-number').value = 500;
      updateInput();
      checkActiveItem(500);
    } 
  });
  
  document.querySelector('.form__input-number').addEventListener('input', (e) => {
    input.value = e.target.value;
    if (e.target.value < 320) {
      updateInput();
      checkActiveItem(25);
    } else if (e.target.value > 320 && e.target.value < 1058) {
      updateInput();
      checkActiveItem(50);
    } else if (e.target.value > 1058 && e.target.value < 1753) {
      updateInput();
      checkActiveItem(100);
    } else if (e.target.value > 1753 && e.target.value < 2500) {
      updateInput();
      checkActiveItem(250);
    } else if (e.target.value > 2500 && e.target.value < 3200) {
      updateInput();
      checkActiveItem(500);
    } else if (e.target.value > 3200 && e.target.value < 3885) {
      updateInput();
      checkActiveItem(1000);
    } else if (e.target.value > 3885 && e.target.value < 4567) {
      updateInput();
      checkActiveItem(2000);
    } else if (e.target.value > 4567) {
      updateInput();
      checkActiveItem(5000);
    }
  });
  
}else if(screenWidth <= 1000) {
  input.addEventListener('change', (e) => {
    console.log(e.target.value);
    if (e.target.value < 484) {
      document.querySelector('.form__input-number').value = 25;
      updateInput();
      checkActiveItem(25);
    } else if (e.target.value > 484 && e.target.value < 1266) {
      document.querySelector('.form__input-number').value = 50;
      updateInput();
      checkActiveItem(50);
    } else if (e.target.value > 1266 && e.target.value < 2120) {
      document.querySelector('.form__input-number').value = 100;
      updateInput();
      checkActiveItem(100);
    } else if (e.target.value > 2120 && e.target.value < 2948) {
      document.querySelector('.form__input-number').value = 250;
      updateInput();
      checkActiveItem(250);
    } else if (e.target.value > 2948 && e.target.value < 3775) {
      document.querySelector('.form__input-number').value = 500;
      updateInput();
      checkActiveItem(500);
    } else if (e.target.value > 3775 && e.target.value < 4631) {
      document.querySelector('.form__input-number').value = 1000;
      updateInput();
      checkActiveItem(1000);
    } else if (e.target.value > 4631 ) {
      document.querySelector('.form__input-number').value = 2000;
      updateInput();
      checkActiveItem(2000);
    }
  });
  
  document.querySelector('.form__input-number').addEventListener('input', (e) => {
    input.value = e.target.value;
    if (e.target.value < 320) {
      updateInput();
      checkActiveItem(25);
    } else if (e.target.value > 320 && e.target.value < 1058) {
      updateInput();
      checkActiveItem(50);
    } else if (e.target.value > 1058 && e.target.value < 1753) {
      updateInput();
      checkActiveItem(100);
    } else if (e.target.value > 1753 && e.target.value < 2500) {
      updateInput();
      checkActiveItem(250);
    } else if (e.target.value > 2500 && e.target.value < 3200) {
      updateInput();
      checkActiveItem(500);
    } else if (e.target.value > 3200 && e.target.value < 3885) {
      updateInput();
      checkActiveItem(1000);
    } else if (e.target.value > 3885 && e.target.value < 4567) {
      updateInput();
      checkActiveItem(2000);
    } else if (e.target.value > 4567) {
      updateInput();
      checkActiveItem(2000);
    }
  });
  
}else if(screenWidth > 1000){
  input.addEventListener('change', (e) => {
    console.log(e.target.value);
    if (e.target.value < 320) {
      document.querySelector('.form__input-number').value = 25;
      updateInput();
      checkActiveItem(25);
    } else if (e.target.value > 320 && e.target.value < 1058) {
      document.querySelector('.form__input-number').value = 50;
      updateInput();
      checkActiveItem(50);
    } else if (e.target.value > 1058 && e.target.value < 1753) {
      document.querySelector('.form__input-number').value = 100;
      updateInput();
      checkActiveItem(100);
    } else if (e.target.value > 1753 && e.target.value < 2500) {
      document.querySelector('.form__input-number').value = 250;
      updateInput();
      checkActiveItem(250);
    } else if (e.target.value > 2500 && e.target.value < 3200) {
      document.querySelector('.form__input-number').value = 500;
      updateInput();
      checkActiveItem(500);
    } else if (e.target.value > 3200 && e.target.value < 3885) {
      document.querySelector('.form__input-number').value = 1000;
      updateInput();
      checkActiveItem(1000);
    } else if (e.target.value > 3885 && e.target.value < 4567) {
      document.querySelector('.form__input-number').value = 2000;
      updateInput();
      checkActiveItem(2000);
    } else if (e.target.value > 4567) {
      document.querySelector('.form__input-number').value = 5000;
      updateInput();
      checkActiveItem(5000);
    }
  });
  
  document.querySelector('.form__input-number').addEventListener('input', (e) => {
    input.value = e.target.value;
    if (e.target.value < 320) {
      updateInput();
      checkActiveItem(25);
    } else if (e.target.value > 320 && e.target.value < 1058) {
      updateInput();
      checkActiveItem(50);
    } else if (e.target.value > 1058 && e.target.value < 1753) {
      updateInput();
      checkActiveItem(100);
    } else if (e.target.value > 1753 && e.target.value < 2500) {
      updateInput();
      checkActiveItem(250);
    } else if (e.target.value > 2500 && e.target.value < 3200) {
      updateInput();
      checkActiveItem(500);
    } else if (e.target.value > 3200 && e.target.value < 3885) {
      updateInput();
      checkActiveItem(1000);
    } else if (e.target.value > 3885 && e.target.value < 4567) {
      updateInput();
      checkActiveItem(2000);
    } else if (e.target.value > 4567) {
      updateInput();
      checkActiveItem(5000);
    }
  });
}

else if(screenWidth > 1000){
  input.addEventListener('change', (e) => {
    console.log(e.target.value);
    if (e.target.value < 320) {
      document.querySelector('.form__input-number').value = 25;
      updateInput();
      checkActiveItem(25);
    } else if (e.target.value > 320 && e.target.value < 1058) {
      document.querySelector('.form__input-number').value = 50;
      updateInput();
      checkActiveItem(50);
    } else if (e.target.value > 1058 && e.target.value < 1753) {
      document.querySelector('.form__input-number').value = 100;
      updateInput();
      checkActiveItem(100);
    } else if (e.target.value > 1753 && e.target.value < 2500) {
      document.querySelector('.form__input-number').value = 250;
      updateInput();
      checkActiveItem(250);
    } else if (e.target.value > 2500 && e.target.value < 3200) {
      document.querySelector('.form__input-number').value = 500;
      updateInput();
      checkActiveItem(500);
    } else if (e.target.value > 3200 && e.target.value < 3885) {
      document.querySelector('.form__input-number').value = 1000;
      updateInput();
      checkActiveItem(1000);
    } else if (e.target.value > 3885 && e.target.value < 4567) {
      document.querySelector('.form__input-number').value = 2000;
      updateInput();
      checkActiveItem(2000);
    } else if (e.target.value > 4567) {
      document.querySelector('.form__input-number').value = 5000;
      updateInput();
      checkActiveItem(5000);
    }
  });
  
  document.querySelector('.form__input-number').addEventListener('input', (e) => {
    input.value = e.target.value;
    if (e.target.value < 320) {
      updateInput();
      checkActiveItem(25);
    } else if (e.target.value > 320 && e.target.value < 1058) {
      updateInput();
      checkActiveItem(50);
    } else if (e.target.value > 1058 && e.target.value < 1753) {
      updateInput();
      checkActiveItem(100);
    } else if (e.target.value > 1753 && e.target.value < 2500) {
      updateInput();
      checkActiveItem(250);
    } else if (e.target.value > 2500 && e.target.value < 3200) {
      updateInput();
      checkActiveItem(500);
    } else if (e.target.value > 3200 && e.target.value < 3885) {
      updateInput();
      checkActiveItem(1000);
    } else if (e.target.value > 3885 && e.target.value < 4567) {
      updateInput();
      checkActiveItem(2000);
    } else if (e.target.value > 4567) {
      updateInput();
      checkActiveItem(5000);
    }
  });
}


