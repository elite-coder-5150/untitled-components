export class SubscriptionForm {
    subscriptionForm: HTMLFormElement;

    constructor() {
        this.subscriptionForm = new HTMLFormElement();
    }

    cacheDom() {
        this.subscriptionForm = document.querySelector(
            '.subscription-signup-form'
        ) as HTMLFormElement;
    }

    initEvents() {
        this.subscriptionForm.addEventListener('submit', (e: Event) => {
            
        })
    }
}