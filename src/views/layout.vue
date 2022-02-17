<template>
    <section>
        <!-- HEADER -->
        <h2>HEADERS PRINCIPAL</h2>
       <div class="headerPrincipal">

           <!-- header-1 -->
            <div class="box">
                <img class="image" src="../assets/images/header-1.png" alt="header">
                <div class="info">
                    <p class="title">INFO</p>
                    <ul>
                        <li>Responsive</li>
                        <li>Police fluide</li>
                        <li>Opacité backgroud</li>
                    </ul>
                    <p>layout/header/header-1.vue</p>
                </div>
            </div>

            <!-- header-2 -->
            <div class="box">
                <img class="image" src="../assets/images/header-2.png" alt="header">
                 <div class="info">
                     <p class="title">INFO</p>
                    <ul>
                        <li>Responsive</li>
                    </ul>
                    <p>layout/header/header-2.vue</p>
                </div>
            </div>
            
            <!-- header-3 -->
            <div class="box">
                <img class="image" src="../assets/images/header-3.png" alt="header">
                 <div class="info">
                     <p class="title">INFO</p>
                    <ul>
                        <li>Responsive</li>
                        <li>Police fluide</li>
                        <li>Opacité background</li>
                    </ul>
                    <p>layout/header/header-3.vue</p>
                </div>
            </div>

            <!-- header-34 -->
            <div class="box">
                <img class="image" src="../assets/images/header-4.png" alt="header">
                 <div class="info">
                     <p class="title">INFO</p>
                    <ul>
                        <li>Responsive</li>
                        <li>Police fluide</li>
                        <li>Opacité background</li>
                    </ul>
                    <p>layout/header/header-4.vue</p>
                </div>
            </div>
       </div>

    </section>
</template>

<script>
export default {
    name : "Home",
    mounted(){
        document.title="layout"
    }
}
</script>

<style lang=scss scoped>
    section{
       padding: 20px;
       padding-top: 50px;
    }
    .headerPrincipal{
        display: flex;
    }
    .info{
        height: auto;
        display: flex;
        flex-flow: column;
        justify-content: center;
        padding: 10px;
        .title{
            font-weight: bold;
            padding-bottom: 10px;
            font-size: 20px;
        }
    }

    .box{
        width: 300px;
        box-shadow: 0 0 15px 5px lightgray;
        margin: 20px;
    }
    .image{
        width: 100%
    }
    ul{
        margin-left: 10px;
        padding-bottom: 10px;
    }
    

</style>