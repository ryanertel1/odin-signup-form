const pass = document.querySelector('.pass');
const passConfirm = document.querySelector('.passConfirm');
const passCheck = document.querySelector('#passCheck');

pass.addEventListener('keyup', (e) => {
    checkPassSame(e);
});
passConfirm.addEventListener('keyup', (e) => {
    checkPassSame(e);
});

function checkPassSame(event) {
    if (pass.value === passConfirm.value) {
        passCheck.classList.add('pass-match');
        pass.classList.remove('error');
        passConfirm.classList.remove('error');
    } else {
        passCheck.classList.remove('pass-match');
        pass.classList.add('error');
        passConfirm.classList.add('error');
    }
}