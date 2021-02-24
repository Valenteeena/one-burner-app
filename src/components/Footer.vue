<template>
    <div class="footer">
        
        <div class="top-footer">
            <img src="../assets/img/oneburnerlogo.png" class="logo"/>
            <div class="sel-c">
                <i class="fas fa-globe"></i>
                <select class="txtbx">
                <option>English</option>
            </select>
            </div>
        </div>
        <div class="main-footer">
            <div class="mf-content">
                <h5>No 1 CRM solution in Africa</h5>
                <p>Terms of Use | Privacy Policy</p>

                <h6>Get in touch</h6>
                <h4>+234-80-000-00000</h4>

                <div class="sos-ico">
                    <i class="fab fa-facebook-square ico"> </i>
                    <i class="fab fa-twitter-square ico"> </i>
                    <i class="fab fa-linkedin ico"> </i>
                    <i class="fab fa-youtube-square ico"> </i>
                </div>
            </div>
            <div class="side">
                <div>
                    <h5>PRODUCT</h5>
                    <ul>
                        <li>Features</li>
                        <li>Enterprise</li>
                        <li>Security</li>
                        <li>Trust</li>
                        <li>Customer Stories</li>
                        <li>Pricing</li>
                        <li>Integrations</li>
                        <li>Oneburner Partners</li>
                    </ul>
                </div>
                <div>
                    <h5>COMPANY</h5>
                    <ul>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Careers</li>
                        <li>In the News</li>
                    </ul>
                </div>

                <div>
                    <h5>ONEBURNER FOR TEAMS</h5>
                    <ul>
                        <li>Engineering</li>
                        <li>Financial Services</li>
                        <li>CRM and Sales</li>
                        <li>IT</li>
                        <li>Marketing </li>
                        <li>Customer Support</li>
                        <li>Human Resources</li>
                        <li>Project Management</li>
                        <li>Remote Work</li>
                    </ul>
                </div>

                <div>
                    <h5>RESOURCES</h5>
                    <ul>
                        <li>Community</li>
                        <li>Guides</li>
                        <li>Templates</li>
                        <li>Video Tutorials</li>
                        <li>Professional Services</li>
                        <li>Knowledge Base</li>
                        <li>Blog</li>
                        <li>Webinars</li>
                        <li>Find a Partner</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="ft">
            <p> &copy; 2020 Oneburner.com. All Rights Reserved. </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Footer',
}
</script>

<style scoped>
.footer{
    color: rgba(51, 51, 51,0.8);
}
.sel-c{
    border: 2px solid var(--primaryColor);
    color: var(--primaryColor);
    padding:0 1rem;
    padding-top: .3rem;
    height: 35px;
    width:150px;
    align-content: center;
    border-radius: 10px;

}
.sel-c select{
    border: none;
    color: var(--primaryColor);
    font-size: 13px;
    width: 80%;

}
.top-footer{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
}
.footer{
    padding-right: 5rem;
    padding-left: 5rem;
    padding-top: 3rem;
}
.logo{
    width:12rem;
}
.ft p{
    color:rgba(51, 51, 51.0.8);
    font-size: 14px;
    padding-top: 1rem;
    padding-bottom: 2rem;
    font-weight: 600;

}
.main-footer{
    display: flex;
    justify-content: space-between;
    padding-bottom: 3rem;
    border-bottom: 1px solid rgba(195, 195, 195, 0.8);
    margin-bottom: 1rem;
}
.side{
    display: flex;
    justify-content: space-between;
}
.side div{
    width: 150px;
}
.mf-content h5{
    font-size: 15px;
    font-weight: 600;
    padding-bottom: 1rem;
}
.mf-content p{
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 4rem;
}
.mf-content h6{
    font-size: 12px;
    font-weight: 800;
    padding-bottom: .5rem;
}
.sos-ico{
    font-size: 25px;
    margin-top: 1.5rem;
    display: flex;
    justify-content: space-between;
    width: 70%;
}
.side h5{
    font-size: 11px;
    font-weight: 800;
    padding-bottom: 1rem;
}
.side ul{
    list-style: none;
    font-size: 10px;
    font-weight: 700;
    line-height: 20px;
}
.side div:last-of-type{
    padding-left: 2rem;
}
</style>