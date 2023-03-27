<template>
  <div class="grid h-screen place-items-center">
    <CustomerSearch />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import CustomerSearch from '~/components/customer/CustomerSearch.vue';

export default Vue.extend({
  name: "IndexPage",
  components: { CustomerSearch }
})
</script>
