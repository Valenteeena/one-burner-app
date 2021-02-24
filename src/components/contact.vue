<template>
    <div class="box">
        <Header/>
        <div class="contact">
            <div class="contact-form">
              <form>
                <div class="name-grp ">
                  <div class="frmGroup fitem">
                      <label class="form-label">Last Name</label><br>
                      <input type="text" class="txtbx"/>
                  </div>
                  <div class="frmGroup fitem">
                      <label class="form-label">First Name</label><br>
                      <input type="text" class="txtbx"/>
                  </div>
                </div>
                <div class="frmGroup">
                  <label class="form-label">Work Email</label><br>
                  <input type="text" class="txtbx"/>
                </div>
                <div class="frmGroup">
                  <label class="form-label">Phone Number</label><br>
                  <input type="phone" class="txtbx"/>
                </div>
                <div class="frmGroup">
                  <label class="form-label">Product of Interest</label><br>
                  <select class="txtbx">
                    <option>Select an Option</option>
                  </select>
                </div>
                <div class="name-grp">
                  <div class="frmGroup fitem">
                      <label class="form-label">Company Name</label><br>
                      <input type="text" class="txtbx"/>
                  </div>
                  <div class="frmGroup fitem">
                      <label class="form-label">Company Size</label><br>
                      <select class="txtbx">
                        <option>Select an Option</option>
                      </select>
                  </div>
                </div>
                <div class="frmGroup">
                  <label class="form-label">How can our experts help you?</label><br>
                  <textarea rows="20" class="txtbx txta"></textarea>
                </div>
                <div class="frmBtn">
                    <button>Contact Us</button>
                </div>
              </form>
            </div>
            <div class="contact-details">
              <h3 class="con-title">Request a call from an expert</h3>
              <p class="con-text">Having thoughts on which product works best for you? Fill the form and our expert will reach out to you.</p>
              
              <h3 class="con-title" style="margin-top:3rem">Our offices around Africa</h3>
              <div class="countries">

                <div class="flex-count">
                  <h5>Nigeria</h5>
                  <p>
                    33a, Adeola Odeku, Victoria Island, Lagos. 
                  </p>
                  <p>+234-(0)-8000000000</p>
                </div>

                <div class="flex-count">
                  <h5>Ghana</h5>
                  <p>
                    45, El-Senoussi Street, Accra  
                  </p>
                  <p>+233-(0)-277619819</p>
                </div>

                <div class="flex-count">
                  <h5>South Africa</h5>
                  <p>
                    474, Cheriton Drive, Port Shepstone, Kwazulu-Natal 
                  </p>
                  <p>+27-(0)-857926978</p>
                </div>

                <div class="flex-count">
                  <h5>Eygypt</h5>
                  <p>
                    72, Gameat El-Dewal El-Arabia St., Giza. 
                  </p>
                  <p>+20-(0)-35924295</p>
                </div>
                
                <div class="flex-count">
                  <h5>Kenya</h5>
                  <p>
                    41, Enterprise Rd., Industrial Area , Niarobi 
                  </p>
                  <p>+254-(0)-20536766</p>
                </div>

                <div class="flex-count">
                  <h5>Tunisia</h5>
                  <p>
                    13, Rue de Makthar, Dhraa Governorate Kasserine 
                  </p>
                  <p>+216-(0)-77367410</p>
                </div>
  
                <div class="flex-count">
                  <h5>Mali</h5>
                  <p>
                    22, Badalabougou Est., Bamako. 
                  </p>
                  <p>+223-(0)-78175387</p>
                </div>
                
                <div class="flex-count">
                  <h5>Tanzania</h5>
                  <p>
                    Mbezi Beach, P.O.B: 70339, Dar Salaam 
                  </p>
                  <p>+255-(0)-222120119</p>
                </div>
                
                <div class="flex-count">
                  <h5>Togo</h5>
                  <p>
                    10, E rue des Echis, Lome  
                  </p>
                  <p>+228-(0)-22229600</p>
                </div>
              </div>

            </div>
        </div>
      <Footer />
    </div>
</template>

<script>
import Header from './Header'
import Footer from './Footer'
export default {
    name: 'Contact',
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

  .contact{
    background: rgba(204, 204, 204, 0.1);
    padding-top: 6rem;
    padding-left: 5rem;
    padding-right: 5rem;
    display: flex;
    justify-content: space-between;
    color: #333;
    padding-bottom: 5rem;
  }
  .contact-form{
    background-color: white;
    width:50%;
    padding:3rem 5rem;
    font-size: 12px;
    box-shadow: 0px 0px 30px 10px rgba(0, 0, 0, 0.08);
  }
  .name-grp{
    display: flex;
    justify-content: space-between;
    align-content: flex-end;
  }
  .fitem:first-of-type{
    margin-right: 1rem;
  }
  .fitem{
    flex-basis: 100%;
  }
  .txtbx{
    width: 100%;
    background: white;
    height:45px;
    border:2px solid var(--fontcolor);
    border-radius: 5px;
    padding-left: 1rem;
    margin-top: .5rem;
    color:rgba(51, 51, 51, 0.4);
    }
    .txta{
    height : 80px;
    padding-top: 1rem;
    }
  .frmGroup{
    margin-top: 1rem;
  }
  .frmBtn button{
    background: var(--primaryColor);
    width:100%;
    height: 45px;
    border:none;
    border-radius: 20px;
    color: white;
    font-weight: 300;
    font-size: 14px;
    margin-bottom: 1rem;
    margin-top: 1rem;
}
.contact-details{
  width:50%;
  padding:5rem 5rem;
  padding-right: 0;
  color: #333;
  /* font-size: 12px; */
}
.con-title{
  font-size: 28px;
  font-weight: 500;
  padding-bottom: 2rem;
}
.con-text{
  font-size: 14px;
}
.countries{
  display:flex;
  flex-wrap: wrap;
}
.flex-count{
  width: 150px;
  margin:1rem .5rem;
}
.flex-count h5{
  text-transform: uppercase;
  font-size:12px;
  margin-bottom: .5rem;
}
.flex-count p{
  font-size: 11px;
  color: rgba(1, 0, 29, 0.6);
  line-height:20px;
}
</style>