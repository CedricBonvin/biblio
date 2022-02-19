<template>
    <div class="topBar">
        <div class="logo">MON SITE</div>
        <ul class="hidenMenu">
            <li>
                <router-link to="/">Accueil</router-link>
            </li>
            <li>
                <router-link to="association">A propos</router-link>
            </li>
            <li>
                <router-link to="#">News</router-link>
            </li>
            <li>
                <router-link to="/contact">Contact</router-link>
            </li>
        </ul>
        <i @click="clickBurger($event)" class="burger fas fa-hamburger"></i>
    </div>
</template>

<script>
export default {
    name : "top-bar",
    methods : {
        clickBurger(e){
            e.stopImmediatePropagation()
            let parent = document.querySelector(".topBar")
            let cible = parent.querySelector("ul")
            if(cible.classList.contains("displayMenu")){
                cible.classList.remove("displayMenu")
            }else{
                cible.classList.add("displayMenu")
            }  
        }
    },
    mounted(){
        const html = document.querySelector("html")
        html.addEventListener("click",() => {
            let topBar = document.querySelector(".topBar")
            let cible = topBar.querySelector("ul")
            cible.classList.contains("displayMenu") ? cible.classList.remove("displayMenu") : null
        })
    }
}
</script>

<style lang="scss" scoped>
    .topBar{
        position: fixed;
        display: flex;
        flex-flow: row;
        justify-content: space-between;
        align-items: center;
        z-index: 1000;
        width: 100%;
        background: rgb(0, 0, 0);
        height: 50px;
    }
    ul{
        background: black;
        text-align: center;
        display: flex;  
    }
    .logo{
        padding-left: 20px;
        color: white;
        font-weight: bold;
    }
    a{ 
        color: white;
        transition: .2s;
    }
    a:hover{
        color: rgb(3, 194, 3);
    }
    li{
        list-style-type: none;
        padding:0  20px;
    }
    .burger{
        display: none;
        color: white;
        font-size: 30px;
        cursor: pointer;
    }
    .collapse{
        display: none;
    }
    

    @media screen and (max-width : 500px) {
        
        .burger{
            display: block;
            padding-right: 20px;
        }
       
        .hidenMenu{
            display: block;
            position: fixed;
            top: 50px;
            right: -130px;
            height: 100vh;
            
            transition: .5s ease-in-out;

            li{
                padding : 20px
            }
        }
        .displayMenu{
            right: 0
        };
    }
</style>