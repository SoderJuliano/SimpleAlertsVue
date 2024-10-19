import Vue from 'vue';
import AlertComponent from './AlertComponent.vue';

let alertInstance = null;

function createAlertInstance() {
    const AlertConstructor = Vue.extend(AlertComponent);
    alertInstance = new AlertConstructor({
        propsData: {
            title: '',
            message: '',
            show: false,
            custom: false,
            customProperties: {},
            confirm: false,
            confirmText: '',
            confirmmCancelText: ''
        }
    });
    alertInstance.$mount();
    document.body.appendChild(alertInstance.$el);
}

export function showAlert(options) {
    if (!alertInstance) {
        createAlertInstance();
    }

    if (typeof options === 'string') {
        alertInstance.title = '';
        alertInstance.message = options;
    } else if (typeof options === 'object') {
        alertInstance.title = options.title || '';
        alertInstance.message = options.message || '';
    }

    alertInstance.show = true;

    const duration = (typeof options === 'object' && options.duration) ? options.duration : 3000;

    setTimeout(() => {
        alertInstance.show = false;
    }, duration);
}