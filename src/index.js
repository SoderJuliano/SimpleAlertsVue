import AlertComponent from './components/AlertComponent.vue';
import { showAlert } from './showAlert';

export function install(app) {
    if (install.installed) return;
    install.installed = true;
    app.component('simple-alerts-vue', AlertComponent);
}

const plugin = {
    install,
};

let GlobalVue = null;
if (typeof window !== 'undefined') {
    GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
    GlobalVue = global.Vue;
}
if (GlobalVue) {
    GlobalVue.use(plugin);
}

export default AlertComponent;
export { showAlert };