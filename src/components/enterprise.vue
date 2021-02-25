<template>
    <div>
        <Header/>
        <div class="enter-top">
          <img src="../assets/img/Component 4.png"/>
        </div>

        <div class="mid-strip">
            <p>
              Over 500+ companies bond teams together with Oneburner
            </p>
            <img src="../assets/img/Component 7.svg"/>
        </div>

        <div class="enter-info">
          <h2>How Oneburner help enterprises grow</h2>
          <div>
            <p class="flx-text">
              Oneburner software solution helps your business by creating an enabling environment for easy communication and feedbacks in real time. Oneburner brings all your user and teams in a single place with 99.99% uptime SLA and Data security
            </p>
            <ul class="flx-text">
              <li>Data protection and control</li>
              <li>Reporting and analytics</li>
              <li>Use single sign-on and multi-factor authentication to secure accounts</li>
              <li>Enterprise integration with other tools</li>
            </ul>
          </div>

          <div class="badge">
            <img src="../assets/img/badge.png"/>
            <section class="badge-txt">
              <h3>Best Collaboration Software</h3>
              <p>Africa tech coalition award 2020</p>
            </section>
          </div>
        </div>

        <div class="integration">
              <h1>Integrate with your favourite tools easily in one click</h1>
              <img src="../assets/img/Group 41.svg"/>
        </div>

        <div class="presence">
          <h3>Our Regional Presence</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer </p>
          <img src="../assets/img/map.png"/>
        </div>

        <div class="testi">
          <p>Best. Product. Ever! We like Oneburner more and more each day because it makes our work a lot easier. It's just amazing. Very easy to use, impressed us on multiple levels. Thank you so much for your help and is worth much more than we paid. We were treated like royalty.</p>
          <div class="test-a">
            <img src="../assets/img/Ellipse 5.png">
            <div class="test-atxt">
              <h5>Kemi Hassan</h5>
              <h6>CEO, Saharaa Inc. </h6>
            </div>
          </div>
        </div>

        <div class="impact">
          <h1>Want to learn more on how we can impact your enterprise?</h1>
          <button class="nav-btn">
                Contact Sales
                <i class="fas fa-angle-right btn-caret"></i>
            </button>
        </div>
        <Footer/>
    </div>
</template>

<script>
import Header from './Header'
import Footer from './Footer'
export default {
    name: 'enterprise',
    data(){
    return{
      isActive:true
    }
  },
  components:{
    Header,
    Footer
  }
}
</script>

<style scoped>
.enter-top{
  padding-left: 5rem;
  padding-right: 5rem;
}
.enter-top img{
  width: 100%;
}
  .mid-strip{
    padding-left: 8rem;
    padding-right: 8rem;
    margin-top: 0rem;
    margin-bottom: 3rem;
    text-align: center;
  }
.mid-strip img{
  width: 100%;
}
.mid-strip p{
  font-size: 17px;
  padding-bottom: 1rem;
  padding-left: 2rem;
}
.enter-info{
  background-color: #7837F8;
  color: white;
  padding:5rem;
  padding-bottom: 10rem;
}
.enter-info h2{
  text-align: center;
  font-weight: 400;
  font-size: 30px;
  padding-bottom: 5rem;
}
.enter-info div{
  display: flex;
  justify-content: space-between;
}
.flx-text{
  /* width:50%; */
  padding:3rem;
  padding-top: 0;
  padding-bottom: 0;
  font-size: 13px;
  line-height: 25px;
  font-weight: 300;
}
.enter-info div p{
  width: 52%;
}
.enter-info div ul{
  list-style: none;
}
.enter-info div ul li{
  background-image: url('../assets/img/check.png');
  background-repeat: no-repeat;
  background-size: 25px;
  padding-left: 3rem;
  line-height: 30px;
  vertical-align: top;
  background-position-y: center;
}
.badge{
  width:60%;
  background: white;
  color: #333;
  margin: auto;
  margin-top: 4rem;
  position: absolute;
  left: 20%;
  border-radius: 8px;
  justify-content: center !important;
  padding-top: 1rem;
  padding-bottom: 1rem;
  box-shadow: 0px 0px 30px 5px rgba(0, 0, 0, 0.08);
}
.badge img{
  width: 140px;
}
.badge-txt{
  padding-top: 3rem;
  padding-left: 1rem;
  color: #333;
}
.badge-txt h3{
  font-size: 28px;
  font-weight: 500;
}
.badge-txt p{
  width: 100% !important;
  font-size: 14px; 
  font-weight: 400;
  padding-top: .5rem;
}
.integration{
  margin-left: 8rem;
  margin-right: 8rem;
  margin-top: 12rem;
  margin-bottom: 6rem;
}
.integration img{
  width: 100%;
}
.integration h1{
  text-align: center;
  padding-bottom: 6rem;
  width: 50%;
  margin: auto;
  font-weight: 500;
  color: #333;
  font-size: 30px;
}
.presence{
  text-align: center;
  background: rgba(204, 204, 204, 0.1);
  padding: 5rem;
  color: #333;
}
.presence img{
  width: 40%;
}
.presence h3{
  font-size: 28px;
  padding-bottom: 1rem;
  font-weight: 400;
}
.presence p{
  font-size: 14px;
  color: rgba(51, 51, 51, 0.7);
  width: 50%;
  margin: auto;
  font-weight: 400;
  padding-bottom: 6rem;
}

.nav-btn{
    background: var(--primaryColor);
    border-radius: 30px;
    color: white;
    border: none;
    padding: 1rem;
    font-size: 13px;
    width:180px;
    font-weight: 300;
      box-shadow: 0px 0px 30px 5px rgba(0, 0, 0, 0.08);

}
.btn-caret{
    margin-left: .5rem;
    color:white;
    font-size: 11px;
    font-weight: 100;

}
.testi{
  width:70%;
  margin:auto;
  color: #333;
  text-align: center;
  padding-top: 5rem;
  padding-bottom: 7rem;
}
.testi p{
  font-size: 21px;
  line-height: 50px;
  padding-bottom: 5rem;
}
.test-a{
  display: flex;
  justify-content: center;
  align-items: center;
}
.test-a img{
  width:10%;
  margin-right: 1rem;
}

.test-atxt{
  text-align: left;
}
.test-atxt h6{
  font-size: 14px;
  font-weight: 400;
  padding-top: .5rem;
}
.impact{
    background: rgba(204, 204, 204, 0.1);
    text-align: center;
    padding:5em;
}
.impact h1{
  color: #333;
  width: 50%;
  font-size: 35px;
  padding-bottom: 2rem;
  margin: auto;
}
</style>