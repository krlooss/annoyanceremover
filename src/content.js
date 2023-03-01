// Check if the extension is disabled on this website
if (localStorage.getItem('disable-annoyance-remover')) {
    console.log('Annoyance Remover is disabled on this website.');
} else {
    // Remove newsletter pop-ups
    removeElements('.newsletter-popup, .popup-newsletter, .newsletter-lightbox, .newsletter-overlay, .newsletter-modal, .popup-newsletter-form, .popup-newsletter-content');
        // Remove chat, feedback, and contact boxes
    removeElements('.chat-box, .feedback-box, .contact-box, .help-box, .support-box, .contact-us, .contact-form, .contact-widget');
    // Remove "Install our app" toolbars
    removeElements('.app-toolbar, .app-promotion, .app-download-bar, .download-app-bar, .app-banner');
    // Remove "Allow notifications" pop-ups
    removeElements('.notification-popup, .notification-permission, .notification-overlay, .notification-modal');
    // Remove "Let us know your location" pop-ups
    removeElements('.location-popup, .location-permission, .location-overlay, .location-modal');
    // Remove survey and opinion pop-ups
    removeElements('.survey-popup, .opinion-popup, .feedback-popup, .feedback-modal, .survey-modal, .feedback-lightbox, .survey-overlay, .survey-form');
    // Remove "Rated by", "Protected by", and similar boxes
    removeElements('.rating-box, .protection-box, .security-box, .badge-box, .verification-box, .safety-badge');
    // Remove toolbars offering website translation
    removeElements('.translation-toolbar, .translation-popup, .translation-overlay, .translation-modal');
    // Remove sticky video boxes in the corner
    removeElements('.sticky-video-box, .video-corner-box');
    // Remove cookie consent banners
    removeElements('.cookie-banner, .cookie-notice, .cookie-consent, .cookie-law-banner, .cookie-policy-banner, .cookie-pop-up, .cookie-overlay');
    // Remove ad banners and popups
    removeElements('.ad-banner, .ad-popup, .popup-ad, .banner-ad, .popup-ads, .banner-ads');
    // Remove social media sharing widgets
    removeElements('.share-widget, .social-widget, .share-buttons, .social-buttons, .social-media-buttons, .social-sharing');
}

function removeElements(selector) {
    document.querySelectorAll(selector).forEach(function(element) {
        element.remove();
    });
}
