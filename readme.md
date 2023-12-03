# hf-editor

![NPM version](https://img.shields.io/badge/version-1.0.0_-blue)

## Table of Contents
- Installation
- Usage
- Development

### Installation
To install hf-editor, you can use npm. Make sure you have Node.js installed on your system.
```
 npm install hf-editor
```

### Usage
Here's how you can use `hf-editor` in your project:
```
import Editor from 'hf-editor';

// Create a new instance of the 'Editor' class with configuration options.
new Editor({
  element: document.querySelector('.element'), // Specify the HTML element where the editor will be attached.
  content: '<p>Hello World!</p>', // Set the initial content of the editor.
  onChange: (content) => { // Define a callback function that will be called when the content changes.
    console.log(content); 
  }
});
```


### Development
If you want to work on the development of `hf-editor`, you can follow these steps:
- #### Clone the repository:
    ```
    git@github.com:happyfoxinc/workflows-react-ui.git
    ```
- #### Install the dependencies:
    ```
    npm install
    ```
- #### Start the development server:
    ```
    npm run start
    ```
    This will build the project using Rollup and start a development server. You can access your app at http://localhost:3000.
- #### Make your changes and contributions.
- #### Build the project for production:
    ```
    npm run build
    ```
