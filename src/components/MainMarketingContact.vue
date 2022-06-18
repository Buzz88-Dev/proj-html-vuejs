<template>
   <div class="contact">
        <h5>Contact with our team</h5>
        <p>If you are planning on developing a product landing.</p>
        <div class="icones">
            <div class="maps_left">
                maps
            </div>

            <div class="icones_right">
                <span>immagine</span>
                <span>9840 Shore St.Fond Du Lac, WI 54935</span>
                <span>0 1223 456 789</span>
                <span>mail@sofbox.com</span>
                <div class="social">
                    <span>facebook</span>
                    <span>twitter</span>
                    <span>git-hub</span>
                    <span>instagram</span>
                </div>
                <h6>Get in Touch</h6>
                <form></form>
            </div>
        </div>
   </div>
</template>

<script>


export default {
  name: 'MainMarketingContact',
}

    
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .contact {
        margin: 100px 0px;

        .icones {
            display: flex;
            justify-content: flex-start;

            .maps_left {
                width: 50%;
            }

            .icones_right {
                display: flex;
                flex-direction: column;

                .social {
                    display: flex;
                    justify-content: flex-start;
                }
            }
        }
    }
</style>