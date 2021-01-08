<template>
    <div class="mb-10 bg-gray-50 border-4 border-light-blue-500 rounded-lg">
        <div class="flex pt-3 pb-3 w-full bg-gray-100">
            <div class="mx-auto">
                <h5 class="font-extrabold text-base">{{product.name}}</h5>
            </div>
            <div class="mx-auto">
                <span class="font-bold text-gray-500 text-base mr-4">
                    Unit price
                </span>
                <span class="font-bold text-base">
                    {{ product.unitPrice }}
                </span>
            </div>
            <div class="mx-auto">
                <span class="font-bold text-gray-500 text-base mr-4">
                    Qty
                </span>
                <span class="font-bold text-base">
                    {{ product.quantity }}
                </span>
            </div>
            <div class="mx-auto">
                <span class="font-bold text-gray-500 text-base mr-4">
                    Total
                </span>
                <span class="font-bold text-base">
                    {{ product.total }}
                </span>
            </div>
        </div>
        <div class="flex mt-10 mb-5 ml-4">
            {{ product.description }}
        </div>
        <hr class="text-gray-500 h-2 block mr-4 ml-4" />
        <div class="flex mt-5 ml-4 mb-4">
            <div class="mx-auto">
                <span class="italic">
                    Icon, Stock available to dispense
                </span>
            </div>
            <div class="mx-auto">
                <span class="font-bold text-gray-500 text-base mr-4">
                    Available
                </span>
                <span class="font-bold text-base">
                    {{ product.stock }}
                </span>
            </div>
            <div class="mx-auto">
                <span class="font-bold text-gray-500 text-base mr-4">
                    On order
                </span>
                <span class="font-bold text-base">
                    {{ product.onOrder }}
                </span>
            </div>
        </div>
        <div class="flex">
            <div class="mx-auto">
                <span class="font-bold text-gray-500 text-base mr-4">
                    Next repeat available
                </span>
                <span class="font-bold text-base">
                    {{ product.nextRepeatDate }}
                </span>
            </div>
            <div class="mx-auto">
                <Button>Dispense</Button>
            </div>
        </div>
    </div>
</template>

<script>
import Button from '@/components/button/Button.vue';

export default {
  name: 'Product',
  components: {
    Button,
  },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
