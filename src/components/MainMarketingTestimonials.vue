<template>
  <div class="testimonials">
    <h5>Our Testimonials</h5>
    <div class="text">
        <p>If you are planning on developing a product landing app or website, take a look at this beautiful-crafted</p>
    </div>
    <div class="testimonials_icone">
        <div class="testimonial_left">
            <div class="image">
                <img src="../assets/26.jpeg" alt="">
            </div>
            <h5>Julia Aann <span> - COO Sofbox</span></h5>
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium vero eos et consectetur accus adip adip.</p>
        </div>

        <div class="testimonial_right">
            <div class="image">
                <img src="../assets/27.jpeg" alt="">
            </div>
            <h5>Mac Znder <span> - Manager Sofbox</span></h5>
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium vero eos et consectetur accus adip adip.</p>
        </div>
    </div>
    <div class="circles">
        <div class="single_circle">
            <font-awesome-icon icon="fas fa-circle" class="me-1" />
        </div>
        <div class="single_circle">
            <font-awesome-icon icon="fas fa-circle" class="ms-1"/>
        </div>
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
        margin-top: 100px;
        text-align: center;

        .text {
            width: 40%;
            margin: auto;

            p {
                font-size: 14px;
                margin-top: 20px;
                color: grey;
                line-height: 1.7;
            }   
        }

        .testimonials_icone {
            display: flex;
            justify-content: space-between;
            margin-top: 40px;

            .testimonial_left {
                width: 45%;
                display: flex;
                flex-direction: column;
                padding: 30px 40px;
                box-shadow: 5px 15px 20px #dedede;

                .image {

                    img {
                        width: 15%;
                        height: auto;
                        border-radius: 50%;
                    }
                }

                h5 {
                    margin: 30px 0px;

                    span {
                        font-size: 14px;
                        color: grey
                    }
                }

                p {
                    font-size: 14px;
                    color: grey;
                    line-height: 1.8;
                    text-align: left;
                }
            }

            .testimonial_right {
                width: 45%;
                display: flex;
                flex-direction: column;
                padding: 30px 40px;
                box-shadow: 5px 15px 20px #dedede;


                .image {

                    img {
                        width: 15%;
                        height: auto;
                        border-radius: 50%;
                    }
                }

                h5 {
                    margin: 30px 0px;

                    span {
                        font-size: 14px;
                        color: grey
                    }
                }

                p {
                    font-size: 14px;
                    color: grey;
                    line-height: 1.8;
                    text-align: left;
                }
            }
        }

        .circles {
            margin-top: 30px;
            display: flex;
            justify-content: center;

            .single_circle {

                &:hover {
                color: blue;
                }
            }
        }
    }
</style>