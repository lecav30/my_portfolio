bars = document.querySelector('.bars');
bars.addEventListener('click', () => {
    navBar = document.querySelector('.nav-bar');
    navBar.classList.toggle('active');
});

backend = document.querySelector('#backend');
backend.addEventListener('click', () => {
    backend.classList.add('remove-hover');

    techonologies = document.querySelector('#backend-techonologies');
    techonologies.classList.toggle('hidden');

    description = document.querySelector('#backend-description');
    description.classList.toggle('hidden');

    setTimeout(() => backend.classList.remove('remove-hover'), 1000);
});

frontend = document.querySelector('#frontend');
frontend.addEventListener('click', () => {
    frontend.classList.add('remove-hover');

    techonologies = document.querySelector('#frontend-techonologies');
    techonologies.classList.toggle('hidden');

    description = document.querySelector('#frontend-description');
    description.classList.toggle('hidden');

    setTimeout(() => frontend.classList.remove('remove-hover'), 1000);
});

mobile = document.querySelector('#mobile');
mobile.addEventListener('click', () => {
    mobile.classList.add('remove-hover');

    techonologies = document.querySelector('#mobile-techonologies');
    techonologies.classList.toggle('hidden');

    description = document.querySelector('#mobile-description');
    description.classList.toggle('hidden');

    setTimeout(() => mobile.classList.remove('remove-hover'), 1000);
});
