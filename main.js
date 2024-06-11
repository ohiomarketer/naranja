document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('.inputs__container input');

    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            const label = this.previousElementSibling;
            const img = label.querySelector('img');
            if (img) {
                img.classList.add('focused-image');
            }
        });

        input.addEventListener('blur', function() {
            const label = this.previousElementSibling;
            const img = label.querySelector('img');
            if (img) {
                img.classList.remove('focused-image');
            }
        });
    });
});