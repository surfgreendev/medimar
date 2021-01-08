<template>
    <div class w-full>
        Product List
        <Product />
    </div>
</template>

<script>
import Product from '@/components/dashboard/Product.vue';

export default {
  name: 'ProductList',
  components: {
    Product,

  },
};
</script>

<style lang="scss" scoped>

</style>
