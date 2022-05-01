<template>
  <div class="main">
   <Destinationheader :src="require(`../assets/image/Icons/waterpark.svg`)" />
        <div class="destination-links2">
      <div class="container">
        <div class="wrapper">
          <ul class="link-destination">
            <li>
              <nuxt-link class="a-link active" to="/destinationwaterpark"
                ><p>Water Park</p>
                <img
                  class="drop-icon"
                  src="../assets/image/Icons/next2.svg"
                  alt=""
              /></nuxt-link>

              <ul class="dropdown-content">
                <div class="drop-down-list">
                     
            <li><nuxt-link  class="a-link " to="waterpark/waterparkexperience">Experiences</nuxt-link></li>
        
            <li><nuxt-link  class="a-link " to="waterpark/waterparkdining">Dining</nuxt-link></li>
            <li><nuxt-link  class="a-link " to="waterpark/waterparkevent">Celebration & Events</nuxt-link></li>
             <li><nuxt-link class="a-link " to="waterpark/waterparkgallery">Gallery</nuxt-link></li>
            <li> <nuxt-link class="a-link" to="/book">Reserve</nuxt-link></li>
         
                </div>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="destination-links">
      <div class="container">
        <div class="wrapper">
          <ul class="link-destination">
            <li>
              <nuxt-link class="a-link active" to="/destinationwaterpark">Water Park</nuxt-link
              ><img src="../assets/image/Icons/next2.svg" alt="" />
            </li>
           
           
            <li><nuxt-link  class="a-link " to="waterpark/waterparkexperience">Experiences</nuxt-link></li>
        
            <li><nuxt-link  class="a-link " to="waterpark/waterparkdining">Dining</nuxt-link></li>
            <li><nuxt-link  class="a-link " to="waterpark/waterparkevent">Celebration & Events</nuxt-link></li>
             <li><nuxt-link class="a-link " to="waterpark/waterparkgallery">Gallery</nuxt-link></li>
            <li> <nuxt-link class="a-link" to="/book">Reserve</nuxt-link></li>
          </ul>
          <hr class="line" />
        </div>
      </div>
    </div>
    <section class="display-video">
      <div class="container">
        <div class="video-wrapper">
          <img src="../assets/image/water-cover.jpg"  alt="" />
        </div>
      </div>
    </section>
    <section class="main-page-desc">
      <div class="container">
        <div class="wrapper">
          <div class="main-title">
            <h2>Water Park</h2>
            <p>
              This Adventure Park is the first of its kind in Ethiopia and has
              even been selected as one of the top destinations in the world by
              Conde Nast Traveler. Our park is absolutely beyond comparable and
              is a must for national park enthusiasts. You can come accros a
              variety of landscapes which offer some incredible hiking
              experiances.
            </p>
          </div>
          <Waterparkslide />

          <div class="tabs">
            <div class="tabs-container" @click="tabs">
              <div class="tab a"></div>
              <div class="tab b"></div>
              <div class="tab c"></div>
              <div class="active"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="spa-special-offer">
      <div class="container">
        <div class="special-offer-all">
          <div class="special-slide" data-aos="slide-up">
            <!-- <div class="back-icon">
              <img src="../../assets/image/Icons/spaback.svg" alt="" />
            </div> -->
            <div class="slide-card">
              <img src="../assets/image/DJI_0384 (3)-min.jpg" alt="" />
            </div>
            <!-- <div class="next-icon">
              <img src="../../assets/image/Icons/spanext.svg" alt="" />
            </div> -->
          </div>
          <div class="gift-desc" data-aos="slide-up">
            <h3>special offer</h3>
            <h4>Gift Vouchers</h4>
            <p class="header-title">
              Treat your loved ones to Ethiopia’s greatest family destination
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
              tincidunt nisl elementum ultrices luctus habitasse. Ut orci nam
              lectus at massa enim elementum varius dictumst. Nulla a, sed enim
              turpis non lacinia fusce. Quis volutpat sit ullamcorper vitae
              magna vel sit pharetra scelerisque.
            </p>
            <div class="book-buttons">
              <a class="btn btn-outline-black" href="#">GET OFFERS</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="gallery">
      <div class="container">
        <div class="gallery-wrapper">
           <nuxt-link to="waterpark/waterparkgallery">
          <div class="gallery-frist-img">
            <img src="../assets/image/_DSC5728 (2)-min.jpg" alt="" />
          </div>
           </nuxt-link>
           
          <div class="gallery-imgs">
             <nuxt-link to="waterpark/waterparkgallery">
            <div class="gallery-img">
              <img src="../assets/image/_DSC5784 (2)-min.jpg" alt="" />
            </div>
           </nuxt-link>
            <nuxt-link to="waterpark/waterparkgallery">
            <div class="gallery-img">
              <img src="../assets/image/waterpark2.jpg" alt="" />
            </div>
           </nuxt-link>
          </div>
        </div>
      </div>
    </section>

    <div class="experience">
      <div class="container">
        <div class="exper-wrapper">
          <div class="ex-title">
            <h2>Experience</h2>
            <div class="view">
              <nuxt-link to="waterpark/waterparkexperience"
                >View Experience
                <hr class="lower-line"
              /></nuxt-link>
            </div>
          </div>
          <div class="exper-card" data-aos="slide-up">
            <nuxt-link  to="waterpark/waterparkexperience">   <div class="exper-single-card">
              <div class="exper-img">
                <img src="../assets/image/waterpark2.jpg" alt="" />
              </div>
              <div class="exper-title">
                <h3>Boomerang Pool</h3>
              </div>
              <div class="exper-desc">
                <p>
                Whatever thrills you seek, you’ll find all sorts of ways to fill...
                </p>
              </div>
            </div></nuxt-link>
          <nuxt-link  to="waterpark/waterparkexperience">   <div class="exper-single-card">
              <div class="exper-img">
                <img src="../assets/image/waterpark.jpg" alt="" />
              </div>
              <div class="exper-title">
                <h3>Triple Spiral Ride</h3>
              </div>
              <div class="exper-desc">
                <p>
                 Hang on tight! Family fun is what we’re all about and the small...
                </p>
              </div>
            </div></nuxt-link>
          <nuxt-link to="waterpark/waterparkexperience"> <div class="exper-single-card">
              <div class="exper-img">
                <img src="../assets/image/waterpark2.jpg" alt="" />
              </div>
              <div class="exper-title">
                <h3>Fekat Circus</h3>
              </div>
              <div class="exper-desc">
                <p>
                 Join fekat circus for a fascinating experience...
                </p>
              </div>
            </div> </nuxt-link>
           
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
import Event from "../components/Event.vue";
export default {
  mounted() {
    AOS.init({
      duration: 1500,
      offset: 120,
      easing: "ease",
      once: false,
      anchorPlacement: "top-bottom",
    });
  },
};
</script>

<style lang="scss" scoped>
.main {
  header {
    width: 100%;
    height: 10vh;
    position: relative;

    &::after {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgb(0, 6, 27);
    }
    nav {
      z-index: 999;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;

      .top-nav {
        position: sticky;
        top: 0;
        bottom: 0;
        width: 90%;
        margin: 0 auto;
      }
      .container {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        .menu-line {
          margin-top: 1rem;
          cursor: pointer;
          .line {
            hr {
              margin: auto;
              margin-top: 1rem;
              color: $kuriftu-black;
              // height: 10rem;
              width: 2.35rem;
            }
          }
        }
        .logo {
          margin-top: 1rem;
          width: 9rem;
          @include responsive($md) {
            width: 11rem;
          }
        }
        .nav-book-button {
          display: none;
        }
      }
    }
  }
  @include responsive($lg) {
    header {
      nav {
        .container {
          align-items: center;

          .nav-book-button {
            margin-top: 1rem;
            display: block;
            .wrapper {
              display: flex;
              gap: 1rem;
              .social {
                display: flex;
                gap: 0.5rem;
                .icon {
                  width: 1rem;
                }
              }
            }
          }
        }
      }
    }
  }
  .destination-links {
    display: none;
  }
    .destination-links2 {
    .container {
      .wrapper {
        .link-destination {
          display: grid;
          // place-content: center;
          margin-top: 4rem;
          gap: 3rem;
          position: relative;

          li {
            display: flex;
            align-items: flex-start;

            .a-link {
              color: $kuriftu-grey;
              font-size: 0.88rem;
              display: flex;
              align-items: center;
              .drop-icon {
                transform: rotate(90deg);
              }
            }

            .active {
              color: $kuriftu-black;
            }
            .dropdown-content {
              display: none;
              position: absolute;
              top: 25px;
              left:0px;
              // @include responsive($md){
              //   left: 15rem;
              // }
              border: 1px solid #efefef;
              background: $kuriftu-white;
              border-radius: 0.4em;
              min-width: 200px;
              box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
              padding: 12px 12px;
              z-index: 999;
              .drop-down-list {
                // display: grid;
                // grid-template-columns: 1fr 1fr 1fr;
                // gap: .3rem;
                li {
                  margin-left: 0.3rem;
                  margin-top: 0.5rem;
  
                  .a-link {
                    color: $kuriftu-grey;
                    font-size: 0.88rem;
                  }
                  .drop-icon {
                    transform: rotate(90deg);
                  }
                  .active {
                    color: $kuriftu-black;
                  }
                }
              }
            }
          }
          li:hover .dropdown-content {
            display: block;
          }
        }
      }
    }
  }
  @include responsive($lg) {
    .destination-links2 {
      display: none;
    }
    .destination-links {
      display: block;
      .container {
        .wrapper {
          .link-destination {
            display: flex;
            margin-top: 4rem;
            gap: 3rem;
            place-content: center;
            li {
              display: flex;
              align-items: center;
              .a-link {
                color: $kuriftu-grey;
                font-size: 0.88rem;
              }
              .active {
                color: $kuriftu-black;
              }
            }
          }
          .line {
            // border-style:solid ;
            color: $kuriftu-grey;
            @include responsive($xl) {
              width: 60rem;
            }
            margin-top: 0.6rem;
            opacity: 0.7;
          }
        }
      }
    }
  }
  @include responsive($lg) {
    .destination-links2 {
      display: none;
    }
    .destination-links {
      display: block;
      .container {
        .wrapper {
          .link-destination {
            display: flex;
            margin-top: 4rem;
            gap: 3rem;
            place-content: center;
            li {
              display: flex;
              align-items: center;
              .a-link {
                color: $kuriftu-grey;
                font-size: 0.88rem;
              }
              .active {
                color: $kuriftu-black;
              }
            }
          }
          .line {
            // border-style:solid ;
            color: $kuriftu-grey;
            @include responsive($xl) {
              width: 60rem;
            }
            margin-top: 0.6rem;
            opacity: 0.7;
          }
        }
      }
    }
  }
  .display-video {
    margin-top: 4rem;
  }
  @include responsive($md) {
    .display-video {
      margin-top: 5rem;
    }
  }
  .main-page-desc {
    margin-top: 5rem;
    .container {
      .wrapper {
        .main-title {
          display: grid;
          place-items: center;
          h2 {
            text-align: center;
            font-size: 1.5rem;
          }
          p {
            text-align: center;
            color: $kuriftu-grey;
            width: 20rem;
            margin-top: 1rem;
            font-size: 0.8rem;
          }
          @include responsive($md) {
            h2 {
              font-size: 2rem;
            }
            p {
              width: 40rem;
              font-size: 1rem;
            }
          }
        }
        .tabs {
          margin: 1.88rem auto 6.25rem;
          // background: lightblue;
          display: grid;
          place-items: center;
          width: 100%;
          margin-top: 4rem;
          .tabs-container {
            display: flex;
            position: relative;
            .active {
              position: absolute;
              top: 0;
              height: 0.25rem;
              width: 5.94rem;
              transform: translate(100%, -30%);
              background: $kuriftu-black;
            }
            .tab {
              height: 0.13rem;
              width: 5.94rem;
              background: #c4c4c4;
            }
          }
        }
      }
    }
  }
  .spa-special-offer {
    margin-top: 6.25rem;
    .container {
      h2 {
        color: $kuriftu-black;
        @extend .title;
        margin-top: 0.94rem;
        text-align: left;
      }
      .special-offer-all {
        display: grid;
        place-items: center;
        // margin: 0 auto;
        // width: 20rem;
        .special-slide {
          display: flex;
          align-items: center;
          justify-items: center;
          gap: 0.5rem;
          .back-icon,
          .next-icon {
            img {
              width: 2rem;
            }
          }
        }
        .gift-desc {
          margin-top: 1.88rem;
          margin-left: 1rem;
          margin: 0 auto;
          width: 20rem;
          h3 {
            @extend .nav;
            margin-top: 0.94rem;
            font-size: 0.7rem;
            letter-spacing: 0.2rem;
            line-height: 0.5rem;
            margin-bottom: 0.5rem;
            font-weight: 600;
            text-transform: uppercase;
            color: $kuriftu-grey;
          }
          h4 {
            @extend .title;
            margin-top: 1.88rem;
            color: $kuriftu-black;
          }
          .header-title {
            color: $kuriftu-grey;
          }
          p {
            @extend .text;
            margin-top: 0.94rem;
            color: $kuriftu-black;
            font-size: 0.88rem;
            text-align: left;
          }
          .book-buttons {
            display: flex;
            justify-content: left;

            margin-top: 1.88rem;
          }
        }
      }
    }
  }
  @include responsive($md) {
    .spa-special-offer {
      // width: 100%;
      .container {
        .special-offer-all {
          .special-slide {
            .slide-card {
              img {
                width: 25rem;
              }
            }
          }
          .gift-desc {
            width: 25rem;
            // margin-left: 5rem;
            // margin-right: 5rem;
          }
        }
      }
    }
  }
  @include responsive($lg) {
    .spa-special-offer {
      margin-top: 8.13rem;
      .container {
        .special-offer-all {
          display: flex;

          .special-slide {
            .slide-card {
              img {
                width: 25rem;
              }
            }

            .next-icon,
            .back-icon {
              img {
                width: 2rem;
              }
            }
          }
          .gift-desc {
            margin-left: 1rem;
            margin-right: 1rem;
            margin: 0 auto;
            width: 25rem;
            .book-buttons {
              display: flex;
              justify-content: left;

              margin-top: 1.88rem;
            }
          }
        }
      }
    }
  }
  @include responsive($xl) {
    .spa-special-offer {
      .container {
        .special-offer-all {
          display: flex;
          align-items: flex-start;
          .special-slide {
            .slide-card {
              img {
                width: 30rem;
              }
            }
          }
          .gift-desc {
            margin-left: 2rem;
            margin-right: 2rem;
            width: 30rem;
          }
        }
      }
    }
  }
  .gallery {
    .container {
      h2 {
        color: $kuriftu-black;
        @extend .title;
        margin-top: 0.94rem;
      }
      .gallery-wrapper {
        .gallery-frist-img {
          margin-top: 0.94rem;
        }
        .gallery-imgs {
          .gallery-img {
            margin-top: 0.94rem;
          }
        }
      }
    }
  }
  @include responsive($md) {
    .gallery {
      .container {
        .gallery-wrapper {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          gap: 1rem;
          .gallery-frist-img {
            margin-top: 1rem;
            img {
              width: 50rem;
              height: 38rem;
              object-fit: cover;
            }
          }
          .gallery-imgs {
            .gallery-img {
              margin-top: 1rem;
              img {
                width: 30rem;
                height: 18rem;
                object-fit: cover;
              }
            }
          }
        }
      }
    }
  }
  @include responsive($lg) {
    .gallery {
      margin-top: 8.13rem;
      .container {
        .gallery-wrapper {
          gap: 2rem;

          margin-top: 4.37rem;
          .gallery-frist-img {
            margin-top: 2rem;
            img {
              width: 55rem;
            }
          }
          .gallery-imgs {
            .gallery-img {
              margin-top: 2rem;
              img {
                width: 55rem;
              }
            }
          }
        }
      }
    }
  }
  .spa-wellness {
    margin-top: 5rem;

    .container {
      display: grid;
      place-items: center;
      h2 {
        text-align: center;
        font-size: 1.5rem;
      }
      p {
        text-align: center;
        color: $kuriftu-grey;
        width: 20rem;
        margin-top: 1rem;
        font-size: 0.8rem;
      }
      .gallery-wrapper {
        margin-top: 2rem;
        .gallery-frist-img {
          margin-top: 0.94rem;
        }
        .gallery-imgs {
          .gallery-img {
            margin-top: 0.94rem;
          }
        }
      }
    }
  }
  @include responsive($md) {
    .spa-wellness {
      margin-top: 8rem;
      .container {
        h2 {
          font-size: 2rem;
        }
        p {
          width: 40rem;
        }
        .gallery-wrapper {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          gap: 1rem;

          .gallery-frist-img {
            margin-top: 1rem;
            img {
              width: 50rem;
              height: 29.68rem;
              object-fit: cover;
            }
          }
          .gallery-imgs {
            .gallery-img {
              margin-top: 1rem;
              img {
                width: 30rem;
                height: 14.3rem;
                object-fit: cover;
              }
            }
          }
        }
      }
    }
  }
  @include responsive($lg) {
    .spa-wellness {
      margin-top: 8.13rem;
      .container {
        .gallery-wrapper {
          gap: 2rem;

          margin-top: 4.37rem;
          .gallery-frist-img {
            margin-top: 2rem;
            img {
              width: 55rem;
              height: 42rem;
              object-fit: cover;
            }
          }
          .gallery-imgs {
            .gallery-img {
              margin-top: 2rem;
              img {
                width: 40rem;
                height: 20rem;
                object-fit: cover;
              }
            }
          }
        }
      }
    }
  }
  .experience {
    margin-top: 5rem;
    .container {
      .exper-wrapper {
        .ex-title {
          display: flex;
          justify-content: space-between;
          align-content: center;
          h2 {
            text-align: center;
            font-size: 1.5rem;
            @include responsive($md) {
              font-size: 2rem;
            }
          }
          .view {
            a {
              font-size: 0.8rem;
              color: $kuriftu-grey;
              .lower-line {
                opacity: 0.7;
                border-style: solid;

                @include responsive($md) {
                  width: 8rem;
                }
              }
            }
          }
        }
        .exper-card {
          margin-top: 1.88rem;
          @include responsive($md) {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
          }
          @include responsive($lg) {
            grid-template-columns: 1fr 1fr 1fr;
          }
          .exper-single-card {
            margin-top: 2rem;
            .exper-img {
              position: relative;
              img {
                height: 15rem !important;
                min-width: 15rem;
                object-fit: cover;
                object-position: center center;
                @include responsive($xl) {
                  height: 25rem !important;
                  width: 30rem;
                }
              }
            }
            .exper-title {
              background: $kuriftu-yellow;
              padding: 0.8rem;
              width: 14rem;
              min-width: 11.31rem;
              position: absolute;

              margin-top: -3.24rem;
              @include responsive($lg) {
                margin-top: -3.23rem;
              }
              h3 {
                color: $kuriftu-grey;
                @extend .caps;

                text-align: center;
              }
            }
            .exper-desc {
              width: 85%;
              background: #fff;
              padding: 1rem;
              @include responsive($md) {
                width: 90%;
              }
              p {
                @extend .text;

                color: $kuriftu-grey;
                font-size: 0.8rem;
                line-height: 1.3rem;
                text-align: left;
              }
            }
          }
        }
      }
    }
  }

}
</style>
