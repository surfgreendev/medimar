<template>
   <button :class="{ 'btn__primary': isPrimary, 'btn__default': isDefault }">
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
    isPrimary() {
      if (this.color === 'primary') {
        return true;
      }
      return false;
    },
    isDefault() {
      if (this.color === 'default') {
        return true;
      }
      return false;
    },
  },
};
</script>
