// login.html
function validateForm(event) {
    event.preventDefault();
    const recaptcha = document.getElementById('g-recaptcha-response');
    const recaptchaError = document.getElementById('recaptcha-error');

    if (recaptcha && recaptcha.value === '') {
        recaptchaError.style.display = 'block';
    } else {
        recaptchaError.style.display = 'none';
        event.target.submit();
    }
}



// index.html
document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, {
        threshold: 0.5
    });

    document.querySelectorAll('.fade-in-section').forEach((section) => {
        observer.observe(section);
    });
    const featureContainers = document.querySelectorAll('.feature-container');

    featureContainers.forEach(container => {
        container.addEventListener('click', () => {
            const description = container.querySelector('.feature-description');
            description.style.opacity = description.style.opacity === '0' ? '1' : '0';
        });
    });
});

