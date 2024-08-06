document.getElementById('togglePassword').addEventListener('click', function() {

    const password = document.getElementById('password');
    const passwordType = password.getAttribute('type');

    if (passwordType === 'password') {
        password.setAttribute('type', 'text');
        this.textContent = 'Hide';
    } else {
        password.setAttribute('type', 'password');
        this.textContent = 'Show';
    }
});
