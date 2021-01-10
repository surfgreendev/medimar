<template>
    <div class="mb-10 pb-5 bg-gray-50 border-2 border-solid ring-offset-0 border-gray-300 rounded-lg">
        <Notification v-show="success" />
        <div class="sm:mx-auto sm:flex pt-3 pl-4 pr-4 pb-3 w-full border-b-2 border-solid border-gray-300 bg-gray-100 rounded-t-lg">
            <div class="block sm:mx-auto">
                <h5 class="font-extrabold text-base">{{product.name}}</h5>
            </div>
            <div class="block sm:mx-auto">
                <span class="font-bold text-gray-500 text-base mr-1 sm:mr-4">
                    Unit price
                </span>
                <span class="font-bold text-base">
                    {{ product.currency }}{{ product.unitPrice }}
                </span>
            </div>
            <div class="block sm:mx-auto">
                <span class="font-bold text-gray-500 text-base mr-1 sm:mr-4">
                    Qty
                </span>
                <span class="font-bold text-base">
                    {{ product.quantity }}
                </span>
            </div>
            <div class="block sm:ml-auto">
                <span class="font-bold text-gray-500 text-base mr-1 sm:mr-4">
                    Total
                </span>
                <span class="font-bold text-base">
                    {{ product.currency }}{{ product.total }}
                </span>
            </div>
        </div>
        <div class="flex mt-10 mb-5 ml-4">
            <span class="font-semibold">{{ product.description }}</span>
        </div>
        <hr class="text-gray-300 h-2 block mr-4 ml-4" />
        <div class="sm:flex mt-5 ml-4 mb-4">
            <div>
                <span class="text-green-600">
                     <font-awesome-icon icon="check-circle"></font-awesome-icon>
                </span>
                <span class="italic font-semibold">
                    Stock available to dispense
                </span>
            </div>
            <div class="ml-0 sm:ml-20">
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
        <div class="sm:flex ml-4 mr-4">
            <div class="self-center">
                <span class="font-bold text-gray-500 text-base mr-4">
                    Next repeat available
                </span>
                <span class="block sm:inline font-bold text-base">
                    {{ product.nextRepeatDate }}
                </span>
            </div>
            <div class="mt-4 sm:mt-0 ml-auto">
                <Button @click="dispenseProduct">Dispense</Button>
            </div>
        </div>
    </div>
</template>

<script>
import Button from '@/components/button/Button.vue';
import Notification from '@/components/dashboard/Notification.vue';

export default {
  name: 'Product',
  components: {
    Button,
    Notification,
  },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      success: false,
    };
  },
  methods: {
    dispenseProduct() {
      this.success = true;
      setTimeout(() => {
        this.success = false;
      }, 3500);
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
