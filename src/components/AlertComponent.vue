<template lang="js">
    <div v-if="isDefault" class="main-alert" :class="showInner ? 'show' : 'hide'">
        <div class="inner-alert">
            <h3>{{title}}</h3>
            <p>{{message}}</p>
        </div>
    </div>
    <div
        v-else class="main-alert"
        :style="{backgroundColor: customProperties?.backgroundColor,
            color: customProperties?.textColor}"
        :class="[customProperties?.customCssClass, showInner ? 'show' : 'hide']">
        <button class="close-button" @click="$emit('close')" v-if="customProperties?.closeButton">
            {{customProperties?.closeButtonText}}
        </button>
        <img class="close-button" src="../assets/close.png" v-if="!customProperties?.closeButton" @click="$emit('close')" />
        <div class="inner-alert">
            <h3>{{title}}</h3>
            <p>{{message}}</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'AlertComponent',
    emits: ['close'],
    props: {
        title: String,
        message: String,
        show: Boolean,
        custom: Boolean,
        customProperties: Object
    },
    data() {
        return {
            showInner: this.show,
            isDefault: this.custom ? false : true
        }
    },
    methods: {
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
    }
</style>