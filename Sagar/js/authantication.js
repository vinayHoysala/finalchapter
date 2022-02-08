function checkUser() {
    let user = document.getElementById('user');
    if ((user.value >= 65 && user.value <= 90) || (user.value >= 97 && user.value <= 122)) {
        user.style.border = '2px solid green';
    }
    else {
        user.style.border = '2px solid red';
        user.value='';
        // user.focus();
    }
}
function validation() {
    let sBtn = document.getElementById('sBtn');
    sBtn.value = 'Please Wait...';
    sBtn.style.backgroundColor = rgb(192, 127, 5);
}