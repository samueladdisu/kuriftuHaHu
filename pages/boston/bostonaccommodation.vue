<template>
  <div class="main">
    <Destinationheader />
    <div class="destination-links">
      <div class="container">
        <div class="wrapper">
          <ul class="link-destination">
            <li>
              <nuxt-link class="a-link active">Entoto</nuxt-link
              ><img src="../../assets/image/Icons/next2.svg" alt="" />
            </li>
            <li>
              <nuxt-link class="a-link active" to="entotoaccommodation">
                <p>Accomodation</p>
                <hr class="activeline" />
              </nuxt-link>
            </li>
            <li>
              <nuxt-link class="a-link" to="entotoexperience"
                >Experiences</nuxt-link
              >
            </li>
            <li>
              <nuxt-link class="a-link" to="entotowellness">Wellness</nuxt-link>
            </li>
            <li>
              <nuxt-link class="a-link" to="entotodining">Dining</nuxt-link>
            </li>
            <li>
              <nuxt-link class="a-link" to="entotoevent"
                >Celebration & Events</nuxt-link
              >
            </li>
            <li>
              <nuxt-link class="a-link" to="entotogallery">Gallery</nuxt-link>
            </li>

            <li>
              <nuxt-link class="a-link" to="/reserve">Reserve</nuxt-link>
            </li>
          </ul>
          <hr class="line" />
        </div>
      </div>
    </div>
    <section class="entoto-general">
      <div class="container">
        <div class="main-title">
          <h2>Entoto National Park</h2>
          <p>
            This Adventure Park is the first of its kind in Ethiopia and has
            even been selected as one of the top destinations in the world by
            Conde Nast Traveler. Our park is absolutely beyond comparable and is
            a must for national park enthusiasts. You can come accros a variety
            of landscapes which offer some incredible hiking experiances.
          </p>
        </div>
        <Entotoslide />

        <div class="tabs">
          <div class="tabs-container" @click="tabs">
            <div class="tab a"></div>
            <div class="tab b"></div>
            <div class="tab c"></div>
            <div class="active"></div>
          </div>
        </div>
      </div>
    </section>
    <section class="accomondation">
      <div class="container">
        <div class="recommended">
          <hr class="rec-line" />
          <p>recommended</p>
        </div>
        <div class="accomondation-room">
          <div class="single-accomondation">
            <img src="../../assets/image/tent2.jpg" alt="" />
            <div class="room-name">
              <h4>Tent</h4>
            </div>
            <div class="room-desc">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Facilisis tincidunt nisl elementum ultrices luctus habitasse. Ut
                orci nam lectus at massa enim elementum varius dictumst. Nulla
                a, sed enim turpis non lacinia fusce.massa enim elementum varius
                dictumst. Nulla a, sed enim turpis non lacinia fusce.
              </p>
            </div>
            <div class="book-buttons">
              <a class="btn btn-primary" href="#">BOOK NOW</a>
            </div>
          </div>
          <div class="single-accomondation">
            <img src="../../assets/image/tent.jpg" alt="" />
            <div class="room-name">
              <h4>Tent</h4>
            </div>
            <div class="room-desc">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Facilisis tincidunt nisl elementum ultrices luctus habitasse. Ut
                orci nam lectus at massa enim elementum varius dictumst. Nulla
                a, sed enim turpis non lacinia fusce.massa enim elementum varius
                dictumst. Nulla a, sed enim turpis non lacinia fusce.
              </p>
            </div>
            <div class="book-buttons">
              <a class="btn btn-primary" href="#">BOOK NOW</a>
            </div>
          </div>
          <div class="single-accomondation">
            <img src="../../assets/image/entoto-bg.jpg" alt="" />
            <div class="room-name">
              <h4>Tent</h4>
            </div>
            <div class="room-desc">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Facilisis tincidunt nisl elementum ultrices luctus habitasse. Ut
                orci nam lectus at massa enim elementum varius dictumst. Nulla
                a, sed enim turpis non lacinia fusce.massa enim elementum varius
                dictumst. Nulla a, sed enim turpis non lacinia fusce.
              </p>
            </div>
            <div class="book-buttons">
              <a class="btn btn-primary" href="#">BOOK NOW</a>
            </div>
          </div>
          <div class="single-accomondation">
            <img src="../../assets/image/tent2.jpg" alt="" />
            <div class="room-name">
              <h4>Tent</h4>
            </div>
            <div class="room-desc">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Facilisis tincidunt nisl elementum ultrices luctus habitasse. Ut
                orci nam lectus at massa enim elementum varius dictumst. Nulla
                a, sed enim turpis non lacinia fusce.massa enim elementum varius
                dictumst. Nulla a, sed enim turpis non lacinia fusce.
              </p>
            </div>
            <div class="book-buttons">
              <a class="btn btn-primary" href="#">BOOK NOW</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.main {
  .destination-links {
    display: none;
  }
  @include responsive($lg) {
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
                font-weight: 600;
              }
            }
            .activeline {
              margin-top: 0.6rem;
              margin-bottom: -1.1rem;
              color: $kuriftu-black;
              opacity: 1;
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
  .entoto-general {
    margin-top: 5rem;
    @include responsive($lg) {
      margin-top: 8rem;
    }
    .container {
      .main-title {
        display: grid;
        place-items: center;
        h2 {
          text-align: center;
          font-size: 1.5rem;
          font-weight: 600;
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
  .accomondation {
    .container {
      .recommended {
        display: flex;
        align-items: center;
        gap: 2rem;
        hr {
          border-style: solid;
          color: $kuriftu-grey;
          opacity: 0.5;

          width: 100%;
        }
        p {
          font-size: 0.7rem;
          text-transform: uppercase;
          color: $kuriftu-grey;
        }
      }
      .accomondation-room {
        margin-top: 3rem;
        display: grid;
        @include responsive($md) {
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }
        @include responsive($xl) {
          gap: 8rem;
        }
        .single-accomondation {
          margin-top: 2.88rem;
          img {
            @include responsive($md) {
              width: 20rem;
              height: 15rem;
              object-fit: cover;
            }

            @include responsive($lg) {
              width: 100%;
              height: 20rem;
            }

            @include responsive($xl) {
              height: 28rem;
            }
          }
          .room-name {
            h4 {
              font-size: 1.5rem;
              font-weight: 600;
              margin-top: 1.88rem;
              color: $kuriftu-black;
            }
          }
          .room-desc {
            p {
              @extend .text;
              margin-top: 0.94rem;
              color: $kuriftu-black;
              font-size: 0.88rem;
              text-align: left;
              @include responsive($md) {
                width: 20rem;
              }
              @include responsive($lg) {
                width: 26rem;
              }
              @include responsive($xl) {
                width: 30rem;
              }
            }
          }
          .book-buttons {
            margin-top: 1.88rem;
            @include responsive($lg) {
              margin-top: 3rem;
            }
          }
        }
      }
    }
  }
}
</style>

