<template>
  <div class="online_marketing">
       <div class="online_marketing_content">
            <div class="computer">
                <div class="image">
                    <img src="../assets/24.png" alt="">
                </div>
            </div>
            <div class="online_marketing_content_text">
                <h3>Online Marketing</h3>
                <div class="text">
                    <p>It is a long established fact that a reader will be distracted</p>
                </div>
                <div v-for="(item, index) in dataOnline" :key="index" :class="item.classList">
                    <font-awesome-icon icon="fas fa-check" class="icon_flag" />
                    <h6>{{ item.texth6 }}</h6>
                </div>
            </div>
       </div>

       <div class="online_marketing_content">
            <div class="computer">
                <div class="image">
                    <img src="../assets/24.png" alt="">
                </div>
            </div>
            <div class="online_marketing_content_text">
                <h3>Online Marketing</h3>
                <div class="text">
                    <p>It is a long established fact that a reader will be distracted</p>
                </div>
                <div v-for="(item, index) in dataOnline" :key="index" :class="item.classList">
                    <font-awesome-icon icon="fas fa-check" class="icon_flag" />
                    <h6>{{ item.texth6 }}</h6>
                </div>
            </div>
       </div>

       <div class="online_marketing_content">
            <div class="computer">
                <div class="image">
                    <img src="../assets/24.png" alt="">
                </div>
            </div>
            <div class="online_marketing_content_text">
                <h3>Online Marketing</h3>
                <div class="text">
                    <p>It is a long established fact that a reader will be distracted</p>
                </div>
                <div v-for="(item, index) in dataOnline" :key="index" :class="item.classList">
                    <font-awesome-icon icon="fas fa-check" class="icon_flag" />
                    <h6>{{ item.texth6 }}</h6>
                </div>
            </div>
       </div>
  </div>
</template>

<script>
export default {
  name: 'MainMarketingOnline',

  data(){
    return {
        dataOnline : [
            {
                texth6 : "SEO",
                classList : "list",
            },

            {
                texth6 : "SEM",
                classList : "list",
            },

            {
                texth6 : "Website Strategy",
                classList : "list",
            },

            {
                texth6 : "Social management",
                classList : "list",
            },
        ],
    }
  }
}

    
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

    .online_marketing {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-top: 100px;

        .online_marketing_content {
            display: flex;
            justify-content: flex-start;
            width: 33%;

            .computer {
                width: 20%;
                margin-right: 20px;

                img {
                    width: 100%;
                    height: auto;
                }
            }

            .online_marketing_content_text {
                width: 80%;
                display: flex;
                flex-direction: column;

                h3 {
                    font-size: 22px;
                }

                .text {
                    width: 80%;

                    p {
                        font-size: 13px;
                        color: grey;
                        line-height: 2.0;
                    }
                }

                .list {
                    display: flex;
                    margin-top: 15px;

                    .icon_flag {
                        color:#377DFF;
                        margin-right: 12px;
                    }

                    h6 {
                        font-size: 12px;
                        font-weight: bold;
                    }
                }
            }
        
        }
    }

</style>