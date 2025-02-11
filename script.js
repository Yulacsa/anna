let heart = document.getElementById('heart')
let tap = document.getElementById('tap')
let i = document.getElementById('i')
let footer = document.getElementById('footer')



heart.addEventListener('click', function () {
    tap.style.display = 'none'; // Ховаємо tap

    // Затримка на 0.5 секунди перед початком змін
    setTimeout(() => {
        let count = 0; // Лічильник для кількості циклів
        let interval = setInterval(() => {
            if (count < 6) {
                // Перша зміна: збільшення
                if (count % 2 === 0) {
                    heart.style.width = '99%';
                    heart.style.height = '100%';
                }
                // Друга зміна: зменшення
                else {
                    heart.style.width = '95%';
                    heart.style.height = '90%';
                }

                count++;
            } else {
                clearInterval(interval);
                heart.style.display = 'none'; // Зникнення після 4 змін
                i.style.display = "flex"
                footer.style.display = "flex"
                i.style.width = '85%';
                i.style.height = '100%';
            }
        }, 500);
    }, 600); // Затримка 0.5 с перед початком змін


});


