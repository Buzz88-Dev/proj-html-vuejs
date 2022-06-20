<template>
  <div class="header">
    <div class="navbar">
      <div class="image">
         <img :src="dataHeader[i].path">
      </div>
      <div class="navbar_right">
        <div class="links">
          <ul v-for="(item, index) in dataHeader" :key="index">
            <li v-for="(element, index) in item.linksHeader" :key="index">
              <a>
                {{element.text}}
              </a>
            </li>
          </ul>
        </div>

        <div class="icons">
          <font-awesome-icon icon="fas fa-search" class="ms-5"/>
          <font-awesome-icon icon="fas fa-cart-arrow-down" class="ms-4 me-5"/>
          <button type="button">{{ dataHeader[i].buttonGetStarted }}</button>
        </div>
      </div>
    </div>

    <div class="jumbotron">
      <div class="text_left">
        <h1>{{dataHeader[i].texth1}}</h1>
        <div>
          <p>{{dataHeader[i].textp}}</p>
        </div>
        <button type="button">{{ dataHeader[i].buttonRead }}</button>
      </div>

      <div class="image-right">
      </div>
    </div>:
  </div>
</template>

<script>
export default {
  name: 'Header_Marketing',

  created(){
    this.dataHeader;
    // console.log(this.dataHeader);
    // console.log(this.dataHeader[0].texth1)
    // console.log(this.dataHeader[0].linksHeader)
  },


  data(){
    return {

      i : 0,

      dataHeader : [
        {
          path : require('../assets/logo-2.png'),
          texth1 : "The biggest platform for your growth.",
          textp : "There are many variations of passages of Lorem ipsum available, but the majority have suffered alteration in same form",
          buttonRead : "Read More",
          buttonGetStarted : "Get Started",

          linksHeader : [
            {
                text : "Home",
                url : "#",
            },

            {
                text : "About us",
                url : "#",
            },

            {
                text : "Feature",
                url : "#",
            },

            {
                text : "Testimonials",
                url : "#",
            },

            {
                text : "ContactUS",
                url : "#",
            },
          ],
        }
      ]     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  .header {
    width: 100%;

    .navbar {
      width: 90%;
      margin: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;

        .image {
          width: 3%;

          img {
            width: 100%;
            height: auto;
          }
        }

        .navbar_right {
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            flex-wrap: wrap;
            align-items: center;
            

            .links {
              margin-right: 20px;

              ul {
              list-style-type: none;
              margin: 0;

                li {
                  display: inline-block;
                  margin-left: 50px;

                  a {
                    text-decoration: none;
                    color: black;
                    font-size: 15px;
                    padding-bottom: 18px;

                    &:hover {
                      color: #377DFF;
                      border-bottom: 4px solid #377DFF;
                    }
                  }
                }
              }
            }


            .icons {
              font-size: 12px;


              button {
                background-color: #377DFF;
                font-size: 12px;
                border: none;
                padding: 8px 10px;
                color: white;
              }
            }
        }     
    }



    .jumbotron {
      background-color: #F2f7ff;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      .text_left {
        width: 45%;
        padding: 40px;

        h1 {
          font-size: 50px;
          line-height: 1.5;
        }

        p {
          color: grey;
          font-size: 14px;
          margin: 40px 0px;
          line-height: 2.0;
        }


        button {
          background-color: #377DFF;
          color: white;
          padding: 10px;
          font-size: 12px;
          border: none;
        }
      }

      .image-right {
        width: 50%;
        background-image: url("../assets/27-1.png");
        background-repeat: no-repeat;

      }
    }
  }
</style>
