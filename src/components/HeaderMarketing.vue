<template>
  <div class="header">
    <div class="navbar">

      <img src="../assets/logo-2.png" alt="">

      <div class="navbar_right">
        <div class="links">
          <ul v-for="(item, index) in dataHeader" :key="index">
            <li v-for="(element, index) in item.linksHeader" :key="index">
              <a :class="(element.cursor === true) ? 'here_blue' : ''">
                {{element.text}}
              </a>
            </li>
          </ul>
        </div>

        <div class="icons">
          <font-awesome-icon icon="fas fa-search" />
          <font-awesome-icon icon="fas fa-cart-arrow-down" />
          <button>{{ dataHeader[i].buttonGetStarted }}</button>
        </div>
      </div>
    </div>

    <div class="jumbotron">
      <div class="text_left">
        <h1>{{dataHeader[i].texth1}}</h1>
        <p>{{dataHeader[i].textp}}</p>
        <button>{{ dataHeader[i].buttonRead }}</button>
      </div>

      <div class="image-right">
        <img src="../assets/508.jpeg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header_Marketing',

  props: {
  },

  methods: {

  },

  created(){
    this.dataHeader;
    console.log(this.dataHeader);
    console.log(this.dataHeader[0].texth1)
    console.log(this.dataHeader[0].linksHeader)
  },


  data(){
    return {

      i : 0,

      dataHeader : [
        {
          texth1 : "The biggest platform for your growth.",
          textp : "There are many variations of passages of Lorem ipsum available, but the majority have suffered alteration in same form",
          buttonRead : "Read More",
          buttonGetStarted : "Get Started",

          linksHeader : [
            {
                text : "Home",
                url : "#",
                cursor: true
            },

            {
                text : "About us",
                url : "#",
                cursor: false
            },

            {
                text : "Feature",
                url : "#",
                cursor: false
            },

            {
                text : "Testimonials",
                url : "#",
                cursor: false
            },

            {
                text : "ContactUS",
                url : "#",
                cursor: false
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
    background-color: red;

    .navbar {
      width: 90%;
      height: 50px;
      margin: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      background-color: green;

        img {
          width: 10%;
          height: 100%;
        }

        .navbar_right {
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            flex-wrap: wrap;

            .links {
              margin-right: 20px;

              ul {
              list-style-type: none;

                li {
                  display: inline-block;

                  a {
                    text-decoration: none;
                    color: black;

                    &:hover {
                      color: blue;
                    }

                    &.here_blue {
                      border-bottom: 2px solid blue;
                    }
                  }
                }
              }
            }
        }     
    }



    .jumbotron {
      height: 400px;
      background-color: rgb(175, 220, 220);
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;

      .text_left {
        width: 50%;
        padding: 30px 20px;

        h1 {
          font-size: 40px;
          line-height: 1.5;
        }

        p {
          color: grey;
          font-size: 12px;
          margin: 40px 0px;
        }

        button {
          background-color: blue;
          color: white;
          padding: 10px;
        }
      }

      .image-right {
        width: 50%;

        img {
          width: 100%;
          height: auto;        }
      }
    }
  }
</style>
