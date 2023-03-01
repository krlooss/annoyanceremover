// Remove newsletter pop-ups
const newsletterPopups = document.querySelectorAll('.newsletter-popup');
newsletterPopups.forEach(popup => popup.remove());

// Remove chat, feedback, and contact boxes
const chatBoxes = document.querySelectorAll('.chat-box, .feedback-box, .contact-box');
chatBoxes.forEach(box => box.remove());

// Remove "Install our app" toolbars
const appToolbars = document.querySelectorAll('.app-toolbar');
appToolbars.forEach(toolbar => toolbar.remove());

// Remove "Allow notifications" pop-ups
const notificationPopups = document.querySelectorAll('.notification-popup');
notificationPopups.forEach(popup => popup.remove());

// Remove "Let us know your location" pop-ups
const locationPopups = document.querySelectorAll('.location-popup');
locationPopups.forEach(popup => popup.remove());

// Remove survey and opinion pop-ups
const surveyPopups = document.querySelectorAll('.survey-popup, .opinion-popup');
surveyPopups.forEach(popup => popup.remove());

// Remove "Rated by", "Protected by", and similar boxes
const ratingBoxes = document.querySelectorAll('.rating-box, .protection-box');
ratingBoxes.forEach(box => box.remove());

// Remove toolbars offering website translation
const translationToolbars = document.querySelectorAll('.translation-toolbar');
translationToolbars.forEach(toolbar => toolbar.remove());

// Remove sticky video boxes in the corner
const stickyVideoBoxes = document.querySelectorAll('.sticky-video-box');
stickyVideoBoxes.forEach(box => box.remove());
