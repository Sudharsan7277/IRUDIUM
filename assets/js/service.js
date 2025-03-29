
        // Additional animations for new sections
        const animateFeatures = () => {
            const features = document.querySelectorAll('.feature-card');
            const steps = document.querySelectorAll('.step');
            const advantages = document.querySelectorAll('.advantage-card');
            
            features.forEach((feature, index) => {
                const position = feature.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.3;
                
                if(position < screenPosition) {
                    feature.style.opacity = '1';
                    feature.style.transform = 'translateY(0)';
                    feature.style.transitionDelay = `${index * 0.1}s`;
                }
            });
            
            steps.forEach((step, index) => {
                const position = step.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.3;
                
                if(position < screenPosition) {
                    step.style.opacity = '1';
                    step.style.transform = 'translateX(0)';
                    step.style.transitionDelay = `${index * 0.15}s`;
                }
            });
            
            advantages.forEach((advantage, index) => {
                const position = advantage.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.3;
                
                if(position < screenPosition) {
                    advantage.style.opacity = '1';
                    advantage.style.transform = 'translateY(0)';
                    advantage.style.transitionDelay = `${index * 0.1}s`;
                }
            });
        };
        
        // Set initial state
        document.querySelectorAll('.feature-card, .step, .advantage-card').forEach(el => {
            el.style.opacity = '0';
            if(el.classList.contains('step')) {
                el.style.transform = 'translateX(-50px)';
            } else {
                el.style.transform = 'translateY(30px)';
            }
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        });
        
        // Add scroll event listener
        window.addEventListener('scroll', animateFeatures);
        
        // Trigger once on load
        window.addEventListener('load', animateFeatures);
    // Animate elements on scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.service-card, .tech-item, .process-step');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if(elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state
    document.querySelectorAll('.service-card, .tech-item, .process-step').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Add scroll event listener
    window.addEventListener('scroll', animateOnScroll);
    
    // Trigger once on load
    window.addEventListener('load', animateOnScroll);
    
    // Glitch effect on hover for service cards
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.querySelector('.service-icon').style.animation = 'glitch-effect 0.5s';
        });
        
        card.addEventListener('mouseleave', () => {
            card.querySelector('.service-icon').style.animation = '';
        });
    });
// Get the hamburger and mobile menu elements
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

// Toggle the mobile menu when the hamburger is clicked
hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('show');
});
