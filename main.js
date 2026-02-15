const validInput = () =>{
    if(document.querySelector('#email').value.length < 10 || document.querySelector('#password').value.length <6 ){
        document.querySelector('#btn').style.background = '';
        document.querySelector('.msg').innerText = 'Invalid Characters';
    }else {
        document.querySelector('#btn').style.background = 'blue';
        document.querySelector('.msg').innerText = '';

    }
}
const emailValidation = () =>{
    if(document.querySelector('#email').value.length < 10){
        document.querySelector('.btn').style.background = '';
        document.querySelector('.msg').innerText = 'Invalid Characters';
    }else {
        document.querySelector('.btn').style.background = 'blue';
        document.querySelector('.msg').innerText = '';

    }
}
const registerValidation = () =>{
    if(document.querySelector('#email').value.length < 10 || document.querySelector('#password').value.length <6 ){
        document.querySelector('#btn').style.background = '';
        document.querySelector('.msg').innerText = 'Invalid Characters';
    }else {
        document.querySelector('#btn').style.background = 'blue';
        document.querySelector('.msg').innerText = '';

    }
}
