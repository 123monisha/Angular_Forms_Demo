# AngularFormsDemo

This Angular project demonstrates the use of **template-driven and reactive forms**.

## Features

- **Login Form (Template-Driven)**:  
  - Uses `ngModel` for data binding.  
  - Validates email and password fields using `required`, `minlength`, and `pattern`.  
  - Shows real-time validation messages.  

- **Registration Form (Reactive Form)**:  
  - Built using `FormGroup` and `FormControl`.  
  - Includes built-in validators (`required`, `pattern`, `minLength`) and custom validators (e.g., even number check).  
  - Displays validation messages and disables submit if the form is invalid.  

## Components

- `LoginComponent` → Handles the template-driven login form.  
- `RegistrationComponent` → Handles the reactive registration form.  
