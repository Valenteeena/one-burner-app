<template>
    <div class="home">
        <Header/>
        <div class="box-content">
          <div class="top-content">
            <div class="topC-txt">
              <h1>Collaborate with your team and get more done</h1>
              <p>Communicate effectively with Oneburner for easy collaboration, team work and remote work.</p>
              <button class="nav-btn">
                Start Free Trial
                <i class="fas fa-angle-right btn-caret"></i>
              </button>
            </div>
          </div>

          <div class="mid-strip">
            <p>
              Over 500+ companies bond teams together with Oneburner
            </p>
            <img src="../assets/img/Component 7.svg"/>
          </div>

          <div class="mid-strip-nxt">
            <div class="ms-nav">
              <ul>
                <li>CRM &amp; Sales</li>
                <li>Human Resourses</li>
                <li>Marketing</li>
                <li>Remote Work</li>
                <li>Project Management</li>
                <li>Social Media</li>
              </ul>
            </div>

            <div class="ms-manage">
              <div class="ms-man-1">
                <h2 class="picTitle">Manage team activities all in one place</h2>
                <p class="picTxt">Keep your team organized and informed with activities that are up to date.</p>
              </div>
              <div class="ms-man-2">
                <img src="../assets/img/Rectangle 25.png"/>
              </div>
            </div>
          </div>

          <Home2/>
        </div>
        <Footer/>
    </div>
</template>

<script>
import Header from './Header'
import Footer from './Footer'
import Home2 from './Home2'
export default {
    name: 'Home',
    data(){
    return{
      isActive:true
    }
  },
  components:{
    Header,
    Footer,
    Home2
  }
}
</script>

<style scoped>

  .top-content{
    background-image: url('../assets/img/lanidng-image.png');
    height: 500px;
    background-repeat: no-repeat;
    background-position-x: 90%;
    background-size: contain;
    padding-left: 5rem;
    padding-right: 5rem;
    margin-top: 4rem;
  }
  .mid-strip{
    padding-left: 8rem;
    padding-right: 8rem;
    margin-top: 5rem;
    margin-bottom: 2rem;
    text-align: center;
  }
  .mid-strip-nxt{
     padding-left: 5rem;
    padding-right: 5rem;
    margin-top: 5rem;
    margin-bottom: 2rem;
    padding-top: 5rem;
    padding-bottom: 5rem;
    box-shadow: 0px 0px 30px 5px rgba(0, 0, 0, 0.08);

  }
  .topC-txt{
      width: 35%;
      padding-top: 5rem;
  }
  .topC-txt h1{
    color:var(--primaryColor);
    font-size: 35px;
    padding-bottom: 3rem;

  }
  .topC-txt p{
    font-size: 17px;
    line-height: 25px;
    padding-bottom: 2rem;
  }
  .nav-btn{
    background: var(--primaryColor);
    border-radius: 20px;
    color: white;
    border: none;
    padding: .8rem 1rem;
    font-size: 13px;
    width:200px;
    font-weight: 500;
}

.mid-strip img{
  width: 100%;
}
.mid-strip p{
  font-size: 17px;
  padding-bottom: 1rem;
  padding-left: 2rem;
}
.ms-nav{
  width: 100%;
  border: 2px solid #333;
  border-radius: 10px;
  margin-bottom: 5rem;
}
.ms-nav ul{
    display: flex;
    justify-content: space-between;
    list-style-type: none;
}
.ms-nav ul li{
  padding: 1rem 1.5rem;
  color:#333;
  font-size: 14px;
}
.ms-nav ul li:first-of-type{
  background-color:var(--primaryColor);
  color: white;
  border-color:var(--primaryColor);
}
.ms-manage{
  display: flex;
  justify-content: space-between;
  padding-top: 5rem;
}
.ms-manage img{
  width:80%;
}
.ms-man-1{
  width:50%;
}
.ms-man-2{
  text-align: center;
}
.ms-man-1 h2{
  font-size: 30px;
  padding-top: 7rem;
  padding-left: 3rem;
  padding-right: 8rem;
  font-weight: 500;
  color:#333;
  padding-bottom: 1rem;
}

.ms-man-1 p{
  font-size: 14px;
  font-weight: 400;
  padding-left: 3rem;
  padding-right: 6rem;
  color:rgba(51, 51, 51, 0.8);
  line-height: 20px;
}
</style>