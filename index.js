const cardsSection = document.querySelector('.section-cards')
const form = document.querySelector('.section-form')
const btnHeader = document.querySelector('.base-btn')
let arrCards = [ {img: './img/individual.jpeg', title: 'Индивидуальные занятия английским', price: 2500},
                 {img: './img/chinaclass.jpg', title: 'Индивидуальные занятия китайским', price: 2500},
                 {img: './img/изучение-китайского-в-группах.jpg', title: 'Групповые занятия', price: 1500}]

function render () {
    arrCards.forEach((card) => {
        cardsSection.innerHTML += `<div class="section-cards__card">
                                <div class="card-header">
                                    <img class="card-header__img" src=${card.img} alt="logo">
                                </div>
                                <div class="card-footer">
                                    <h3 class="card-footer__title">${card.title}</h3>
                                    <p class="card-footer__subtitle">Стоимость ${card.price} рублей</p>
                                    <button class="base-btn">Оставить заявку</button>
                                </div>
                            </div>`
    })
}
render()


function renderForm() {
    form.innerHTML = `<div class="container">
                        <form id="form" class="form" action="#">
                            <h3>Форма</h3>
                            <div class="form-row">
                                <div class="form-column">
                                   <input class="base-inpt base-inpt__margin" type="text" placeholder="Имя">
                                   <input class="base-inpt base-inpt__margin" type="text" placeholder="Фамилия">
                                   <input class="base-inpt base-inpt__margin" type="phone" placeholder="Телефон">
                                </div>
                                <div class="form-column">
                                   вфцвцфв
                                </div>
                            </div>
                            <button class="base-btn">Отправить</button>
                        </form>
                    </div>`
}

btnHeader.addEventListener('click', renderForm())







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


