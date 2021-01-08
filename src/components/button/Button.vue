<template>
   <button class="bg-blue-500
         text-white
         p-3
         transition
         duration-300
         ease-in-out
         hover:bg-blue-600
         rounded-lg">
       <slot></slot>
    </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    color: {
      type: String,
      default: 'primary',
    },
  },
  computed: {
    btnColor() {
      if (this.color === 'primary') {
        return {
          active: 'bg-blue-500',
          hover: 'bg-blue-600',
        };
      }
      return this.data;
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
