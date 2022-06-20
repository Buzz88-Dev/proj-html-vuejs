<template>
  <div class="skyrocket">
    <div class="skyrocket_text">
        <h2>Get tips tricks on how to skyrocket your sales.</h2>
        <p>Faff about only a quid blower i don't want no agro bleeding chimney pot burke tosser cras nice one boot fanny.!</p>
        <div class="analysis">
            <div class="analysis_image">
                <img src="../assets/510.png" alt="">
            </div>

            <div class="analysis_text">
                <h6>Reporting Analysis</h6>
                <p>It is a long established fact that a reader will be distracted by the reddable content of a page when looking at its layout.</p>
            </div>
        </div>

        <div class="audit">
            <div class="audit_image">
                <img src="../assets/511.png" alt="">
            </div>

            <div class="audit_text">
                <h6>Technical SEO Audit</h6>
                <p>It is a long established fact that a reader will be distracted by the reddable content of a page when looking at its layout.</p>
            </div>
        </div>
    </div>


    <div class="skyrocket_image">
        <div class="image">
            <img src="../assets/509.jpeg" alt="">
        </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'MainMarketingSkyrocket',
}

    
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .skyrocket {
        display: flex;
        justify-content: space-between;
        margin-top: 100px;

        .skyrocket_text {
            width: 50%;

            h2 {
                width: 80%;
                line-height: 1.6;
                margin-bottom: 20px;
            }

            p {
                font-size: 15px;
                color: grey;
                line-height: 1.7;
            }

            .analysis {
                display: flex;
                align-items: center;
                margin-top: 50px;
                padding: 20px 5px;
                box-shadow: 5px 15px 20px #dedede;
                border: none;

                .analysis_image {
                    width: 20%;
                    text-align: center;

                    img {
                        width: 80%;
                        height: auto;
                    }
                }

                .analysis_text {
                    display: flex;
                    flex-direction: column;
                    margin-left: 10px;

                    h6 {
                        font-weight: bold;
                    }

                    h6:hover {
                        color: #377DFF;
                        cursor: pointer;
                    }

                    p {
                        font-size: 14px;
                        color: grey;
                    }
                }
            }

            .audit {
                display: flex;
                align-items: center;
                margin-top: 30px;
                padding: 20px 5px;

                .audit_image {
                    width: 20%;
                    text-align: center;

                    img {
                        width: 80%;
                        height: auto;
                    }
                }

                .audit_text {
                    display: flex;
                    flex-direction: column;
                    margin-left: 10px;

                    h6 {
                        font-weight: bold;
                    }

                    h6:hover {
                        color: #377DFF;
                        cursor: pointer;
                        font-weight: bold;
                    }

                    p {
                        font-size: 14px;
                        color: grey;
                    }
                }
            }

        }
        .skyrocket_image {
            width: 50%;

            .image {
                text-align: right;

                img {
                    width: 90%;
                    height: auto;
                }
            }
        }
    }
</style>