document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Live stream video embed logic
    const videoContainer = document.getElementById('video-container');
    const offlineMessage = document.getElementById('offlineMessage');
    
    // Check if an iframe (Facebook video) is present in video-container
    const iframe = videoContainer.querySelector('iframe');

    if (iframe && iframe.src && iframe.src !== "" && iframe.src !== "about:blank") {
        videoContainer.classList.remove('hidden');
        offlineMessage.classList.add('hidden');
    } else {
        videoContainer.classList.add('hidden');
        offlineMessage.classList.remove('hidden');
        // Set dynamic content for offlineMessage
        offlineMessage.innerHTML = `
            <p>Actualmente no estamos transmitiendo en vivo.</p>
            <p>Visita nuestra página de <a href="https://www.facebook.com/sigsigenvivo" target="_blank" rel="noopener noreferrer">Facebook Sigsig En Vivo</a> para ver horarios y transmisiones anteriores.</p>
            <small>
                Si eres el administrador: asegúrate de haber insertado correctamente el código <code>&lt;iframe&gt;</code> de tu transmisión en vivo de Facebook dentro del div con ID <code>video-container</code> en el archivo HTML.
            </small>
        `;
    }

    // Mobile menu toggle
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const iconBars = '<i class="fas fa-bars"></i>';
    const iconTimes = '<i class="fas fa-times"></i>';

    if (menuToggle && navMenu) {
        menuToggle.innerHTML = iconBars; // Set initial icon

        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            const isExpanded = navMenu.classList.contains('active');
            menuToggle.setAttribute('aria-expanded', isExpanded);
            
            if (isExpanded) {
                menuToggle.innerHTML = iconTimes;
            } else {
                menuToggle.innerHTML = iconBars;
            }
        });
    }

    // FAQ Accordion - Updated logic
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(button => {
        button.addEventListener('click', () => {
            const faqItem = button.parentElement; // This is the .faq div
            const answer = button.nextElementSibling; // This is .faq-answer
            const icon = button.querySelector('.faq-icon');

            faqItem.classList.toggle('open'); // Use .open class on parent .faq
            const isOpen = faqItem.classList.contains('open');

            button.setAttribute('aria-expanded', isOpen);
            
            if (isOpen) {
                answer.style.maxHeight = answer.scrollHeight + "px";
                if (icon) { 
                    icon.classList.remove('fa-chevron-down');
                    icon.classList.add('fa-chevron-up');
                }
            } else {
                answer.style.maxHeight = null;
                if (icon) { 
                    icon.classList.remove('fa-chevron-up');
                    icon.classList.add('fa-chevron-down');
                }
            }
        });
    });
});

let lastScrollTop = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;

    // Aplicar clase "scrolled"
    if (scrollTop > 10) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

    // Ocultar al bajar, mostrar al subir
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        navbar.style.top = "-100px"; // Oculta
    } else {
        navbar.style.top = "0px"; // Muestra
    }

    lastScrollTop = scrollTop;
});
