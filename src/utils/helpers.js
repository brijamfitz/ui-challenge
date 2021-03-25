/***** These helper functions simulate server requests *****/

export async function fakeSignIn({ email, password }) {
  const bodyEl = document.querySelector('body');

  bodyEl.classList.add('_request-active');

  const signInPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === 'admin@email.com' && password === 'pass') {
        resolve();
      } else {
        reject();
      }

      bodyEl.classList.remove('_request-active');
    }, 2000);
  });

  return signInPromise;
}

export async function resetPassword({email}) {
  const bodyEl = document.querySelector('body');

  bodyEl.classList.add('_request-active');

  const resetPasswordPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (validateEmail(email)) {
        resolve();
      } else {
        reject();
      }

      bodyEl.classList.remove('_request-active');
    }, 2000);
  });

  return resetPasswordPromise;
}

/***** Check email string *****/

export function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;

  return re.test(email);
}