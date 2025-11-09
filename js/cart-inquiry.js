// Cart Inquiry Form Functionality
document.addEventListener('DOMContentLoaded', function() {
    const enquiryForm = document.getElementById('enquiry-form');

    // Handle form submission
    if (enquiryForm) {
        enquiryForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form values
            const fullName = document.getElementById('full-name').value.trim();
            const companyName = document.getElementById('company-name').value.trim();
            const email = document.getElementById('email').value.trim();
            const address = document.getElementById('address').value.trim();

            // Basic validation
            if (!fullName || !companyName || !email || !address) {
                alert('Please fill in all fields.');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            // Collect form data
            const formData = {
                fullName: fullName,
                companyName: companyName,
                email: email,
                address: address,
                timestamp: new Date().toISOString()
            };

            // Log form data (for debugging)
            console.log('Enquiry Form Data:', formData);

            // Show success message
            alert('Enquiry sent successfully!');

            // Optional: Reset form after successful submission
            enquiryForm.reset();
        });
    }
});
