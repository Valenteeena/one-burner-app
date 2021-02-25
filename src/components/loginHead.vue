<template>
    <div class="head">
        <router-link to="/">
            <img src="../assets/img/oneburnerlogo.png" class="logo"/>
        </router-link>
        <div class="navmenu">
            <ul class="navigation">
                <li><router-link to="/login">New customer?</router-link></li>
            </ul>
            <button class="nav-btn">
                Try for Free
                <i class="fas fa-angle-right btn-caret"></i>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'loginHead',
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
    margin-bottom: 4rem;
}
.navmenu{
    display: flex;
    align-items: center;
}
.logo{
    width:10rem;
}

ul li{
    list-style-type: none;
    font-size: 15px;
    margin-left: 1rem;
    margin-right: 1rem;
}
.nav-btn{
    background: var(--primaryColor);
    border-radius: 20px;
    color: white;
    border: none;
    padding: .8rem 1rem;
    font-size: 12px;
    width:140px;
    font-weight: 100;
}
.btn-caret{
    margin-left: .5rem;
    color:white;
    font-size: 11px;
    font-weight: 100;

}
</style>