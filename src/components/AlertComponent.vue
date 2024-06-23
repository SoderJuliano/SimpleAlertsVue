<template lang="js">
    <div class="main-alert" :class="showInner ? 'show' : 'hide'">
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
        show: Boolean
    },
    data() {
        return {
            showInner: this.show
        }
    },
    watch: {
        show: function(val) {
            console.log('var changed')
            this.showInner = val
            setTimeout(() => {
                console.log('timeout executed')
                this.$emit('close')
                this.showInner = false
            }, 3000);
            console.log('var changed end')
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
        background-color: rgba(0,0,0,0.5);
        display: flex;
        justify-content: center;
        align-items: center;
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
</style>