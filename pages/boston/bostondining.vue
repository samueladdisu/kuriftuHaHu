<template>
 <div class="main">
   <Destinationheader />
    <div class="destination-links">
      <div class="container">
        <div class="wrapper">
          <ul class="link-destination">
            <li>
                 <nuxt-link  class="a-link active" to="/destinationentoto">Entoto</nuxt-link 
              >
              <img src="../../assets/image/Icons/next2.svg" alt="" />
            </li>
            <li>
              <nuxt-link  class="a-link " to="entotoaccommodation"> <p>Accomodation</p> </nuxt-link > 
            </li>
           
            <li><nuxt-link  class="a-link "  to="entotoexperience">Experiences</nuxt-link ></li>
            <li><nuxt-link  class="a-link  "  to="entotowellness">Wellness </nuxt-link></li>
                <li><nuxt-link  class="a-link active"  to="entotodining">Dining <hr class="activeline"
              /></nuxt-link ></li>
                <li><nuxt-link  class="a-link "   to="entotogallery">Gallery</nuxt-link ></li>
            <li>
              <nuxt-link  class="a-link " to="entotoevent">Celebration & Events</nuxt-link >
              </li>
            <li>
              <nuxt-link  class="a-link " to="/reserve">Reserve</nuxt-link >
              </li>
          </ul>
          <hr class="line" />
        </div>
      </div>
    </div> 
   <section class="entoto-general">
<div class="container">
   <div class="main-title">
            <h2>Dining</h2>
            <p>
            Whether you’re celebrating a birthday, honeymoon, anniversary or a longmawaited family vacation, our team is delighted to create a personalized dining experience for you from intimate and romantic, to interactive and adventurous.
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
  <hr class="rec-line"> <p> Menu recommended</p>
  </div>
<div class="accomondation-room">
  <div class="single-accomondation">
    <img src="../../assets/image/bahirdardining1.jpg" alt="">
    <div class="room-name">
      <h4>Menu 1</h4>
    </div>
    <div class="room-desc">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis tincidunt nisl elementum ultrices luctus habitasse. Ut orci nam lectus at massa enim elementum varius dictumst. Nulla a, sed enim turpis non lacinia fusce.massa enim elementum varius dictumst. </p>
    </div>
       
  </div>
    <div class="single-accomondation">
    <img src="../../assets/image/bahirdardining3.jpg" alt="">
    <div class="room-name">
      <h4>Menu 2</h4>
    </div>
    <div class="room-desc">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis tincidunt nisl elementum ultrices luctus habitasse. Ut orci nam lectus at massa enim elementum varius dictumst. Nulla a, sed enim turpis non lacinia fusce.massa enim elementum varius dictumst.</p>
    </div>
  
  </div>
    <div class="single-accomondation">
    <img src="../../assets/image/bahirdardining2.jpg" alt="">
    <div class="room-name">
      <h4>Menu 3</h4>
    </div>
    <div class="room-desc">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis tincidunt nisl elementum ultrices luctus habitasse. Ut orci nam lectus at massa enim elementum varius dictumst. Nulla a, sed enim turpis non lacinia fusce.massa enim elementum varius dictumst. </p>
    </div>
    
  </div>
    <div class="single-accomondation">
    <img src="../../assets/image/gallery3.jpg" alt="">
    <div class="room-name">
      <h4>Menu 4</h4>
    </div>
    <div class="room-desc">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis tincidunt nisl elementum ultrices luctus habitasse. Ut orci nam lectus at massa enim elementum varius dictumst. Nulla a, sed enim turpis non lacinia fusce.massa enim elementum varius dictumst.</p>
    </div>
       
  </div>
</div>
</div>
   </section>
   </div> 
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.main{
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
            .activeline{
               margin-top: .6rem;
               margin-bottom: -1.1rem;
                  color: $kuriftu-black;
                      opacity: 1;
            }
          }
          .line {
            // border-style:solid ;
            color: $kuriftu-grey;
            @include  responsive($xl){
 width: 60rem;
            }
           
            margin-top: .6rem;
            opacity: 0.7;
          }
        }
      }
    }
  }
  .entoto-general{
    margin-top: 5rem;
    @include responsive($lg){
margin-top: 8rem;
    }
    .container{
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
  .accomondation{
    .container{
      .recommended{
        display: flex;
        align-items: center;
        gap: 2rem;
        hr{

border-style: solid;
    color: $kuriftu-grey;
    opacity: .5;
  
      width: 100%;
   

        }
        p{
          font-size: .7rem;
          text-transform: uppercase;
          color: $kuriftu-grey;
        }

      }
      .accomondation-room{
       margin-top: 3rem;
       display: grid;
       @include responsive($md){
         grid-template-columns: 1fr 1fr;
         gap: 3rem;
       }
        @include responsive($xl){       
        grid-template-columns: 1fr 1fr 1fr;
       
       }
        .single-accomondation{
           margin-top: 2.88rem;
           img{
          @include responsive($md){
            width: 20rem;
            height: 15rem;
            object-fit: cover;
          }
       
           @include responsive($lg){
       width: 100%;
   height: 20rem;
           
          }
          
           @include responsive($xl){
width: 25rem;
   height: 20rem;
           
          }
           }
           .room-name{
            
             h4{
               font-size: 1.5rem;
               font-weight: 600;
            margin-top: 1.88rem;
            color: $kuriftu-black;
             }
           
           }
             .room-desc{
               p{
               @extend .text;
            margin-top: 0.94rem;
            color: $kuriftu-black;
            font-size: 0.88rem;
            text-align: left;
           @include responsive($md){
             width: 20rem;
           }
             @include responsive($lg){
             width: 26rem;
           }
             @include responsive($xl){
             width: 20rem;
           }
               }
             }
             .book-buttons{
               margin-top: 1.88rem;
                 @include responsive($lg){
              margin-top: 3rem;
           }
             }
        }
      }
    }
  }
}

</style>

