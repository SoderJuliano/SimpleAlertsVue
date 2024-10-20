<template lang="js">
    <div v-if="confirmAlert">
        <div class="main-alert" :class="showInner ? 'show' : 'hide'">
            <div class="inner-alert">
                <h3>{{title}}</h3>
                <p>{{message}}</p>
                <div class="confirm-buttons">
                    <button @click="$emit('confirm', false)">{{confirmmCancelText ? confirmmCancelText : "Cancel"}}</button>
                    <button @click="$emit('confirm', true)">{{confirmText ? confirmText : "Confirm"}}</button>
                </div>
            </div>
        </div>
    </div>
    <div v-else-if="isDefault" class="main-alert" :class="showInner ? 'show' : 'hide'">
        <div class="inner-alert">
            <h3>{{title}}</h3>
            <p>{{message}}</p>
        </div>
    </div>
    <div
        v-else class="main-alert"
        :style="{backgroundColor: customProperties?.backgroundColor}"
        :class="[customProperties?.customCssClass, showInner ? 'show' : 'hide']">
        <button class="close-button" @click="$emit('close')" v-if="customProperties?.closeButton && !customProperties?.closeButtomPosition">
            {{customProperties?.closeButtonText}}
        </button>
        <img alt="close" class="close-button" src="../assets/close.png" v-if="!customProperties?.closeButton" @click="$emit('close')" />
        <div :style="{color: customProperties?.textColor}" class="inner-alert">
            <h3>{{title}}</h3>
            <p>{{message}}</p>
            <button class="close-button-bottom" @click="$emit('close')" v-if="customProperties?.closeButton && customProperties?.closeButtomPosition == 'bottom'">
                {{customProperties?.closeButtonText}}
            </button>
        </div>
    </div>
</template>
<script>
import * as alert from "./showAlert.js"
export default {
    name: 'AlertComponent',
    emits: ['close'],
    props: {
        title: String,
        message: String,
        show: Boolean,
        custom: Boolean,
        customProperties: Object,
        // exemple of customProperties: {
        //     autoClose: false,
        //     timer: 1000,
        //     backgroundColor: 'red',
        //     textColor: 'black',
        //     closeButton: true,
        //     closeButtonText: 'Close',
        //     closeButtomPosition: 'null (default - rigth top) / bottom'
        //     customCssClass: 'alert-custom-css-class'
        // }
        confirm: Boolean,
        confirmText: String,
        confirmmCancelText: String
    },
    data() {
        return {
            showInner: this.show,
            isDefault: this.custom ? false : true,
            confirmAlert: this.confirm ? true : false
        }
    },
    methods: {
        alert(text) {
            console.log('dentro do AlertComponent')
            alert.showAlert(text);
        }
    },
    
    /**
     * Watches for changes in the 'show' prop.
     * If 'show' is true and 'custom' is false,
     * it emits a 'close' event after 3 seconds,
     * and sets 'showInner' to false.
     * If 'show' is true and 'custom' is true,
     * it checks if 'autoClose' is true in 'customProperties'.
     * If it is, it emits a 'close' event after a specified time (or 3 seconds if not specified), 
     * and sets 'showInner' to false.
     *
     * @param {Boolean} val - The new value of 'show'.
     */
    watch: {
        show: function(val) {
            this.showInner = val
            if (val === true && this.custom === false) {
                    setTimeout(() => {
                    this.$emit('close')
                    this.showInner = false
                }, 3000);
            }else if (val === true && this.custom === true) {
                if (this.customProperties?.autoClose) {
                    setTimeout(() => {
                        this.$emit('close')
                        this.showInner = false
                    }, this.customProperties?.timer ?
                    this.customProperties?.timer : 3000);
                }
            }
        }
    }
}
</script>
<style lang="css">
    .main-alert {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        padding: 5px;
        border-radius: 10px;
        background-color: #fff;
        width: 400px;
        background-color: rgba(0,0,0,0.65);
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    .inner-alert {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #fff;
        font-size: 16px;
        font-weight: bold;
    }

    .show {
        transition: all 0.5s;
        opacity: 1;
        z-index: 10;
        top: 2%;
    }
    .hide {
        transition: all 0.5s;
        opacity: 0;
        z-index: -1;
        top: -50px;
    }

    .close-button {
        position: absolute;
        top: 1%;
        right: 1%;
        padding: 5px;
        border-radius: 5px;
    }

    .close-button-bottom {
        padding: 5px;
        border-radius: 5px;
        padding-left: 20px;
        padding-right: 20px;
    }

    /* Confirm css */
    .confirm-buttons {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        margin-top: 20px;
        margin-bottom: 20px
    }
    .confirm-buttons button {
        padding: 5px 10px;
        border: none;
        border-radius: 10px;
        background-color: #fff;
        color: #000;
        font-weight: bold;
        cursor: pointer;
        width: 35%;
        min-height: 40px;
    }   
</style>