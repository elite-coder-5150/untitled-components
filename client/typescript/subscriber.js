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
