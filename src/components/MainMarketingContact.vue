<template>
   <div class="contact">
        <h5>Contact with our team</h5>
        <p>If you are planning on developing a product landing.</p>
        <div class="icones">
            <div class="maps_left">
                <div class="image">
                    <img src="../assets/StaticMapService.GetMapIma.png" alt="">
                </div>
            </div>

            <div class="icones_right">
                <div class="logo">
                    <img src="../assets/35.png" alt="">
                </div>
                <h4>9840 Shore St.Fond Du Lac, WI 54935</h4>
                <div class="text">
                    <span>0 1223 456 789</span>
                    <span>mail@sofbox.com</span>
                </div>
                <div class="social">
                    <i class="fab fa-facebook-square"></i>
                    <i class="fab fa-twitter-square"></i>
                    <i class="fab fa-github-square"></i>
                    <i class="fab fa-instagram-square"></i>
                </div>
                <h6>Get in Touch</h6>
                <form>
                    <div class="row mb-4">
                        <div class="col">
                            <input type="text" class="form-control" placeholder="Your Name" aria-label="First name">
                        </div>
                        <div class="col">
                            <input type="text" class="form-control" placeholder="Your Email" aria-label="Last name">
                        </div>
                    </div>
                    <div class="col-12 mb-4">
                        <input type="text" class="form-control" id="inputAddress" placeholder="Your Subject">
                    </div>
                    <div class="mb-4">
                        <textarea class="form-control" rows="10" placeholder="Your Message"></textarea>
                    </div>
                    <div class="col-12">
                        <button type="button">Send Message</button>
                    </div>
                </form>
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

        h5 {
            text-align: center;
        }

        p {
            font-size: 14px;
            margin-top: 20px;
            color: grey;
            line-height: 1.7;
            text-align: center;
        }

        .icones {
            display: flex;
            justify-content: space-between;
            margin-top: 40px;

            .maps_left {
                width: 45%;

                .image img {
                    width: 100%;
                    height: auto;
                }
            }

            .icones_right {
                width: 53%;
                display: flex;
                flex-direction: column;

                .logo {
                    width: 20%;

                    img {
                        width: 100%;
                        height: auto;
                    }
                }

                h4 {
                    margin: 30px 0px;
                    font-size: 16px;
                    font-weight: bold;
                }

                .text {
                    display: flex;
                    flex-direction: column;
                    margin-bottom: 30px;

                    span {
                        text-align: left; 
                        font-size: 13px;
                        color: grey;
                        line-height: 2.0;
                    }
                }

                .social {
                    display: flex;
                    justify-content: flex-start;
                }

                h6 {
                    font-size: 25px;
                    margin-bottom: 30px;
                }

                button {
                    background-color: #377DFF;
                    font-size: 14px;
                    border: none;
                    padding: 10px 12px;
                    color: white;
                }
            }
        }
    }
</style>