# React Form HOCs

This project is an experiment to try different types of HOCs to control forms in React. There are many libraries that provide opinionated building blocks for forms and form control, but they often don't stay out of the way when you have your own form elements and UI to content with. These HOCs aim to provide a set of APIs that can allow you to abstract away just the glue from your form flows.

## Local Form State

Form markup can quickly become pretty verbose, and when you need to control state across several inputs, you end up needing a good bit of boilerplate. `formHandler` provides a simple API to declare fields and validations with a collection of wrapped input elements (we need to map html values to our normalized data model).

`formHandler` also provides a submit callback that connects to your data interface to POST your form values.

## Form Wizard Controller

What if you want to break your form up into sections and create a flow that allows users to step through section by section, and jump directly to a step with validations. You can use `formMultiHandler` to declare a group of forms provided by `formHandler` and a view controller like react-router.
