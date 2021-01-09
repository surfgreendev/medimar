<template>
<div>
    <div class="w-full mt-10 mb-5">
        <h2 class="font-extrabold text-2xl text-black">
            <span v-if="contactData.gender === 'm'">
                Mr
            </span>
            <span v-else>
                Mrs
            </span>
            {{ contactData.firstName }} {{ contactData.lastName }}
            </h2>
    </div>
    <div class="flex pt-3 pb-3 mb-10 bg-gray-50 border-2 border-solid border-gray-300 rounded-lg">
        <div class="sm:w-full md:w-1/3">
            <ul class="p-3">
                <li>
                    <span class="font-bold text-gray-500 text-base mr-4">
                        DOB
                    </span>
                    <span class="font-bold text-base">
                        {{ contactData.dob }}
                    </span>
                </li>
                <li>
                    <span class="font-bold text-gray-500 text-base mr-4">
                        Medicare
                    </span>
                    <span class="font-bold text-base">
                        {{ contactData.medicare }}
                    </span>

                </li>
            </ul>
        </div>
        <div class="sm:w-full md:w-1/3">
            <ul class="p-3">
                <li>
                    <span class="font-bold text-gray-500 text-base mr-4">
                        Email
                    </span>
                    <span class="font-bold text-base">
                        {{ contactData.eMail }}
                    </span>
                </li>
                <li>
                    <span class="font-bold text-gray-500 text-base mr-4">
                        Phone
                    </span>
                    <span class="font-bold text-base">
                        {{ contactData.phone }}
                    </span>
                </li>
                <li>
                    <span class="font-bold text-gray-500 text-base mr-4">
                        Address
                    </span>
                    <span class="font-bold text-base">
                        {{ contactData.address }}
                    </span>
                </li>
            </ul>
        </div>
        <div class="sm:w-full md:w-1/3 pr-4">
            <span class="opacity-70">
                <font-awesome-icon size="6x" pull="right" icon="user-circle"></font-awesome-icon>
            </span>
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
