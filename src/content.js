// Remove newsletter pop-ups
const newsletterPopups = document.querySelectorAll('.newsletter-popup, .popup-newsletter, .newsletter-lightbox, .newsletter-overlay, .newsletter-modal, .popup-newsletter-form, .popup-newsletter-content');
newsletterPopups.forEach(popup => popup.remove());

// Remove chat, feedback, and contact boxes
const chatBoxes = document.querySelectorAll('.chat-box, .feedback-box, .contact-box, .help-box, .support-box, .contact-us, .contact-form, .contact-widget');
chatBoxes.forEach(box => box.remove());

// Remove "Install our app" toolbars
const appToolbars = document.querySelectorAll('.app-toolbar, .app-promotion, .app-download-bar, .download-app-bar, .app-banner');
appToolbars.forEach(toolbar => toolbar.remove());

// Remove "Allow notifications" pop-ups
const notificationPopups = document.querySelectorAll('.notification-popup, .notification-permission, .notification-overlay, .notification-modal');
notificationPopups.forEach(popup => popup.remove());

// Remove "Let us know your location" pop-ups
const locationPopups = document.querySelectorAll('.location-popup, .location-permission, .location-overlay, .location-modal');
locationPopups.forEach(popup => popup.remove());

// Remove survey and opinion pop-ups
const surveyPopups = document.querySelectorAll('.survey-popup, .opinion-popup, .feedback-popup, .feedback-modal, .survey-modal, .feedback-lightbox, .survey-overlay, .survey-form');
surveyPopups.forEach(popup => popup.remove());

// Remove "Rated by", "Protected by", and similar boxes
const ratingBoxes = document.querySelectorAll('.rating-box, .protection-box, .security-box, .badge-box, .verification-box, .safety-badge');
ratingBoxes.forEach(box => box.remove());

// Remove toolbars offering website translation
const translationToolbars = document.querySelectorAll('.translation-toolbar, .translation-popup, .translation-overlay, .translation-modal');
translationToolbars.forEach(toolbar => toolbar.remove());

// Remove sticky video boxes in the corner
const stickyVideoBoxes = document.querySelectorAll('.sticky-video-box, .video-corner-box');
stickyVideoBoxes.forEach(box => box.remove());

// Remove cookie consent banners
const cookieBanners = document.querySelectorAll('.cookie-banner, .cookie-notice, .cookie-consent, .cookie-law-banner, .cookie-policy-banner, .cookie-pop-up, .cookie-overlay');
cookieBanners.forEach(banner => banner.remove());

// Remove ad banners and popups
const adBanners = document.querySelectorAll('.ad-banner, .ad-popup, .popup-ad, .banner-ad, .popup-ads, .banner-ads');
adBanners.forEach(banner => banner.remove());

// Remove social media sharing widgets
const socialWidgets = document.querySelectorAll('.share-widget, .social-widget, .share-buttons, .social-buttons, .social-media-buttons, .social-sharing');
socialWidgets.forEach(widget => widget.remove());
