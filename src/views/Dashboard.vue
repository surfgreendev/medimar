<template>
<div>
    <Header/>
    <main class="flex w-full bg-gray-200">
      <div>
        <a href="">Back to patients list</a>
      </div>
      <div class="sm:w-1/12 md:w-3/12 lg:w-2/12 xl:w-3/12">
        <Sidebar />
      </div>
      <div class="sm:w-11/12 md:w-9/12 lg:w-10/12 xl:9/12">
        Main
        <Contact :contactData="contactData"/>
        <ProductList :products="products"/>
        <ScriptList :scripts="scripts"/>
      </div>
    </main>
</div>
</template>

<script>
import Header from '@/components/header/Header.vue';
import Sidebar from '@/components/sidebar/Sidebar.vue';
import Contact from '@/components/dashboard/Contact.vue';
import ProductList from '@/components/dashboard/ProductList.vue';
import ScriptList from '@/components/dashboard/ScriptList.vue';

export default {
  name: 'Dashboard',
  components: {
    Header,
    Sidebar,
    Contact,
    ProductList,
    ScriptList,
  },
  data() {
    return {
      contactData: {
        gender: 'm',
        firstName: 'John',
        lastName: 'Smith',
        dob: '22 October 1995',
        medicare: '45092458',
        eMail: 'smithjohn@gmail.com',
        phone: '0481 123 456',
        address: '22 Smith Street, Redfern NSW 2016',
        avatar: '',
      },
      products: [
        {
          uuid: 1,
          name: 'ProductB Cannibis Oil',
          unitPrice: 44.50,
          quantity: 3,
          total: 133.50,
          currency: '$',
          description: 'Liquid, Bottle, 25 (mL)',
          inStock: true,
          nextRepeatDate: '31 Oct 2020',
          stock: 3,
          onOrder: 0,
        },
        {
          uuid: 2,
          name: 'Productz Cannibis Oil',
          unitPrice: 44.50,
          quantity: 3,
          total: 133.50,
          currency: '$',
          description: 'Liquid, Bottle, 25 (mL)',
          inStock: true,
          nextRepeatDate: '31 Oct 2020',
          stock: 3,
          onOrder: 0,
        },
      ],
      scripts: [
        {
          uuid: 1,
          prescriptionDate: '18/08/2020',
          physcian: 'Dr Kevin Su',
          productName: 'ProductB Canabis Oil',
          nextRepeatDate: '12/12/2020',
          status: 'Active',
        },
        {
          uuid: 2,
          prescriptionDate: '18/08/2020',
          physcian: 'Dr Kevin Su',
          productName: 'ProductB Canabis Oil',
          nextRepeatDate: '12/12/2020',
          status: 'Active',
        },
        {
          uuid: 3,
          prescriptionDate: '18/08/2020',
          physcian: 'Dr Kevin Su',
          productName: 'ProductB Canabis Oil',
          nextRepeatDate: '12/12/2020',
          status: 'Awaiting approval',
        },
        {
          uuid: 4,
          prescriptionDate: '18/08/2020',
          physcian: 'Dr Kevin Su',
          productName: 'ProductB Canabis Oil',
          nextRepeatDate: '12/12/2020',
          status: 'Completed',
        },
        {
          uuid: 5,
          prescriptionDate: '18/08/2020',
          physcian: 'Dr Kevin Su',
          productName: 'ProductB Canabis Oil',
          nextRepeatDate: '12/12/2020',
          status: 'Expired',
        },
        {
          uuid: 6,
          prescriptionDate: '18/08/2020',
          physcian: 'Dr Kevin Su',
          productName: 'ProductB Canabis Oil',
          nextRepeatDate: '12/12/2020',
          status: 'Expired',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
