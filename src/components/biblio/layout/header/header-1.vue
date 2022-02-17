<template>
    <section>
            <div class="row">
                <h1>
                    <span class="title">MON TITRE</span><br>
                    <span class="text"> Lorem ipsum dolor sit amet consecteturditiis numquam, quam nisi fugiat ad commodi    voluptatem iste.</span>
                </h1>
            </div>
    </section>
</template>

<script>
export default {
    name : "header"
}
</script>

<style lang="scss"  scoped>
    section{
        position: relative;
         padding-top: 50px;
        display: flex;
        align-items: center;
        justify-self: center;
        height: 100vh;
        width: 100%;
    }
    section:before{
        content: "";
        background:     
                    linear-gradient(90deg, rgba(0, 0, 0, 0) 100%, rgb(0, 0, 0) 100%),
                    url("../../../../assets/images/header.jpg");
        background-size: cover;
        background-position: center;
        position: absolute;
        z-index: -2;
        width: 100%;
        height: 100%;
        top: 0 ;
        left: 0;
    }
    .row{
        width: 100%;
        padding: 50px 0;
        padding-left: 2vw;
        color: white;
        background: rgba(0, 0, 0, 0.432);
    }
    .title{
        font-size: 10vw;
    }
    .text{
        display: block;
        font-style: italic;
        max-width: 400px;
    }

    @media screen and (min-width:1000px) {
        .title{
            font-size: 100px;
        } 
    }
    @media screen and (max-width:400px) {
        .title{
            font-size: 40px;
        } 
    }


</style>