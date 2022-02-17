<template>
    <section>
        <div class="col col1"> </div>
        <div class="col col2">
            
        </div>
        <div class="cont">
            <h1>
                <span class="title">MON TITRE</span> <br>
                <span class="text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam voluptates aperiam commodi assumenda incidunt</span>
            </h1>
        </div>
    </section>
</template>

<script>
export default {
    name : "header-3"
}
</script>

<style lang="scss" scoped>
    section{
        position: relative;
        display: flex;
        width: 100%;
        height: 100vh;
    }
    .col{
        width: 50%;
        height: 100%;
    }
    .col1{
        background: 
            // linear-gradient(90deg, rgba(0, 0, 0, 0.479) 100%, rgb(0, 0, 0) 100%),
            url("../../../../assets/images/ville1.jpg");
        background-size: cover;
        background-position: right;
        // opacity: 90%;
    }
    .col2{
        background: black;
    }
    .cont{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: black;
        color: white;
        // padding: 20px;
    }
    h1{
        background: black;
        padding: 20px;
    }
    .cont:before{
        content: "";
        position: absolute;
        display: block;
        top: -35px;
        right: -50px;
        z-index: -20;
        width: 30%;
        height: 120%;
        border: 3px solid red;
        // transform: translate(20px, 20px);
    }
    .title{
        position: relative;
        display: inline-block;
        font-size: 8vw;
        padding: 0;
        margin-bottom: 10px;
    }
    .title:before{
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 50%;
        height: 3px;
        background: red;
    }
    .text{
        font-style: italic;
    }

    @media  screen and (min-width:1000px) {
        .title{
            font-size: 80px;
        }
    }

     @media  screen and (max-width:700px) {
        .cont{
            width: 70%;
        }
    }

    @media  screen and (max-width:500px) {
        section{
            flex-flow: column;
        }
        .col{
            width: 100%;
        }
        .title{
            font-size: 40px;
        }
        .cont:before{
            width: 50%;
            height: 150%;
            top: 0;
            left: 50%;
            transform: translate(-50%);
        }
    }

</style>