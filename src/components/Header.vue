<template>
    <div class="head">
        <img src="../assets/img/oneburnerlogo.png" class="logo"/>
        <div class="navmenu">
            <ul class="navigation">
            <li>
                <router-link to="/">
                    Product
                     <i class="fas fa-angle-down"></i>
                </router-link>
            </li>
            <li><router-link to="/">Pricing</router-link></li>
            <li><router-link to="/enterprise">Enterprise</router-link></li>
            <li><router-link to="/">Support</router-link></li>
        </ul>
        </div>
        <div class="navmenu nav2">
            <ul class="navigation">
                <li><router-link to="/contact">Contact Sales</router-link></li>
                <li><router-link to="/login">Login</router-link></li>
            </ul>
        </div>
        <div>
            <button class="nav-btn">
                Try for Free
                <i class="fas fa-angle-right btn-caret"></i>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header',
}
</script>

<style scoped>
a{
    color:var(--fontcolor);
    text-decoration: none;
    cursor:pointer;
}
.head{
    width: 90%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;
}
.logo{
    width:8rem;
}
.navmenu{
    width:50%;
}
.nav2{
    width:20%;
}
.navigation{
    display: flex;
    margin-bottom: 1rem;
    margin-left: .5rem;
}
ul li{
    padding-top: 1.5rem;
    list-style-type: none;
    font-size: 12px;
    margin-left: 1rem;
    margin-right: 1rem;
}
.nav-btn{
    background: var(--primaryColor);
    border-radius: 20px;
    color: white;
    border: none;
    padding: .5rem 1rem;
    font-size: 10px;
    width:120px;
    font-weight: 100;
}
.btn-caret{
    margin-left: .5rem;
    color:white;
    font-size: 11px;
    font-weight: 100;

}
</style>