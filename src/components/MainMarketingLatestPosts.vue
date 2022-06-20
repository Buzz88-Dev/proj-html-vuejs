<template>
   <div class="latest_posts">
    <h5>{{ dataLatestPost.texth5 }}</h5>
    <p>{{ dataLatestPost.textp }}</p>
    <div class="icones">
        <div v-for="(item, index) in dataLatestPost.icona" :key="index" :class="dataLatestPost.classeIcona">
          <div :class="dataLatestPost.classeImage">
            <img :src="item.pathimage">
          </div>
          <h6>{{ dataLatestPost.texth6 }}</h6>
          <div :class="dataLatestPost.classText">
            <p>{{item.textp}}</p>
          </div>
        </div>
    </div>
  </div>    
</template>

<script>
export default {
  name: 'MainMarketingLatestPosts',

  data(){
    return {
      dataLatestPost : {
        texth5 : "Latest Posts",
        textp : "If you are planning on developing a product landing.",
        classeIcona : "single_icone",
        classeImage : "image",
        texth6 : "Life Lack Meaning",
        classText : "text",

        icona : [
          {
            pathimage : require('../assets/19.jpg'),
            textp : "It is a long established fact that a reader will be  distracted by the readable",
          },

          {
            pathimage : require('../assets/18.jpg'),
            textp : "It is a long established fact that a reader will be  distracted by the readable",
          },

          {
            pathimage : require('../assets/17.jpg'),
            textp : "It is a long established fact that a reader will be  distracted by the readable",
          },
        ]
      }
    }
  }
}

    
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .latest_posts {
    margin-top: 100px;
    text-align: center;

    p {
      font-size: 14px;
      margin-top: 20px;
      color: grey;
      line-height: 1.7;
    }

    .icones {
      display: flex;
      justify-content: space-between;
      margin-top: 40px;

        .single_icone {
          display: flex;
          flex-direction: column;
          width: calc(33% - 3%);
          border: 1px solid rgb(228, 220, 220);
          padding: 10px 15px;

          .image img {
            width: 100%;
            height: auto;
          }

          h6 {
            font-size: 20px;
            text-align: left;
            margin-top: 20px;
          }

          .text {
            width: 80%;

            p {
              text-align: left;
            }
          }
        }
    }
  }
</style>