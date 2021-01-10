<template>
<div class="">
    <div class="flex flex-wrap align-center h-10">
        <div class="">
            <h5 class="mr-5 font-bold text-xl text-black self-center">Scripts</h5>
        </div>
        <div class="inline-block"><Button @click="addScript">Add script</Button></div>
    </div>

    <div class="mt-5 mb-20">
        <div class="flex bg-gray-50 border-2 overflow-x-auto border-solid border-gray-300 rounded-lg">
            <table class="w-full table-auto flex flex-row flex-no-wrap overflow-hidden">
                <thead>
                    <tr v-for="script in scripts" :key="script.uuid" class="flex flex-col flex-no wrap sm:table-row px-4 border-solid border-b-2">
                        <th class="align-middle pt-3 pb-3 px-4 h-20 sm:h-auto text-left">Prescription date <font-awesome-icon class="hidden sm:inline" icon="sort"></font-awesome-icon></th>
                        <th class="align-middle pt-3 pb-3 px-4 h-20 sm:h-auto text-left">Physician <font-awesome-icon class="hidden sm:inline" icon="sort"></font-awesome-icon></th>
                        <th class="align-middle pt-3 pb-3 px-4 h-20 sm:h-auto text-left">Product name <font-awesome-icon class="hidden sm:inline" icon="sort"></font-awesome-icon></th>
                        <th class="align-middle pt-3 pb-3 px-4 h-20 sm:h-auto text-left">Next repeat <font-awesome-icon  class="hidden sm:inline" icon="sort"></font-awesome-icon></th>
                        <th class="align-middle pt-3 pb-3 px-4 h-20 sm:h-auto sm:text-right">Status <font-awesome-icon class="hidden sm:inline" icon="sort"></font-awesome-icon></th>
                    </tr>
                </thead>
                <tbody class="flex-1 sm:flex-none">
                    <tr class="flex flex-col flex-no wrap sm:table-row px-4 border-solid border-b-2 last:border-b-0" v-for="script in scripts" :key="script.uuid">
                        <td class="align-middle relative h-20 sm:h-auto px-4 pt-3 pb-3 font-semibold">{{script.prescriptionDate}}</td>
                        <td class="align-middle relative h-20 sm:h-auto px-4 pt-3 pb-3 font-semibold">{{script.physcian}}</td>
                        <td class="align-middle relative h-20 sm:h-auto px-4 pt-3 pb-3 font-semibold">{{script.productName}}</td>
                        <td class="align-middle relative h-20 sm:h-auto px-4 pt-3 pb-3 font-semibold">{{script.nextRepeatDate}}</td>
                        <td class="align-middle relative h-20 sm:h-auto px-4 pt-3 pb-3 sm:text-right font-semibold">{{script.status}}</td>
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

@media (min-width: 640px) {
    table {
      display: inline-table !important;
    }
    thead tr:not(:first-child) {
      display: none;
    }
}

</style>
