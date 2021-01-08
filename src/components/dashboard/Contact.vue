<template>
<div>
    <div class="w-full">
        <h2>
            <span v-if="contactData.gender === 'm'">
                Mr
            </span>
            <span v-else>
                Mrs
            </span>
            {{ contactData.firstName }}
            </h2>
    </div>
    <div>
        <div>
            <ul>
                <li>
                    <span>DOB</span> {{ contactData.dob }}
                </li>
                <li>
                    <span>Medicare</span> {{ contactData.medicare }}
                </li>
            </ul>
        </div>
        <div>
            <ul>
                <li>
                    <span>Email</span> {{ contactData.eMail }}
                </li>
                <li>
                    <span>Phone</span> {{ contactData.phone }}
                </li>
                <li>
                    <span>Address</span> {{ contactData.address }}
                </li>
            </ul>
        </div>
        <div>
            <img :src="contactData.avatar" alt="Avatar">
        </div>
    </div>
</div>

</template>

<script>
export default {
  name: 'Contact',
  props: {
    contactData: {
      type: Object,
      required: true,
    },
  },
};
</script>
