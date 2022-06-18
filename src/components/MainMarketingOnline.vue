<template>
  <div class="online_marketing">
       <div class="online_marketing_content">
            <div class="computer">
                computer
            </div>
            <div class="online_marketing_content_text">
                <h3>Online Marketing</h3>
                <p>It is a long established fact that a reader will be distracted</p>
                <div class="list">
                    <span>icona</span>
                    <h6>SEO</h6>
                </div>
                <div class="list">
                    <span>icona</span>
                    <h6>SEM</h6>
                </div>
                <div class="list">
                    <span>icona</span>
                    <h6>Website Strategy</h6>
                </div>
                <div class="list">
                    <span>icona</span>
                    <h6>Social management</h6>
                </div>
            </div>
       </div>

       <div class="online_marketing_content">
            <div class="computer">
                computer
            </div>
            <div class="online_marketing_content_text">
                <h3>Online Marketing</h3>
                <p>It is a long established fact that a reader will be distracted</p>
                <div class="list">
                    <span>icona</span>
                    <h6>SEO</h6>
                </div>
                <div class="list">
                    <span>icona</span>
                    <h6>SEM</h6>
                </div>
                <div class="list">
                    <span>icona</span>
                    <h6>Website Strategy</h6>
                </div>
                <div class="list">
                    <span>icona</span>
                    <h6>Social management</h6>
                </div>
            </div>
       </div>

       <div class="online_marketing_content">
            <div class="computer">
                computer
            </div>
            <div class="online_marketing_content_text">
                <h3>Online Marketing</h3>
                <p>It is a long established fact that a reader will be distracted</p>
                <div class="list">
                    <span>icona</span>
                    <h6>SEO</h6>
                </div>
                <div class="list">
                    <span>icona</span>
                    <h6>SEM</h6>
                </div>
                <div class="list">
                    <span>icona</span>
                    <h6>Website Strategy</h6>
                </div>
                <div class="list">
                    <span>icona</span>
                    <h6>Social management</h6>
                </div>
            </div>
       </div>
  </div>
</template>

<script>


export default {
  name: 'MainMarketingOnline',
}

    
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

    .online_marketing {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        // debug
        margin: 100px 0px;

        .online_marketing_content {
            display: flex;
            justify-content: flex-start;

            .computer {
                width: 20%;
            }

            .online_marketing_content_text {
                width: 80%;
                display: flex;
                flex-direction: column;

                .list {
                    display: flex;
                }
            }
        
        }
    }

</style>