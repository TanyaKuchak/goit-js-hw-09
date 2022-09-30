import { Notify } from 'notiflix/build/notiflix-notify-aio';

function createPromise(position, delay) {
  const data = { position, delay };
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
       
    setTimeout(() => {
      if (setTimeout) {
        resolve(data);
      } else {
        reject(data);
  }
    },delay)
  })
}
const form = document.querySelector('.form');
form.addEventListener('submit', onSubmitBtnClick);

function onSubmitBtnClick(event) {
   event.preventDefault();
  const {
    elements: { delay, step, amount },
  } = event.currentTarget;

  let delayValue = Number(delay.value);
  const stepValue = Number(step.value);
  const amountValue = Number(amount.value);

  for (let position = 1; position <= amountValue; position += 1) {
    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
       Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      })
    delayValue += stepValue
  }
}




// const onSuccess = value => {
//   console.log('Success!', value);
// };
// const onError =value => {
//   console.log('Error!', value);
// };
// let number = null;
// const isSuccess = true;
// const promise = new Promise((resolve, reject) => {
//   if (isSuccess) {
//     resolve(21);
//     setTimeout(() => {
//       console.log('in timeout');
//       resolve(55);
//     },1000)
//   } else {
//     reject(34);
//   }
// });
// promise.then(onSuccess).catch(onError).finally(data => {
//   console.log('finaly');
// });

// const promise = new Promise((resolve, reject) => {
//   resolve('1');
// });
// promise.then(data => {
//   console.log(data);
//   return data;
// })
//   .then(data => {
//     console.log(data);
//     if (!data) {
//       throw new Error('Error in then!');
//     }
//     return '2';
//   })
//   .then(data => {
//     console.log(data);
//     return '2';
//   })
//   .catch(error => {
//     console.log(error.message);
//   });



