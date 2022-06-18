<template>
   <div class="latest_posts">
    <h5>Latest Posts</h5>
    <p>If you are planning on developing a product landing.</p>
    <div class="icones">
        <div class="single_icone">
            <span>immagine</span>
            <h6>Life Lack Meaning</h6>
            <p>It is a long established fact that a reader will be  distracted by the readable</p>
        </div>

         <div class="single_icone">
            <span>immagine</span>
            <h6>Life Lack Meaning</h6>
            <p>It is a long established fact that a reader will be  distracted by the readable</p>
        </div>

         <div class="single_icone">
            <span>immagine</span>
            <h6>Life Lack Meaning</h6>
            <p>It is a long established fact that a reader will be  distracted by the readable</p>
        </div>
    </div>
  </div>    
</template>

<script>


export default {
  name: 'MainMarketingLatestPosts',
}

    
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .latest_posts {
    margin: 100px 0;

    h5, p {
      text-align: center;
    }

    .icones {
      display: flex;
      justify-content: flex-start;

        .single_icone {
          display: flex;
          flex-direction: column;
        }
    }
  }
</style>