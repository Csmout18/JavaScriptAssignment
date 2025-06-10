// --------------------------------------
// Function 1: Validate Email Format
// --------------------------------------

function validateEmail(email) {
  return email.includes("@") && email.includes(".");
}
console.log(validateEmail("client@example.com"));
console.log(validateEmail("invalid-email"));

// --------------------------------------
// Function 2: Random Photo Highlight
// --------------------------------------

const featuredPhotos = [
  "Wedding Couple at Sunset",
  "Baby First Birthday",
  "Graduation Celebration",
  "Scenic Landscape",
  "Corporate Headshot"
];

function getRandomPhotoHighlight() {
  const index = Math.floor(Math.random() * featuredPhotos.length);
  return featuredPhotos[index];
}
console.log(`Today's spotlight: ${getRandomPhotoHighlight()}`);

// --------------------------------------
// Function 3: Calculate Total Booking Price
// --------------------------------------

const selectedPrices = [150, 300, 100]; 

function getTotalBookingPrice() {
  return selectedPrices.reduce((total, price) => total + price, 0);
}
console.log(`Total Booking Cost: $${getTotalBookingPrice()}`);

// --------------------------------------
// Function 4: Store Client Feedback
// --------------------------------------

let clientFeedback = [];

function addClientFeedback(message) {
  clientFeedback.push(message);
  return clientFeedback;
}
console.log(addClientFeedback("Absolutely loved our photo session!"));
console.log(addClientFeedback("Great lighting and editing work!"));

// --------------------------------------
// Function 5: Format Photographer Bio
// --------------------------------------

function formatPhotographerBio(name, tagline) {
  return `${name} - "${tagline}"`;
}
console.log(formatPhotographerBio("Sarah Rivera", "Capturing emotions in every frame."));