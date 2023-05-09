# Newsletter singup form

#### Description
1. **Newsletter submission form** - Handles the form submission for the newsletter subscription form.
    1. `event.preventDefault()` - this method prevents the default behavior of the form, which is to submit to itself. This will cause the page to reload or navigate to a new page.

    2. `const input = this.newslatterForm.querySelector("input")` this line retrieves the input field from the newsletter form by using the `querySelector` method. Specifically, it searches for an in9put element within the newsletterform element. if an input element within the form is found, it is assigned to the input variable, if not, input will be null. Otherwise.

    3. `if (input) { ... }` this line checks if input is thruthy, which means that is not null or undefined. if input is truthy, that means that an input element was found, and the code inside the if block is executed.

    4. `const email = input.value` - this line retrieves the email value form the input field using the value property. The email value is assigned tot eh email variable.

    5. `input.value = ''` - this line clears the input field by setting its vvalue property to an empty string.





#### Methods
1. **constructor** - constructs the app object
2. **cacheDom** - caches the references to the newsletter form
3. **initEvents** - initialize event listeners for the newsletter form