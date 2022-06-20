<template>
  <div class="features_business">
    <div class="features_business_text">
        <div class="features_business_text_left">
            <h2>Popular features that your business needs</h2>
            <div class="text">
                <p>Faff about only a quid  blower i don't want no agree bleeding chimney pot burke tosser cras nice one boot fanny.!</p>
            </div>
        </div>

        <div class="button">
            <b-button variant="primary">Explore More Feature</b-button>
        </div>
    </div>

    <div class="icone">
        <div v-for="(item, index) in dataBusiness" :key="index" :class="item.classIcone">
            <h5>{{ item.texth5 }}</h5>
            <span :class="item.colorClass">
                <font-awesome-icon :icon="item.icon" />
            </span>
        </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'MainMarketingBusiness',

  data(){
    return {
        dataBusiness : [
            {
                classIcone : "icone_single",
                texth5 : "Customized Invoices",
                colorClass : "blue",
                icon : "fas fa-chart-line",
            },

            {
                classIcone : "icone_single",
                texth5 : "Stock Management",
                colorClass : "red",
                icon : "fas fa-plane-departure",
            },

            {
                classIcone : "icone_single",
                texth5 : "Receivable & Payables",
                colorClass : "green",
                icon : "fas fa-user-tie",
            },

            {
                classIcone : "icone_single",
                texth5 : "Manage Buying",
                colorClass : "blue",
                icon : "fas fa-user-tie",
            },

            {
                classIcone : "icone_single",
                texth5 : "Powerful & Secure",
                colorClass : "red",
                icon : "fas fa-spinner",
            },

            {
                classIcone : "icone_single",
                texth5 : "Fastest Return Filing",
                colorClass : "green",
                icon : "fas fa-user-tie",
            },

            {
                classIcone : "icone_single",
                texth5 : "Monthly Detailed",
                colorClass : "blue",
                icon : "fas fa-book",
            },

            {
                classIcone : "icone_single",
                texth5 : "Product Management",
                colorClass : "red",
                icon : "fas fa-thumbs-up",
            },
        ]
    }
  }
}

    
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

    .features_business {
        margin-top: 100px;

        .features_business_text {
            display: flex;

            .features_business_text_left {
                display: flex;
                flex-direction: column;
                width: 70%;

                h2 {
                    font-size: 40px;
                    margin-bottom: 20px;
                }
                .text {
                    width: 60%;

                    p {
                        font-size: 15px;
                        color: grey;
                        line-height: 1.7;
                    }
                }
            }
            .button {
                width: 30%;
                display: flex;
                justify-content: center;
                align-items: center;
                
                button {
                    background-color: #377DFF;
                    font-size: 14px;
                    border: none;
                    padding: 10px 12px;
                }
            }
        }


        .icone {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;

            .icone_single {
                display: flex;
                flex-direction: column;
                width: calc(25% - 2%);
                margin-top: 20px;
                padding: 20px;
                box-shadow: 5px 5px 20px #dedede;

                h5 {
                    font-size: 14px;
                }

                span {
                    font-size: 30px;
                }

                .blue {
                    color: blue;
                }

                .red {
                    color: red;
                }

                .green {
                    color: green;
                }
            }
        }
    }
</style>