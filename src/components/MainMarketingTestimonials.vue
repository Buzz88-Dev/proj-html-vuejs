<template>
  <div class="testimonials">
    <h5>Our Testimonials</h5>
    <p>If you are planning on developing a product landing app or website, take a look at this beautiful-crafted</p>
    <div class="testimonials_icone">
        <div class="testimonial_left">
            <span>immagine</span>
            <span>Julia Aann - COO Sofbox</span>
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium vero eos et consectetur accus adip adip.</p>
        </div>

        <div class="testimonial_right">
            <span>immagine</span>
            <span>Mac Znder - Manager Sofbox</span>
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium vero eos et consectetur accus adip adip.</p>
        </div>
    </div>
    <div>
        2 pallini
    </div>

  </div>    
</template>

<script>


export default {
  name: 'MainMarketingTestimonials',
}

    
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

    .testimonials {
        margin: 100px 0px;

        .testimonials_icone {
            display: flex;
            justify-content: space-between;

            .testimonial_left {
                width: 40%;
                display: flex;
                flex-direction: column;
            }

            .testimonial_right {
                width: 40%;
                display: flex;
                flex-direction: column;
            }
        }
    }
</style>