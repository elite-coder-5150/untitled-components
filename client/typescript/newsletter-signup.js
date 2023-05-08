/**
 * The App component represents the main application.
 */
var NewsletterForm = /** @class */ (function () {
    /**
     * Creates an instance of the App component.
     */
    function NewsletterForm() {
        this.cacheDom();
        this.initEvents();
    }
    /**
     * Caches references to the newsletter form element.
     */
    NewsletterForm.prototype.cacheDom = function () {
        this.newsletterForm = document.querySelector('.newsletter-form');
    };
    /**
     * Initializes event listeners for the newsletter form.
     */
    NewsletterForm.prototype.initEvents = function () {
        var _this = this;
        this.newsletterForm.addEventListener('submit', function (event) {
            event.preventDefault();
            var input = _this.newsletterForm.querySelector('input[type="email"]');
            var email = input.value;
            // TODO: Do something with the email value, such as sending it to a server
            input.value = '';
        });
    };
    return NewsletterForm;
}());
