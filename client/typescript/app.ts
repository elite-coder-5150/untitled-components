import * as $ from "jquery";

import { SubscriptionForm } from "./subscriber";
class App {
  newsletterForm: HTMLFormElement;
  subscriptionForm: HTMLFormElement;
  registerForm: HTMLFormElement;
  loginForm: HTMLFormElement;
  notification: HTMLElement;
  sform: HTMLFormElement;
  subscriptionList: HTMLUListElement;

  constructor() {
    this.newsletterForm = new HTMLFormElement();
    this.subscriptionForm = new HTMLFormElement();
    this.notification = new HTMLElement();
    this.subscriptionList = new HTMLUListElement();
    this.registerForm = new HTMLFormElement();
    this.loginForm = new HTMLFormElement();
 
    this.initEvents();
  }

  cacheDom() {
    this.newsletterForm = document.querySelector(
      ".newsletter-form"
    ) as HTMLFormElement;
    this.subscriptionForm = document.querySelector(
        '.subscription-form'
    ) as HTMLFormElement;

    this.registerForm = document.querySelector(
        '.register-form'
    ) as HTMLFormElement;

    this.loginForm = document.querySelector(
        '.login-form'
    ) as HTMLFormElement;
    
  }

  initEvents() {
    this.newsletterForm.addEventListener("submit", this.onSubmitNewsletter);

    this.notification.addEventListener("click", this.toggleNotification);
    this.subscriptionForm.addEventListener("submit", this.onSubmitSubscription);
    this.registerForm.addEventListener("submit", this.onRegisterSubmit);
    this.loginForm.addEventListener("submit", this.onLoginSubmit);
  }

  toggleNotification() {
    if (!this.notification.classList.contains("show")) {
      this.notification.classList.add("show");
      this.notification.classList.remove("hidden");
    } else {
      this.notification.classList.add("hidden");
      this.notification.classList.remove("show");
    }
  }

  onSubmitNewsletter(event: Event) {
    event.preventDefault();
    const input = this.newsletterForm.querySelector("input");
    // const email = input?.value;
    const subscriber = input?.value
    if (subscriber) {
      const subscriber = input.value;
      input.value = "";
    }


  }

  onSubmitSubscription(e: Event) {
    e.preventDefault();

    //this.updateSubscriberList(this.subscriberList);

  }

  updateSubscriberList(subscriber: string) {
    const subscriberList = document.querySelectorAll('.subscriber-list');

    if (subscriberList instanceof HTMLUListElement) {
        const newSubItem = document.createElement('li');
        newSubItem.textContent = subscriber;
        subscriberList.appendChild(newSubItem);
    }
  }

  sendNewSubNotification(subscriber: string): void {
    console.log(`New Subscriber: ${subscriber}`);
  }

  onRegisterSubmit(e: Event): void {
    e.preventDefault();
  }

  onLoginSubmit(e: Event) {
    e.preventDefault();

    console.log('you are logged in');

  }
}
