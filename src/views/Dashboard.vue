<template>
<div>
    <Header/>
    <main class="flex w-full bg-gray-200">
      <div class="sm:w-1/12 md:w-3/12 lg:w-2/12 xl:w-3/12">
        <Sidebar />
      </div>
      <div class="sm:w-11/12 md:w-9/12 lg:w-10/12 xl:9/12">
        Main
        <Contact />
        <ProductList/>
        <ScriptList/>
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
};
</script>

<style lang="scss" scoped>

</style>
