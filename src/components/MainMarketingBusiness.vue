<template>
  <div class="features_business">
    <div class="features_business_text">
        <div class="features_business_text_left">
            <h2>Popular features that your business needs</h2>
            <p>Faff about only a quid  blower i don't want no agree bleeding chimney pot burke tosser cras nice one boot fanny.!</p>
        </div>

        <div>
            <button>Explore More Feature</button>
        </div>
    </div>

    <div class="icone">
        <div class="icone_single">
            <h5>Customized Invoices</h5>
            <span>icona</span>
        </div>
        <div class="icone_single">
            <h5>Stock Management</h5>
            <span>icona</span>
        </div>
        <div class="icone_single">
            <h5>Receivable & Payables</h5>
            <span>icona</span>
        </div>
        <div class="icone_single">
            <h5>Manage Buying</h5>
            <span>icona</span>
        </div>
        <div class="icone_single">
            <h5>Powerful & Secure</h5>
            <span>icona</span>
        </div>
        <div class="icone_single">
            <h5>Fastest Retrun Filing</h5>
            <span>icona</span>
        </div>
        <div class="icone_single">
            <h5>Monthly Detailed</h5>
            <span>icona</span>
        </div>
        <div class="icone_single">
            <h5>Product Management</h5>
            <span>icona</span>
        </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'MainMarketingBusiness',
}

    
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

    .features_business {

        margin: 100px 0px;

        .features_business_text {
        display: flex;

            .features_business_text_left {
                display: flex;
                flex-direction: column;
            }
        }


        .icone {
            display: flex;
            justify-content: flex-start;
            flex-wrap: wrap;

            .icone_single {
                display: flex;
                flex-direction: column;
            }
        }
    }
</style>