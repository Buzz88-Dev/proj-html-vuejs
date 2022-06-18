<template>
  <div class="footer">
    <div class="footer_text">
        <div v-for="(item, index) in dataFooter.linkFooter" :key="index">
            <div :class="classe">
                <div v-for="(element, index) in item.menu" :key="index">
                    {{element}}
                </div>
                <div v-for="(element, index) in item.aboutUs" :key="index">
                    {{element}}
                </div>
                <div v-for="(element, index) in item.quickLinks" :key="index">
                    {{element}}
                </div>
            </div>
        </div>   
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer_Marketing',

  created(){
    this.dataFooter;
    console.log(this.dataFooter);
    console.log(this.dataFooter.linkFooter);
    console.log(this.dataFooter.linkFooter[0]);
    console.log(this.dataFooter.linkFooter[0].menu);
  },


  data(){
    return {

        classe : "column",

        dataFooter : {
            textp : "It is a long established fact that a reader will be disctracted by the readable content.",
            spanfooter : "Copyright @ 2018 Sofbox",

            linkFooter : [
                {
                    menu : ["Menu", "About Us", "Theme", "Features", "Pricing", "Blog"],                                     
                },

                {
                    aboutUs : ["About Us", "About Sofbox", "Readmap", "How it Work", "Team", "News"],                      
                },

                {
                    quickLinks : ["Quick Links", "About Us", "Theme", "Features", "Pricing", "Blog"],                       
                },
            ]
        }
    }
  },
}

    
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

    .footer_text {
        width: 80%;
        margin: auto;
        display: flex;
        flex-wrap: wrap;

        .column {
            display: flex;
            flex-direction: column;
        }
    }

</style>