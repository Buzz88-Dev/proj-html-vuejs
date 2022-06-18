<template>
  <div class="skyrocket">
    <div class="skyrocket_text">
        <h2>Get tips tricks on how to skyrocket your sales.</h2>
        <p>Faff about only a quid blower i don't want no agro bleeding chimney pot burke tosser cras nice one boot fanny.!</p>
        <div class="analysis">
            <div class="analysis.image">
                immagine
            </div>

            <div class="analysis.text">
                <h6>Reporting Analysis</h6>
                <p>It is a long established fact that a reader will be distracted by the reddable content of a page when looking at its layout.</p>
            </div>
        </div>

        <div class="audit">
            <div class="audit.image">
                immagine
            </div>

            <div class="analysis.text">
                <h6>Technical SEO Audit</h6>
                <p>It is a long established fact that a reader will be distracted by the reddable content of a page when looking at its layout.</p>
            </div>
        </div>
    </div>


    <div class="skyrocket_image">
        immagine
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
        justify-content: flex-start;
        // debug
        margin: 100px 0px;

        .skyrocket_text {
            width: 50%;

            .analysis {
                display: flex;

                .analysis.text {
                    display: flex;
                    flex-direction: column;
                }
            }

            .audit {
                display: flex;

                .audit.text {
                    display: flex;
                    flex-direction: column;
                }
            }

        }

        .skyrocket_image {
            width: 50%;
        }
    }
</style>