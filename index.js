const cardsSection = document.querySelector(".section-cards");
const form = document.querySelector(".section-form");
const btnHeader = document.querySelector(".btn-header-application");
const popUpLayout = document.querySelector("#myPop-up");
const popUpContent = document.querySelector(".pop-up-content");
const exitBtn = document.querySelector(".pop-up-exit");
let inptNameValue = "";
let inptSurnameValue = "";
let inptPhoneValue = "";

const error = {
  form: "Введите корретктные данные",
  request: "Ошибка при отправке данных",
};

let clients = [
  {
    name: "Vasya",
    surname: "Kopkarev",
    phone: "89150884359",
  },
  {
    name: "Anastasia",
    surname: "Krainova",
    phone: "89163397047",
  },
];

let arrCards = [
  {
    img: "./img/individual.jpeg",
    title: "Индивидуальные занятия английским",
    price: 2500,
  },
  {
    img: "./img/chinaclass.jpg",
    title: "Индивидуальные занятия китайским",
    price: 2500,
  },
  {
    img: "./img/изучение-китайского-в-группах.jpg",
    title: "Групповые занятия",
    price: 1500,
  },
];

function render() {
  arrCards.forEach((card) => {
    cardsSection.innerHTML += `<div class="section-cards__card">
                                <div class="card-header">
                                    <img class="card-header__img" src=${card.img} alt="logo">
                                </div>
                                <div class="card-footer">
                                    <h3 class="card-footer__title">${card.title}</h3>
                                    <p class="card-footer__subtitle">Стоимость ${card.price} рублей</p>
                                    <a class="base-btn-card base-btn" data-title='${card.title}' data-price=${card.price} href='#form'>Оставить заявку</a>
                                </div>
                            </div>`;
    document.querySelectorAll(".base-btn-card").forEach((cardBtn) => {
      cardBtn.addEventListener("click", handleCardBtn);
    });
  });
}
render();

function renderForm(title = "", price = "", flag = false) {
  form.innerHTML = `<div class="container">
                        <form id="form" class="form" action="#">
                            <h3>Форма</h3>
                            <div class="form-row">
                                <div class="form-column">
                                   <input class="base-inpt base-inpt__margin inpt-name" type="text" placeholder="Имя">
                                   <input class="base-inpt base-inpt__margin inpt-surname" type="text" placeholder="Фамилия">
                                   <input class="base-inpt base-inpt__margin inpt-phone" type="tel" id="phone" name="phone" placeholder="Телефон">
                                </div>
                                ${
                                  flag
                                    ? `<div class="form-column">
                                          <ul>
                                            <li>${title}</li>
                                            <li>${price}</li>
                                          </ul>
                                       </div>`
                                    : ""
                                }
                            </div>
                            <button class="base-btn base-btn-send">Отправить</button>
                        </form>
                    </div>`;
  const inptName = document.querySelector(".inpt-name");
  const inptSurname = document.querySelector(".inpt-surname");
  const inptPhone = document.querySelector(".inpt-phone");
  const btnSend = document.querySelector(".base-btn-send");
  btnSend.disabled = true;
  btnSend.style.pointerEvents = "none";
  btnSend.addEventListener("click", (e) => {
    e.preventDefault();
    send(flag, title, price);
  });

  inptName.addEventListener("input", (e) => {
    inptNameValue = e.target.value;
    btnDisablesOnOff(btnSend);
  });
  inptSurname.addEventListener("input", (e) => {
    inptSurnameValue = e.target.value;
    btnDisablesOnOff(btnSend);
  });
  inptPhone.addEventListener("input", (e) => {
    inptPhoneValue = e.target.value;
    btnDisablesOnOff(btnSend);
  });
}

function handleCardBtn(e) {
  let el = e.target;
  renderForm(el.dataset.title, el.dataset.price, true);
}

function btnDisablesOnOff(btn) {
  if (
    inptNameValue !== "" &&
    inptSurnameValue !== "" &&
    inptPhoneValue !== ""
  ) {
    btn.disabled = false;
    btn.style.pointerEvents = "auto";
  } else {
    btn.disabled = true;
    btn.style.pointerEvents = "none";
  }
}

function validationPhone(str) {
  if (str.length !== 10) return false;
  return Number(str) ? str : false;
}

function validationNameSurname(str) {
  let arr = str.split("");
  return arr.find((num) => Number(num)) ? false : str;
}
function popUpOnOff(text) {
  popUpLayout.classList.toggle("pop-up__active");
  popUpContent.innerHTML = `${text}`;
}
function check() {
  return (
    validationPhone(inptPhoneValue) &&
    validationNameSurname(inptNameValue) &&
    validationNameSurname(inptSurnameValue)
  );
}

// console.log(validationPhone('34343455'))
// console.log(validationNameSurname('MJNkmk'))

function send(flag, title, price) {
  if (check()) {
    if (flag) {
      let order = {
        name: inptNameValue,
        surname: inptSurnameValue,
        phone: inptPhoneValue,
        target: {
          targetTitle: title,
          targetPrice: price,
        },
      };
      console.log(order);
    } else {
      let call = {
        name: inptNameValue,
        surname: inptSurnameValue,
        phone: inptPhoneValue,
      };
      console.log(call);
    }
  } else {
    popUpOnOff(error.form);
  }
}

btnHeader.addEventListener("click", renderForm);

exitBtn.addEventListener("click", (e) => {
  if (e.target.classList.contains("pop-up-exit")) {
    popUpOnOff();
  }
  return;
});
popUpLayout.addEventListener("click", (e) => {
  if (e.target.classList.contains("pop-up-layout")) {
    popUpOnOff();
  }
  return;
});

// дз сделать валидацию телефона и валидация имени фамилии. Валидация во время создания инпутовю Перед присвиванием значения в поле

// new Promise((resolve, reject)=>{
//     setTimeout(()=> {resolve(12)}, 2000)
//     // reject()
// })
// .then((res)=>{
//      alert(res)
// })
// .catch(()=> {
//     alert('ne ok')
// })

// async function a () {
//     try {
//         let res = await new Promise((resolve, reject) =>{ setTimeout(()=> {resolve(12)}, 2000)})
//         alert(res)
//     } catch (e) {

//     }

// }

// 'https://jsonplaceholder.typicode.com/photos'

// async function b () {
//     try {
//         let response = await fetch('https://jsonplaceholder.typicode.com/photos')
//         let resFinal = await response.json()
//         console.log(resFinal)
//     } catch (e){
//         console.log('error')
//     }

// }

// b()

//дз переписать функцию валидацию имени фамилии через метод find. В попап верхний правый угол добавить крестик с помощью абсолютному позиционированию. Написать функцию управления попапом, функция должна манипулировать классами. Одна функция открывет , вторая закрывает.Подумать как упростить логику функции send
//ДЗ сделать что бы не было пустого места под формой, контакты - якорь. Футер доверстать и добавить шрифт