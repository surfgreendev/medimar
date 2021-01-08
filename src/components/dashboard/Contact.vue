/* eslint-disable max-len */
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
    <div class="flex mb-10 bg-gray-50 border-solid border-gray-400 rounded-lg">
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
        <div class="sm:w-full md:w-1/3 text-right">
            <svg class="w-24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0
                11-16 0 8 8 0 0116 0zm-6-3a2 2 0
                11-4 0 2 2 0 014 0zm-2 4a5 5 0
                00-4.546 2.916A5.986 5.986 0 0010 16a5.986
                5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
            </svg>
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
