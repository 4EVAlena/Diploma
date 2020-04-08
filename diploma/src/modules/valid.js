const valid = () => {
    const inputs = document.querySelectorAll('input');

    const validate = target => {
        const placeholder = target.getAttribute('placeholder');
        if (placeholder === '+7(___)___-__-__') {
            target.value = target.value.replace(/[^\+0-9]+$/, '');
        } else if (placeholder === 'Ваше имя' || 
                    placeholder === 'Введите свой вопрос') {
            target.value = target.value.replace(/[^А-Яа-я\s.,]/g, '');
        } else if (target.matches('#distance')) {
            target.value = target.value.replace(/[^0-9\.,]+$/, '');
        }
    };

    inputs.forEach(input => {
        input.addEventListener('input', event => {
            const target = event.target;
            validate(target);
        });
    });
};

export default valid;