<template>
  <div class="footer">
    <hr>
    <div class="footer_text">
        <div class="sofbox">
            <div>
                <img src="../assets/35.png" alt="">
            </div>
            <p class="mt-2">It is a long established fact that a reader will be disctracted by the readable content.</p>
            <p class="mt-4">Copyright @2018 <span>SofBox</span></p>
        </div>
        <div v-for="(item, index) in dataFooter.linkFooter" :key="index" :class="classe">
            <div class="first_div">
                <div v-for="(element, index) in item.menu" :key="index" class="mb-3">
                    {{element}}
                </div>
                <div v-for="(element, index) in item.aboutUs" :key="index" class="mb-3">
                    {{element}}
                </div>
                <div v-for="(element, index) in item.quickLinks" :key="index" class="mb-3">
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
        justify-content: space-between;
        margin-top: 70px;
        margin-bottom: 30px;

        .sofbox {
            display: flex;
            justify-content: flex-start;
            flex-direction: column;
            width: 25%;

            p {
                font-size: 14px;
                color: #8E989F;
                line-height: 1.7;

                span {
                    color: #377dff;
                }
            }
        }

        .column {
            display: flex;
            flex-direction: column;
            width: 15%;
            margin-left: 5%;
            color: #8E989F;

            .first_div div:first-child {
                color: black;
                font-size: 20px;
                margin: 0;
            }
        }
    }

    hr {
        background-color: #8E989F;
    }

</style>