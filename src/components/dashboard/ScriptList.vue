<template>
    <div class="w-full">
        <div>
            <h5 class="font-bold text-xl text-black">Scripts</h5>
            <Button @click="addScript">Add script</Button>
        </div>
        <table>
            <thead>
                <tr>
                    <th>Prescription date</th>
                    <th>Physician</th>
                    <th>Product name</th>
                    <th>Next repeat</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="script in scripts" :key="script.uuid">
                    <td>{{script.prescriptionDate}}</td>
                    <td>{{script.physcian}}</td>
                    <td>{{script.productName}}</td>
                    <td>{{script.nextRepeatDate}}</td>
                    <td>{{script.status}}</td>
                </tr>
            </tbody>
        </table>
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

</style>
