<template>
    <div class="bg-indigo-900 h-full min-h-screen">
        <nav class="mx-auto pt-6">
            <ul class="mx-3 relative">
                <li class="pb-3 w-full" v-for="navItem in navItems" :key="navItem.name">
                    <a class="block pt-2 pb-2 pl-2 pr-2 opacity-80 text-white font-semibold hover:opacity-100 hover:bg-indigo-700 rounded-lg transition duration-300 ease-in-out" href="">
                        <span class="w-5 h-5 inline-block opacity-50">
                            <font-awesome-icon :icon="navItem.icon"></font-awesome-icon>
                        </span>
                        <span class="hidden lg:inline ml-2">
                            {{ navItem.name }}
                        </span>

                    </a>
                </li>
            </ul>
        </nav>

        <nav class="mt-10">
            <ul class="mx-3 relative">
                <li class="pb-3 w-full" v-for="supportNavItem in supportNavItems" :key="supportNavItem.name">
                    <a class="block pt-2 pb-2 pl-2 pr-2 opacity-80 text-white font-semibold hover:opacity-100 hover:bg-indigo-700 rounded-lg transition duration-300 ease-in-out" href="">
                        <span class="w-5 h-5 inline-block opacity-50">
                            <font-awesome-icon :icon="supportNavItem.icon"></font-awesome-icon>
                        </span>
                        <span class="hidden lg:inline ml-2">
                            {{ supportNavItem.name }}
                        </span>
                    </a>
                </li>
            </ul>
        </nav>

        <div class="hidden lg:block">
            <ul class="text-white text-xs text-center">
                <li class="display block">
                    <h5 class="font-bold">Mediamar &copy; 2020</h5>
                </li>
                <li class="block">
                    <a href="">Privacy</a> <span class="font-black">&centerdot;</span> <a href="">Terms & Condition</a>
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
        { name: 'Dispensary', isActive: 'false', icon: 'plus-square' },
        { name: 'Patients', isActive: 'true', icon: 'users' },
        { name: 'Pharmacy Orders', isActive: 'false', icon: 'shopping-basket' },
        { name: 'Reports', isActive: 'false', icon: 'clipboard-check' },
        { name: 'Education Resources', isActive: 'false', icon: 'book' },
      ],
      supportNavItems: [
        { name: 'FAQs', isActive: 'false', icon: 'info-circle' },
        { name: 'Help & Supprt', isActive: 'false', icon: 'question-circle' },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
