const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // جلوگیری از ارسال فرم پیش‌فرض

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        formMessage.textContent = 'لطفاً همه فیلدها را پر کنید.';
        formMessage.style.color = 'red';
        return;
    }

    // بررسی ساده ایمیل
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
        formMessage.textContent = 'ایمیل وارد شده صحیح نیست.';
        formMessage.style.color = 'red';
        return;
    }

    formMessage.textContent = 'پیام شما با موفقیت ارسال شد!';
    formMessage.style.color = 'green';
    form.reset();
});
