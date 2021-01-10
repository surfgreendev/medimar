<template>
<nav class="border-solid border-b-2 border-gray-200">
 <div class="pl-4 pr-8 flex pt-5 pb-5 items-center justify-center">
    <div class="sm:w-1/2">
        <img class="w-36" :src="Logo" alt="Mediamar">
    </div>
    <div class="sm:w-1/2 text-right">
        <ul>
            <li class="inline md:mb-2">
                <Button color="primary">Cart</Button>
            </li>
            <li class="ml-3 inline sm:mt-2">
                <Button color="default">Account</Button>
            </li>
        </ul>
    </div>
 </div>
</nav>
</template>

<script>

import Logo from '@/assets/mediamar_logo.png';
import Button from '@/components/button/Button.vue';

export default {
  name: 'Header',
  components: {
    Button,
  },
  data() {
    return {
      Logo,
    };
  },
};
</script>
