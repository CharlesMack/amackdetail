        // Particle animation
        function createParticles() {
            const particlesContainer = document.querySelector('.particles');
            if (!particlesContainer) return;
            
            for (let i = 0; i < 30; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 8 + 's';
                particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
                particlesContainer.appendChild(particle);
            }
        }

        // Scroll animations
        function handleScrollAnimations() {
            const elements = document.querySelectorAll('.fade-in');
            elements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 150;
                
                if (elementTop < window.innerHeight - elementVisible) {
                    element.classList.add('visible');
                }
            });
        }

        // Service booking function
        function openBookingModal(serviceName) {
            const modal = document.getElementById('bookingModal');
            const modalTitle = document.getElementById('modalTitle');
            const emailLink = document.getElementById('emailLink');
            
            modalTitle.textContent = `Book ${serviceName}`;
            
            const emailBody = encodeURIComponent(`Hi Amack Mobile!

I'm interested in booking your ${serviceName} service at my location.

Please contact me to schedule a consultation and provide detailed information about the paint correction process for my vehicle.

Thank you for your expertise!`);
            
            emailLink.href = `mailto:quote@amackmobile.com?subject=${encodeURIComponent(`Paint Correction Service - ${serviceName}`)}&body=${emailBody}`;
            
            modal.style.display = 'block';
        }

        function closeModal() {
            const modal = document.getElementById('bookingModal');
            modal.style.display = 'none';
        }

        // Close modal when clicking outside
        window.onclick = function(event) {
            const modal = document.getElementById('bookingModal');
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        }

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Mobile menu toggle
        document.querySelector('.mobile-menu').addEventListener('click', function() {
            const navLinks = document.querySelector('.nav-links');
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        });

        // Initialize animations
        window.addEventListener('load', () => {
            createParticles();
            handleScrollAnimations();
        });

        window.addEventListener('scroll', handleScrollAnimations);

        // Navigation background change on scroll
        window.addEventListener('scroll', () => {
            const nav = document.querySelector('.nav');
            if (window.scrollY > 100) {
                nav.style.background = 'rgba(10, 10, 10, 0.98)';
            } else {
                nav.style.background = 'rgba(10, 10, 10, 0.95)';
            }
        });
        
           
    
        // Particle animation
        function createParticles() {
            const particlesContainer = document.querySelector('.particles');
            for (let i = 0; i < 50; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 6 + 's';
                particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
                particlesContainer.appendChild(particle);
            }
        }

        // Scroll animations
        function handleScrollAnimations() {
            const elements = document.querySelectorAll('.fade-in');
            elements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 150;
                
                if (elementTop < window.innerHeight - elementVisible) {
                    element.classList.add('visible');
                }
            });
        }

        // Service booking function
        function openBookingModal(serviceName) {
            const modal = document.getElementById('bookingModal');
            const modalTitle = document.getElementById('modalTitle');
            const emailLink = document.getElementById('emailLink');
            
            modalTitle.textContent = `Book ${serviceName}`;
            
            const emailBody = encodeURIComponent(`Hello AMACK Detail,

I'm interested in booking a ${serviceName} service. Please contact me to schedule an appointment and provide pricing details.

Thank you!`);
            
            emailLink.href = `mailto:quote@amackmobile.com?subject=${encodeURIComponent(`${serviceName} Booking Request`)}&body=${emailBody}`;
            
            modal.style.display = 'block';
        }

        function closeModal() {
            const modal = document.getElementById('bookingModal1');
            modal.style.display = 'none';
        }

        // Close modal when clicking outside
        window.onclick = function(event) {
            const modal = document.getElementById('bookingModal1');
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        }

        // Quote form submission
        function submitQuote(event) {
            event.preventDefault();
            
            const formData = new FormData(event.target);
            const data = {};
            
            // Get all form data
            for (let [key, value] of formData.entries()) {
                if (key === 'services') {
                    if (!data.services) data.services = [];
                    data.services.push(value);
                } else {
                    data[key] = value;
                }
            }
            
            // Get all selected services
            const serviceCheckboxes = document.querySelectorAll('input[name="services"]:checked');
            const selectedServices = Array.from(serviceCheckboxes).map(cb => cb.value);
            
            // Create email content
            const emailSubject = encodeURIComponent('Free Quote Request - AMACK Detail');
            const emailBody = encodeURIComponent(`NEW QUOTE REQUEST

Customer Information:
Name: ${data.firstName} ${data.lastName}
Phone: ${data.phone}
Email: ${data.email}

Address:
${data.address1}
${data.address2 ? data.address2 : ''}
${data.city}, ${data.state} ${data.postalCode}

${data.company ? `Company: ${data.company}` : ''}
${data.vehicle ? `Vehicle: ${data.vehicle}` : ''}
${data.licensePlate ? `License Plate: ${data.licensePlate}` : ''}

Services Interested In:
${selectedServices.length > 0 ? selectedServices.join(', ') : 'None selected'}

How they heard about us: ${data.hearAbout}
${data.preferredDate ? `Preferred Date/Time: ${data.preferredDate}` : ''}

Additional Comments:
${data.comments || 'None'}

Please contact this customer promptly for their free quote!`);

            // Create text message content
            const textBody = encodeURIComponent(`New Quote Request from ${data.firstName} ${data.lastName}. Phone: ${data.phone}. Services: ${selectedServices.join(', ')}. Please follow up!`);
            
            // Show options modal for submission
            showSubmissionOptions(emailSubject, emailBody, textBody, data.phone);
        }

        function showSubmissionOptions(emailSubject, emailBody, textBody, phone) {
            const modal = document.getElementById('bookingModal1');
            const modalContent = modal.querySelector('.modal-content');
            
            modalContent.innerHTML = `
                <span class="close" onclick="closeModal()">&times;</span>
                <h2 style="color: #00d4ff; text-align: center; margin-bottom: 2rem;">Quote Submitted!</h2>
                <p style="text-align: center; margin-bottom: 2rem;">Your quote request has been prepared. Choose how you'd like us to receive it:</p>
                
                <a href="mailto:quote@amackmobile.com?subject=${emailSubject}&body=${emailBody}" class="contact-option">
                    ✉️ Send via Email
                </a>
                
                <a href="sms:330-715-0796?body=${textBody}" class="contact-option">
                    💬 Send via Text
                </a>
                
                <a href="tel:330-715-0796" class="contact-option">
                    📞 Call to Discuss: (330) 715-0796
                </a>
                
                <div style="text-align: center; margin-top: 2rem; padding: 1rem; background: rgba(0, 212, 255, 0.1); border-radius: 10px;">
                    <p style="color: #00d4ff; font-weight: bold;">We'll contact you within 24 hours!</p>
                    <p style="font-size: 0.9rem; opacity: 0.8;">Phone: (330) 715-0796 | Email: quote@amackmobile.com</p>
                </div>
            `;
            
            modal.style.display = 'block';
            
            // Reset form
            document.getElementById('quoteForm').reset();
        }
