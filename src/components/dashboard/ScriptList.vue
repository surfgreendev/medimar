<template>
<div class="w-full">
    <div class="flex flex-wrap align-center h-10">
        <div class="">
            <h5 class="mr-5 font-bold text-xl text-black self-center">Scripts</h5>
        </div>
        <div class="inline-block"><Button @click="addScript">Add script</Button></div>
    </div>

    <div class="mt-5 mb-20 w-full">
        <div class="overflow-x-auto w-4/6 bg-gray-50 border-2 border-solid border-gray-300 rounded-lg">
            <table class="w-full">
                <thead>
                    <tr class="px-4 border-solid border-b-2">
                        <th class="pt-3 pb-3 px-4 text-left">Prescription date <font-awesome-icon icon="sort"></font-awesome-icon></th>
                        <th class="pt-3 pb-3 px-4 text-left">Physician <font-awesome-icon icon="sort"></font-awesome-icon></th>
                        <th class="pt-3 pb-3 px-4 text-left">Product name <font-awesome-icon icon="sort"></font-awesome-icon></th>
                        <th class="pt-3 pb-3 px-4 text-left">Next repeat <font-awesome-icon icon="sort"></font-awesome-icon></th>
                        <th class="pt-3 pb-3 px-4 text-right">Status <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="px-4 border-solid border-b-2 last:border-b-0" v-for="script in scripts" :key="script.uuid">
                        <td class="px-4 pt-2 pb-2 font-semibold">{{script.prescriptionDate}}</td>
                        <td class="px-4 pt-2 pb-2 font-semibold">{{script.physcian}}</td>
                        <td class="px-4 pt-2 pb-2 font-semibold">{{script.productName}}</td>
                        <td class="px-4 pt-2 pb-2 font-semibold">{{script.nextRepeatDate}}</td>
                        <td class="px-4 pt-2 pb-2 text-right font-semibold">{{script.status}}</td>
                    </tr>
                </tbody>
            </table>
            </div>
    </div>

</div>
</template>

<script>
import Button from '@/components/button/Button.vue';

export default {
  name: 'ScriptList',
  components: {
    Button,
  },
  props: {
    scripts: {
      type: Array,
      required: true,
    },
  },
  methods: {
    addScript() {
      console.log('Add script');
    },
  },
};
</script>

<style lang="scss" scoped>
tbody tr:last-child {
    border-bottom: none;
}

</style>
