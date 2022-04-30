<template>
  <div class="main">
   <Destinationheader />
    <div class="destination-links">
      <div class="container">
        <div class="wrapper">
       <ul class="link-destination">
            <li>
              <nuxt-link  class="a-link active" to="/destinationentoto">Entoto</nuxt-link 
              ><img src="../../assets/image/Icons/next2.svg" alt="" />
            </li>
            <li><nuxt-link  class="a-link " to="entotoaccommodation"> <p>Accomodation</p> </nuxt-link > </li>
            <li><nuxt-link  class="a-link "   to="entotogallery">Gallery</nuxt-link ></li>
            <li><nuxt-link  class="a-link  active"  to="entotoexperience">Experiences   <hr class="activeline"></nuxt-link ></li>
            <li><nuxt-link  class="a-link "  to="entotowellness">Wellness</nuxt-link ></li>
            <li><nuxt-link  class="a-link "  to="entotodining">Dining</nuxt-link ></li>
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
    <section class="display-video">
      <div class="container">
        <div class="video-wrapper">
          <img src="../../assets/image/entoto-bg.jpg" alt="" />
        </div>
      </div>
    </section>
  
<section class="general-experience">
<div class="container">
  <div class="all-wrapper">
      <div class="see-more">
           <p>Experience</p>
          <hr class="see-line" />
       
        </div>
        <div class="all-cards">
          <div class="single-card" data-aos="fade-up"  data-aos-duration="3000">
            <img src="../../assets/image/archery.jpg" alt="">
            <h3>Archery</h3>
            <p>Archery is the Art, Sport, Practice or skill of using a bow to shoot arrows. It’s mainly a competitive sport and recreatiional activity. </p>

          </div>
            <div class="single-card " data-aos="fade-up"  data-aos-duration="3000">
     <img  class="right-card" src="../../assets/image/gokart.jpg" alt="">
            <h3>Go Kart</h3>
            <p>A electronice go- kart is a type of open-wheel car.Go karts come in all shapes and forms. From motherless models to high powered racing machines.The electronic go kart is environmentally friendly and has no noise pollution.</p>
            <!-- <img  class="right-card" src="../../assets/image/cycling.jpg" alt="">
            <h3>Cycling</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolorem corrupti eos officiis est similique, quas sunt a ipsum explicabo libero aliquam sint inventore, temporibus vel. Delectus maxime magnam vitae. </p> -->

          </div>
            <div class="single-card" data-aos="fade-up"  data-aos-duration="3000">
            <img src="../../assets/image/kart.jpg" alt="">
            <h3>pedal kart</h3>
            <p>A pedal go karting is a fun outdoors activity for children. Not only is it safe but its also a great exercise since it requires the driver to manually pedal. These karts can be driven on and off road, or shine and are the perfect way for children to explore the natural beauty of Entoto. </p>

          </div>
            <div class="single-card " data-aos="fade-up">
           
                    <img  class="right-card" src="../../assets/image/entoto-exper4.jpg" alt="">
            <h3>Horse Riding</h3>
            <p>Horseback riding is an enjoyable pastime for many people. It is a way to enjoy nature and appreciate the majesty and beauty of horses. For people who are new to horseback riding it is not only important to learn how to ride, but to also learn discipline and self control that can broaden their knowledge while riding. </p>

          </div>
            <div class="single-card"  data-aos="fade-up"  data-aos-duration="3000">
            <img src="../../assets/image/rockClimbing.jpg" alt="">
            <h3>Rock Climbing</h3>
            <p>Not that long ago, most people took their first climbing steps on real rock, but these days it’s
much more likely to be on an indoor wall. Wall Climbing is an enjoyable recreational activity 
that has the basics movement foundation with grip of hands and legs, that makes the climber 
able to climb until reaching the highest peak. </p>

          </div>
            <div class="single-card " data-aos="fade-up"  data-aos-duration="3000">
            <img  class="right-card" src="../../assets/image/RopeCourse.jpg" alt="">
            <h3>Rope Course</h3>
            <p>A Rope Course is team based activity whereby two counter teams go up and down hanging on a rope.The lower part might be touching the ground while the highest on trees or poles. It’s a great team bonding activity for the masses. </p>

          </div>
          
            <div class="single-card" data-aos="fade-up" data-aos-duration="3000">
            <img src="../../assets/image/entoto-exper3.jpg" alt="">
            <h3>Paintball</h3>
            <p>Paintball is a competitive team shooting sport in which players eliminate opponents from play by hitting them with spherical dye filled gelatin capsules(“paintballs”) that break upon impact. Paintballs are usually shot using a low energy at weapon called paintball marker that is powered by compressed air(nitrogen) or carbon dioxide. </p>

          </div>
              <div class="single-card " data-aos="fade-up" data-aos-duration="3000">
          
                  <img class="right-card" src="../../assets/image/zipline.jpg" alt="">
            <h3>Zipline</h3>
            <p>A zipline is used as a cable that is suspended above an incline to which a pulley and harness 
are attached to a rider. The incline of a zipline allows the rider to be pulled by gravity along 
the line. Mostly zip lines are used for recreation purposes.  </p>

          </div>
              <div class="single-card" data-aos="fade-up" data-aos-duration="3000">
            <img src="../../assets/image/SAM09883-min (1).jpg" alt="">
            <h3>Trampoline World</h3>
            <p>Trampoline exercises are a convenient and enjoyable way to boost cardiovascular health, improve endurance, and relieve stress and tension.Also helps in developing better balance, and coordination skills. </p>

          </div>
              <div class="single-card " data-aos="fade-up" data-aos-duration="3000">
            <img class="right-card" src="../../assets/image/entoto1.jpg" alt="">
            <h3>Yoga</h3>
            <p>Every detail at our spa resort is meticulously tailored to create the ultimate destination for wellness and tranquility, starting with the basics like yoga. </p>

          </div>
           
        </div>
        
  </div>
</div>
</section>
   
    
  
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
import Event from "../../components/Event.vue";
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
  .display-video {
    margin-top: 4rem;
  }
  @include responsive($md) {
    .display-video {
      margin-top: 5rem;
    }
  }
 .general-experience{
   margin-top: 5rem;
   @include responsive($md){
     margin-top: 8rem;
   }
   .container{
     .all-wrapper{
         .see-more {
        display: flex;
        align-items: center;
        gap: 2rem;
        margin-top: 3rem;
        @include responsive($md) {
          margin-top: 5rem;
        }
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
          width: 6rem;
        }
      }
      .all-cards{
        @include responsive($md){
          display: grid;
          grid-template-columns: 1fr 1fr ;
          gap: 1rem;
        }
         @include responsive($lg){
        
          gap: 5rem;
        }
      
        .single-card{
          margin-top: 3rem;
        
            .right-card{
          margin-top: 6rem;
        }
          img{
            width: 20rem;
            height: 25rem;
            object-fit: cover;
             @include responsive($lg){
         width: 100%;
         height: 35rem;
        }
          }
          h3{
            @extend .title;
            font-size: 1rem;
            margin-top: .98rem;
            text-transform: uppercase;
          }
          p{
            @extend .text;
            margin-top: .98rem;
            width: 20rem;
              font-size: .95rem;
                 @include responsive($lg){
         width: 100%;
     
        }
          }
        }
      }
     }
   }
 }
}
</style>
