<template>
    <div>
        <ul>
            <li><router-link class="route" to="/">Dashboard</router-link></li>
            <li><router-link class="route" to="profile">Profile</router-link></li>
            <li><router-link class="route" to="projects">Projects</router-link></li>
        </ul>
    </div>
</template>
<style>
@media screen and ( max-width: 799px) {
    ul{
        display: flex;
        flex: 1;
    }
}
ul{
    list-style-type: none;
    margin: 0;
    padding: 0;
    background-color: whitesmoke;
    padding: 30px;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
}
li{
    display: inline;
    margin: 10px;
}
.route{
    color: black;
}
</style>
