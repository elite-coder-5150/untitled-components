import * as $ from "jquery";
class App {
  newsletterForm: HTMLFormElement;
  notification: HTMLElement;

  constructor() {
    this.newsletterForm = new HTMLFormElement();
    this.notification = new HTMLElement();
    this.initEvents();
  }

  cacheDom() {
    this.newsletterForm = document.querySelector(
      ".newsletter-form"
    ) as HTMLFormElement;
    //this.notification = document.querySelector('.notification');
  }

  initEvents() {
    this.newsletterForm.addEventListener("submit", this.onSubmitNewsletter);

    this.notification.addEventListener("click", this.toggleNotification);
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

    if (input) {
      const email = input.value;
      input.value = "";
    }
  }
}
