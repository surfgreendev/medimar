<template>
    <div class="bg-indigo-900 h-full min-h-screen">
        <nav class="pt-6">
            <ul >
                <li class="p2 pl-10 pb-6 w-full" v-for="navItem in navItems" :key="navItem.name">
                    <a class="w-auto text-xl px-5 text-white font-bold hover:color-red-700" href="">
                        {{ navItem.name }}
                    </a>
                </li>
            </ul>
        </nav>

        <nav class="mt-10">
            <ul>
                <li
                class="p2 pl-10 pb-6"
                v-for="supportNavItem in supportNavItems"
                :key="supportNavItem.name">
                    <a class="text-xl px-5 text-white font-bold" href="">
                        {{ supportNavItem.name }}
                    </a>
                </li>
            </ul>
        </nav>

        <div class="flex items-stretch justify-center">
            <ul class="text-white text-center">
                <li class="display block">
                    <h5 class="font-bold">Mediamar &copy; 2020</h5>
                </li>
                <li class="block">
                    <a href="">Privacy</a> &centerdot; <a href="">Terms & Condition</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Sidebar',
  data() {
    return {
      navItems: [
        { name: 'Home', isActive: 'false', icon: 'home' },
        { name: 'Dispensary', isActive: 'false', icon: 'add' },
        { name: 'Patients', isActive: 'true', icon: 'user' },
        { name: 'Pharmacy Orders', isActive: 'false', icon: 'shopping-bag' },
        { name: 'Reports', isActive: 'false', icon: 'home' },
        { name: 'Education Resources', isActive: 'false', icon: 'home' },
      ],
      supportNavItems: [
        { name: 'FAQs', isActive: 'false', icon: '' },
        { name: 'Help & Supprt', isActive: 'false', icon: '' },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
