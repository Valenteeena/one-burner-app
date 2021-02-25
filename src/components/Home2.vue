<template>
    <div class="home2">
        <div class="ms-manage">
          <div class="ms-man-2">
            <img src="../assets/img/Frame 2 1.png"/>
          </div>
          <div class="ms-man-1">
            <h2 class="picTitle">Bring Your Team Up to Speed</h2>
            <p class="picTxt">Collaborate on project from start to finish, see information at a glance, add comment, attachment and more with Oneburner.</p>
          </div>
        </div>

          <div class="ms-manage" >
            <div class="ms-man-1" style="padding-left:7rem; padding-right:0">
              <h2 class="picTitle">Automated task timeline</h2>
              <p class="picTxt" style="padding-right:0">View dates, projects, calendar, sprint and more with reliability.</p>
            </div>
            <div class="ms-man-2">
              <img src="../assets/img/Rectangle 22.png"/>
            </div>
        </div>

        <div class="integration">
              <h1>Integrate with your favourite tools easily in one click</h1>
              <img src="../assets/img/Group 41.svg"/>
        </div>

        <div class="ms-manage">
          <div class="ms-man-2">
            <img src="../assets/img/report board.png" style="width:70%"/>
          </div>
          <div class="ms-man-1" style="width:100%">
            <h2 class="picTitle">Timeless report generator</h2>
            <p class="picTxt" style="padding-right: 10rem">You can generate quick report of activities of all that has to do with the daily running of your business and teams.</p>
          </div>
        </div>

          <div class="ms-manage" >
            <div class="ms-man-1" style="padding-left:5rem; width:100%; padding-right:0">
              <h2 class="picTitle">Efficient lead management</h2>
              <p class="picTxt" style="padding-right:0">
                Track and manage prospective customers. Manage their notes, emails, meetings, calls, contacts, and files.
              </p>
            </div>
            <div class="ms-man-2">
              <img src="../assets/img/Rectangle 19.png" style="width:70%; padding-left:0" />
            </div>
          </div>

          <div class="ms-manage">
              <div class="ms-man-2">
                <img src="../assets/img/Component 3.svg" style="width:70%; padding-left:5rem"/>
              </div>
              <div class="ms-man-1">
                <h2 class="picTitle" style="padding-right:7rem">24/7 customer support</h2>
                <p class="picTxt">Our team of responsible member is always available to help you all day long and ready to meet your demand. Reach out to us and we will always be there.</p>
              </div>
          </div>

          <div class="bfr-foot">
            <h1>Choose a better way to work</h1>
            <p>No credit card details | No additional installation | No time wasting</p>
            <button class="nav-btn">
                Start my free trial
                <i class="fas fa-angle-right btn-caret"></i>
              </button>
          </div>
      </div>
</template>

<script>

export default {
    name: 'Home2',
}
</script>

<style scoped>
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
  font-size: 15px;
  font-weight: 400;
  padding-left: 3rem;
  padding-right: 6rem;
  color:rgba(51, 51, 51, 0.8);
  line-height: 20px;
}
.integration{
  margin-left: 8rem;
  margin-right: 8rem;
  margin-top: 8rem;
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

.bfr-foot{
background-color:#7837F8;
color:white;
text-align: center;
font-weight: normal;
margin-top: 5rem;
padding: 5rem;
}
.bfr-foot h1{
  font-size: 35px;
  padding-bottom: 1rem;
}
.bfr-foot p{
  font-size: 17px;
  padding-bottom: 2rem;
}
.nav-btn{
    background: var(--primaryColor);
    border-radius: 25px;
    color: white;
    border: none;
    padding:  1rem;
    font-size: 13px;
    width:200px;
    font-weight: 500;
}

</style>