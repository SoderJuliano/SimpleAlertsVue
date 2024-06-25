
# Simple-Alerts

Simple-Alerts is a Vue alert component library that allows you to easily display customizable alerts in your Vue applications.

### Installation

To install Simple-Alerts, you can use npm or yarn:

```
npm install simple-alerts
```

or

```
yarn add simple-alerts
```

### Usage
#### AlertComponent
The **AlertComponent** is the main component provided by the Simple-Alerts library. It allows you to display alerts with customizable properties.

### Props
**title** (String): The title of the alert.
**message** (String): The message to be displayed in the alert.
**show** (AlertComponent.vue:55:9-71:10) (Boolean): Controls the visibility of the alert.
**custom** (Boolean): Indicates whether custom properties should be applied.
**customProperties** (Object): An object containing custom properties for the alert.

### Example
```
<template>
  <AlertComponent
    :show="show"
    title="Title"
    message="Test text"
    :custom="true"
    :customProperties="alert"
  />
</template>

<script>
import AlertComponent from 'simple-alerts';

export default {
  name: 'App',
  components: {
    AlertComponent
  },
  data() {
    return {
      show: true,
      alert: {
        autoClose: true,
        timer: 1000,
        backgroundColor: 'red',
        textColor: 'white',
        closeButton: false,
        closeButtonText: 'Close',
        customCssClass: 'alert-custom-css-class'
      }
    }
  }
}
</script>
```
### Customization
You can customize the styles of the alerts by modifying the CSS classes defined in the **AlertComponent.vue** file.

### CSS Classes
- main-alert: Styles the main container of the alert.
- inner-alert: Styles the inner content of the alert.
- show: Controls the appearance of the alert when shown.
- hide: Controls the appearance of the alert when hidden.
- close-button: Styles the close button of the alert.

### License
This project is licensed under the MIT License - see the LICENSE file for details.

You can add this documentation to your README.md file. Feel free to customize and expand upon it as needed for your project.

#### Default vue installation doc

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
