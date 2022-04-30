<template>
  <footer class="footer">
    <div class="container">
      <section class="footer-wrapper">
        <div class="footer-link-container">
          <div class="upper">
            <div class="desti">
              <h3 class="desti-title">Destination</h3>
              <ul class="desti-list">
                <div>
                  <li class="footer-link">  <nuxt-link class="footer-a-link " to="/destinationbishoftu">Bishofitu</nuxt-link>
                  <li class="footer-link"><nuxt-link class="footer-a-link " to="/destinationawash">Awash</nuxt-link></li>
                  <li class="footer-link"><nuxt-link class="footer-a-link " to="/destinationentoto">Entoto</nuxt-link></li>
                  <li class="footer-link"><nuxt-link class="footer-a-link " to="/destinationlaketana">Lake Tana</nuxt-link>></li>
                  <li class="footer-link"><nuxt-link class="footer-a-link " to="/destinationafar">Afar</nuxt-link></li>
                  
                  <li class="footer-link"><nuxt-link class="footer-a-link " to="/destinationwaterpark">Water Park</nuxt-link></li>
                        <li class="footer-link"><nuxt-link class="footer-a-link " to="/destinationboston">Boston Day Spa</nuxt-link></li>
                </div>

                <div></div>
              </ul>
            </div>

            <div class="desti">
              <h3 class="desti-title">Wellness</h3>
              <ul class="desti-list">
                <div>
                  <li class="footer-link"><nuxt-link class="footer-a-link " to="/destinationboston">Spa</nuxt-link></li>
                  <li class="footer-link"><nuxt-link class="footer-a-link " to="/destinationboston">Pool</nuxt-link></li>
                         <li class="footer-link"><nuxt-link class="footer-a-link " to="/destinationboston">Gym</nuxt-link></li>
                  <li class="footer-link"><nuxt-link class="footer-a-link " to="/destinationboston">Hair Salon</nuxt-link></li>
                  <li class="footer-link"><nuxt-link class="footer-a-link " to="/destinationboston">Maincure</nuxt-link></li>
                    <li class="footer-link"><nuxt-link class="footer-a-link " to="/destinationboston">Pedicure</nuxt-link></li>
                 
              
                </div>

                <div></div>
              </ul>
            </div>

            <div class="desti">
              <h3 class="desti-title">Experience</h3>
              <ul class="desti-list">
                <div>
                  <li class="footer-link"><nuxt-link class="footer-a-link " to="/destinationbishoftu">Kayaking</nuxt-link></li>
                  <li class="footer-link"><nuxt-link class="footer-a-link " to="entoto/entotoexperience">Archery</nuxt-link ></li>
                  <li class="footer-link"><nuxt-link class="footer-a-link " to="entoto/entotoexperience">Rope Course</nuxt-link></li>
                  <li class="footer-link"><nuxt-link class="footer-a-link " to="entoto/entotoexperience">Paintball </nuxt-link ></li>
                  <li class="footer-link"><nuxt-link class="footer-a-link " to="entoto/entotoexperience">Horse Riding</nuxt-link ></li>
                  <li class="footer-link"><nuxt-link class="footer-a-link " to="entoto/entotoexperience">Trampoline World</nuxt-link ></li>
                </div>

                <div></div>
              </ul>
            </div>

            <div class="desti">
              <h3 class="desti-title">Quick Links</h3>
              <ul class="desti-list">
                <div>
                  <li class="footer-link"><nuxt-link class="footer-a-link " to="/">Home</nuxt-link></li>
                  <li class="footer-link"><nuxt-link class="footer-a-link " to="/destinationbishoftu">Bishofitu</nuxt-link></li>
                  <li class="footer-link"><nuxt-link class="footer-a-link " to="/destinationentoto">Entoto</nuxt-link></li>
                  <li class="footer-link"><nuxt-link class="footer-a-link " to="/ourstory">Our Story</nuxt-link></li>
                  <li class="footer-link"><nuxt-link class="footer-a-link " to="/destinationawash">Awash</nuxt-link></li>
                  <li class="footer-link"><nuxt-link class="footer-a-link " to="/destinationlaketana">Lake Tana</nuxt-link></li>
                </div>

                <div></div>
              </ul>
            </div>
          </div>
        </div>

        <div class="social">
          <h3 class="desti-title">follow us on</h3>

          <div class="icon-container">
            <img src="../assets/image/Icons/facebook.svg" alt="" />
            <img src="../assets/image/Icons/instagram.svg" alt="" />
            <img src="../assets/image/Icons/youtube.svg" alt="" />
          </div>
        </div>
      </section>

      <hr />
      <div class="lower">
        <img src="../assets/image/LOGO 1.svg" alt="" />
        <p>
          &copy; 2022. All Rights Reserved. Web Design & Development by
          <a href="https://versavvymedia.com/">Versavvy Media PLC</a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
  background: $kuriftu-black;
  margin-top: 6.25rem;

  .container {
    .footer-wrapper {
      .footer-link-container {
        .upper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          place-items: center;

          .desti {
            .desti-title {
              color: $kuriftu-brown;
              @extend .title;
              margin-top: 4.37rem;
              text-align: center;
              font-size: 1rem;
              text-transform: uppercase;
            }
            .desti-list {
              text-align: center;
              margin-top: 1.88rem;
              margin-bottom: 1.88rem;
              // margin-left: 2rem;
              // gap: 3.31rem;
              div {
                display: grid;
                place-items: left;
                gap: 1rem;
                margin-top: 0.8rem;
                .footer-link {
                  .footer-a-link {
                    color: $kuriftu-white;
                    font-size: 0.9rem;
                  }
                }
              }
            }
          }
        }
      }
      .social {
        h3 {
          color: $kuriftu-brown;
          @extend .title;

          margin-top: 4.37rem;
          text-align: center;
          font-size: 1rem;
          text-transform: uppercase;
        }
        .icon-container {
          display: flex;
          justify-content: center;
          gap: 1.88rem;
          margin-top: 1.88rem;
          // width: 2rem;
        }
      }
    }
    hr {
      margin-top: 4.37rem;
      color: $kuriftu-brown;
    }
    .lower {
      display: grid;
      place-items: center;
      margin-top: 4.37rem;
      margin-bottom: 5rem;
      img {
        width: 10rem;
      }
      p {
        color: $kuriftu-white;
        font-size: 0.88rem;
        margin-top: 1.88rem;
        line-height: 1.3rem;
        text-align: center;
        a {
          color: $kuriftu-blue;
        }
      }
    }
  }
}
@include responsive($md) {
  .footer {
    .container {
      .footer-wrapper {
        .footer-link-container {
          .upper {
            display: grid;
            grid-template-columns: 1fr 1fr;
            place-items: center;

            .desti {
              .desti-title {
                text-align: left;
              }
              .desti-list {
                text-align: left;
                margin-top: 0.98rem;
                margin-bottom: 0.98rem;

                div {
                  display: grid;
                  grid-template-columns: 1fr;
                  gap: 1.3rem;
                  margin-top: 0.98rem;
                  .footer-link {
                    a {
                      color: $kuriftu-white;
                      font-size: .9rem;
                      text-align: left;
                    }
                  }
                }
              }
            }
          }
        }
      }

      .lower {
        margin-bottom: 6.3rem;
        img {
          width: 15rem;
        }
      }
    }
  }
}
@include responsive($lg) {
  .footer {
    margin-top: 8.13rem;
    .container {
      .footer-wrapper {
        .footer-link-container {
          place-items: center;
     
          .upper {
            display: grid;
                 align-items: flex-start;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            gap: 5rem;
            .desti {
              .desti-title {
                text-align: left;
              }
              .desti-list {
                text-align: left;
                margin-top: 0.98rem;
                margin-bottom: 0.98rem;
              }
            }
          }
        }
      }

      .lower {
        margin-bottom: 0rem;
        display: flex;
        justify-content: space-between;
        img {
          margin-bottom: 1rem;
        }
      }
    }
  }
}
@include responsive($xl) {
  .footer {
    .container {
      .footer-wrapper {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        gap: 8rem;
        .footer-link-container {
          .upper {
            gap: 8rem;
          }
        }
      }
    }
  }
}
@include responsive($xxl) {
  .footer {
    .container {
      .footer-wrapper {
        gap: 10rem;
        .footer-link-container {
          .upper {
            gap: 10rem;
          }
        }
      }
    }
  }
}
</style>