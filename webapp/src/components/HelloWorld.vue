<template >
        <div>
            <app-NavBar >
                <div class='navbar'>
                    <div class="logo">
                        <img src="../assets/logo.png" alt="Slack-Icon">
                    </div>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Forums</a></li>
                        <li><a href="#">News</a></li>
                        <li><a href="#">Login</a></li>
                        <li><a href="#">Sign up</a></li>
                    </ul>
                    <div>
                    <input class="form-control" type="text" placeholder="Search" aria-label="Search"/>
                    </div>
                </div>
            </app-NavBar>
        </div>

</template>




<style scoped>
.navbar{
    position:absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    top:0;
    width: 100%;
    background-color: rgb(62, 58, 84);
    font-size:1.6rem;
    min-height: 8rem;
    --main-color:rgb(161, 156, 156);
}
ul{
    display: flex;
    justify-content: space-between;
    list-style-type: none;
    flex:0 0 40%;
}
li a{
    color: var(--main-color);
    text-decoration: none;
    border-bottom: solid transparent 2.5px;
    padding-bottom: 1rem;
}
li a:hover{
    color:white;
    border-bottom: solid white 3px;
}
.logo img{
    width: 5rem;
    height: 5rem;
    margin-left: 4.5rem;
}


.fa-asterisk{
    color: var(--main-color);
    position:absolute;
    top:60%;
    left:93%;
    font-size:1rem;
    width: 5rem;
    height: 5rem;
}
</style>