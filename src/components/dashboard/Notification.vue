<template>
    <transition name="fade">
        <div class="absolute top-10 right-10 bg-white rounded-xl shadow-md py-5 px-5">
            <h3>Product successfully dispended</h3>
            <p>Your product has been successfully dispended</p>
        </div>
    </transition>
</template>

<script>
export default {
  name: 'Notification',
};
</script>

<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
