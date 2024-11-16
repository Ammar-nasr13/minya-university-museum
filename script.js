

// الكودالخاصبالاسهم تغيير الصور خلال مدة معينة من الثواني
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides; // Loop back to the first slide
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides; // Loop back to the last slide
    showSlide(currentSlide);
}

// Automatic slide change every 2 seconds
setInterval(nextSlide, 3000);

// Event listeners for manual navigation
document.getElementById('arrow-left').addEventListener('click', prevSlide);
document.getElementById('arrow-right').addEventListener('click', nextSlide);

// Initialize the first slide
showSlide(currentSlide);

// Initialize the first slide
showSlide(currentSlide);


document.addEventListener("DOMContentLoaded", function () {
    const caption = document.getElementById('caption');
    const text = caption.textContent;
    caption.textContent = ''; // افرغ النص للبدء في الكتابة التدريجية
    let index = 0;
    let isWriting = true;

    function typeWriter() {
        if (isWriting) {
            if (index < text.length) {
                caption.textContent += text.charAt(index);
                index++;
                setTimeout(typeWriter, 100); // التحكم في سرعة الكتابة (100ms لكل حرف)
            } else {
                isWriting = false;
                setTimeout(() => {
                    isWriting = true;
                    index = 0;
                    caption.textContent = ''; // افرغ النص لإعادة الكتابة
                    typeWriter();
                }, 3000); // مدة الثبات بعد الكتابة (2000ms = ثانيتين)
            }
        }
    }

    typeWriter();
});


