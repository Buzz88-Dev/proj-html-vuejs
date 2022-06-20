<template>
  <div>
    <div class="main">
      <MainMarketingOnline />
      <MainMarketingSkyrocket />
      <MainMarketingBusiness />
      <MainMarketingTestimonials />
      <MainMarketingLatestPosts />
      <MainMarketingContact />
    </div>   
  </div>
</template>

<script>
import MainMarketingOnline from './MainMarketingOnline.vue'
import MainMarketingSkyrocket from './MainMarketingSkyrocket.vue'
import MainMarketingBusiness from './MainMarketingBusiness.vue'
import MainMarketingTestimonials from './MainMarketingTestimonials.vue'
import MainMarketingLatestPosts from './MainMarketingLatestPosts.vue'
import MainMarketingContact from './MainMarketingContact.vue'


export default {
  name: 'Main_Marketing',

  components: {
    MainMarketingOnline,
    MainMarketingSkyrocket,
    MainMarketingBusiness,
    MainMarketingTestimonials,
    MainMarketingLatestPosts,
    MainMarketingContact,
  },
}

    
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  .main {
    width: 90%;
    margin: auto;
  }

</style>