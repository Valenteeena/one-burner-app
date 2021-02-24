<template>
    <div class="login">
        <loginHead/>
        <h2>Sign In</h2>
        <p>Welcome Back!</p>

        <div class="login-form">
            <form>
                <div class="frmGroup">
                    <label class="form-label">Email / Username</label><br>
                    <input type="text" class="txtbx"/>
                </div>
                <div class="frmGroup">
                    <label class="form-label">Password</label><br>
                    <input type="password" class="txtbx"/>
                </div>
                <div class="frmBtn">
                    <button>Log In</button>
                </div>
            </form>
        </div>
        <h5>Forgot Password?</h5>

        <div class="alt-login">
            <h5>Or sign in with: </h5>
            <img src="../assets/img/outlook-icon.png">
            <img src="../assets/img/linkedin-icon-2.png">
            <img src="../assets/img/googleicon.png">
        </div>
        <loginFoot/>
    </div>
</template>

<script>
import loginHead from './loginHead'
import loginFoot from './loginFoot'
export default {
    name: 'Login',
    data(){
    return{
      isActive:true
    }
  },
  components:{
      loginHead,
      loginFoot
  }
}
</script>

<style scoped>
    .login{
        text-align: center;
        color: var(--fontcolor)
    }
    h2{
        color:#333;
        font-weight: 400;
        font-size: 25px;
        margin-top: 4rem;
        margin-bottom: .8rem;
    }
    h5{
        font-weight: 500;
        font-size: 12px;
        color: var(--primaryColor);
    }
    p{
        font-size: 13px;
        color:rgba(51, 51, 51, 0.8);
        margin-bottom: 4rem;
    }
    .login-form{
        text-align: left;
        width: 40%;
        margin: auto;
        font-size: 10px;
        padding-left: 2rem;
        padding-right: 2rem;
        color:rgba(51, 51, 51, 0.8);
    }
    .frmGroup{
        padding-top: .5rem;
        padding-bottom:.5rem;
    }
    .txtbx{
        width: 100%;
        background: white;
        height:40px;
        border:1px solid var(--fontcolor);
        border-radius: 5px;
        margin-top: .5rem;
    }
    .frmBtn button{
        background: var(--primaryColor);
        width:100%;
        height: 40px;
        border:none;
        border-radius: 20px;
        color: white;
        font-weight: 300;
        font-size: 12px;
        margin-bottom: 1rem;
        margin-top: 1rem;
    }
    .alt-login{
        display: flex;
        width:18%;
        align-items: center;
        justify-content: space-between;
        margin: auto;
        padding-top: 3rem;
        padding-bottom: 3rem;
    }
    .alt-login h5{
        color:#333;
        font-size: 10px;
    }
    .alt-login img{
        width:1.2rem;
    }
</style>