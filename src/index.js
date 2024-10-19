import AlertComponent from './components/AlertComponent.vue';
import showAlert from './components/showAlert';


export function install(app) {
    if (install.installed) return;
    install.installed = true;
    app.component('simple-alerts-vue', AlertComponent);
    app.config.globalProperties.$showAlert = showAlert;
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

export { showAlert };
export default AlertComponent;