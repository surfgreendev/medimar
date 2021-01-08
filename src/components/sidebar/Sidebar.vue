<template>
    <div class="bg-gray-700 h-full min-h-screen">
        <nav>
            <ul>
                <li v-for="navItem in navItems" :key="navItem.name">
                    <a href="">{{ navItem.name }}</a>
                </li>
            </ul>
        </nav>

        <nav>
            <ul>
                <li v-for="supportNavItem in supportNavItems" :key="supportNavItem.name">
                    <a href="">{{ supportNavItem.name }}</a>
                </li>
            </ul>
        </nav>

        <div>
            <ul>
                <li>
                    <h5>Mediamar &copy; 2020</h5>
                </li>
                <li>
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
        { name: 'Home', isActive: 'false', icon: '' },
        { name: 'Dispensary', isActive: 'false', icon: '' },
        { name: 'Patients', isActive: 'true', icon: '' },
        { name: 'Pharmacy Orders', isActive: 'false', icon: '' },
        { name: 'Reports', isActive: 'false', icon: '' },
        { name: 'Education Resources', isActive: 'false', icon: '' },
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
