  VisionLens Photography Website Project Overview

VisionLens is a fictional photography portfolio website designed to emulate a clean, modern, and responsive design using Bootstrap. The goal was to showcase photography services, highlight visual content, and simulate interactivity with JavaScript functions.

This project includes a homepage, hero section, service cards, image carousel, contact form, pricing table, and responsive navigation.

---

 Bootstrap Components Used

This project uses the following **Bootstrap components** to enhance structure and user experience:

- **Navbar**: A responsive top navigation bar with collapsible links for smaller screens.
- **Cards**: Three cards display different photography services (Weddings, Portraits, Events).
- **Carousel**: A rotating image gallery to highlight featured photos.
- **Table**: A structured price comparison for different service packages.
- **Modal**: A thank-you pop-up message after form submission.
- **Form Controls**: Styled and responsive contact form with `text` and `email` inputs.

 JavaScript Functions

1. **`validateEmail(email)`**
   - Validates whether an email string includes "@" and "."
   - Useful for form submission validation before sending data.

2. **`getRandomPhotoHighlight()`**
   - Returns a random string from a list of photo titles.
   - Could be used to dynamically update a “Featured Image” section on page load.

3. **`getTotalBookingPrice()`**
   - Calculates the total from an array of selected package prices.
   - Future use: live price updates as users select different services or add-ons.

4. **`addClientFeedback(message)`**
   - Adds a message to the feedback array.
   - Could be connected to a testimonial section or stored for admin viewing.

5. **`formatPhotographerBio(name, tagline)`**
   - Combines name and tagline into a styled string.
   - Potential use for dynamically generating staff profiles or rotating bios.
