System.register("subscriber", [], function (exports_1, context_1) {
    "use strict";
    var SubscriptionForm;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            SubscriptionForm = /** @class */ (function () {
                function SubscriptionForm() {
                    this.subscriptionForm = new HTMLFormElement();
                }
                SubscriptionForm.prototype.cacheDom = function () {
                    this.subscriptionForm = document.querySelector('.subscription-signup-form');
                };
                SubscriptionForm.prototype.initEvents = function () {
                    this.subscriptionForm.addEventListener('submit', function (e) {
                    });
                };
                return SubscriptionForm;
            }());
            exports_1("SubscriptionForm", SubscriptionForm);
        }
    };
});
System.register("app", [], function (exports_2, context_2) {
    "use strict";
    var App;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [],
        execute: function () {
            App = /** @class */ (function () {
                function App() {
                    this.newsletterForm = new HTMLFormElement();
                    this.subscriptionForm = new HTMLFormElement();
                    this.notification = new HTMLElement();
                    this.subscriptionList = new HTMLUListElement();
                    this.registerForm = new HTMLFormElement();
                    this.loginForm = new HTMLFormElement();
                    this.initEvents();
                }
                App.prototype.cacheDom = function () {
                    this.newsletterForm = document.querySelector(".newsletter-form");
                    this.subscriptionForm = document.querySelector('.subscription-form');
                    this.registerForm = document.querySelector('.register-form');
                    this.loginForm = document.querySelector('.login-form');
                };
                App.prototype.initEvents = function () {
                    this.newsletterForm.addEventListener("submit", this.onSubmitNewsletter);
                    this.notification.addEventListener("click", this.toggleNotification);
                    this.subscriptionForm.addEventListener("submit", this.onSubmitSubscription);
                    this.registerForm.addEventListener("submit", this.onRegisterSubmit);
                    this.loginForm.addEventListener("submit", this.onLoginSubmit);
                };
                App.prototype.toggleNotification = function () {
                    if (!this.notification.classList.contains("show")) {
                        this.notification.classList.add("show");
                        this.notification.classList.remove("hidden");
                    }
                    else {
                        this.notification.classList.add("hidden");
                        this.notification.classList.remove("show");
                    }
                };
                App.prototype.onSubmitNewsletter = function (event) {
                    event.preventDefault();
                    var input = this.newsletterForm.querySelector("input");
                    // const email = input?.value;
                    var subscriber = input === null || input === void 0 ? void 0 : input.value;
                    if (subscriber) {
                        var subscriber_1 = input.value;
                        input.value = "";
                    }
                };
                App.prototype.onSubmitSubscription = function (e) {
                    e.preventDefault();
                    //this.updateSubscriberList(this.subscriberList);
                };
                App.prototype.updateSubscriberList = function (subscriber) {
                    var subscriberList = document.querySelectorAll('.subscriber-list');
                    if (subscriberList instanceof HTMLUListElement) {
                        var newSubItem = document.createElement('li');
                        newSubItem.textContent = subscriber;
                        subscriberList.appendChild(newSubItem);
                    }
                };
                App.prototype.sendNewSubNotification = function (subscriber) {
                    console.log("New Subscriber: ".concat(subscriber));
                };
                App.prototype.onRegisterSubmit = function (e) {
                    e.preventDefault();
                };
                App.prototype.onLoginSubmit = function (e) {
                    e.preventDefault();
                    console.log('you are logged in');
                };
                return App;
            }());
        }
    };
});
