<template>
    <div class w-full>
        <div>
            <h5>Available products</h5>
        </div>
        <div v-for="product in products" :key="product.uuid">
            <Product :product="product" />
        </div>
    </div>
</template>

<script>
import Product from '@/components/dashboard/Product.vue';

export default {
  name: 'ProductList',
  components: {
    Product,
  },
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
