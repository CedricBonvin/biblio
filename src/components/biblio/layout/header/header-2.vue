
**********   COMPOSANT STATIQUE    ************




<template>
    <section>
        <div class="cont">
            <div class="col">
                <img src="@/assets/images/visage-enfant.jpg" alt="">
            </div>
            <div class="text col">
                <h1>
                    <span class="title">MON TITRE</span><br>
                    <span class="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error temporibus molestias soluta perferendis sit sint provident! Possimus hic natus eum, harum molestiae fugiat officiis in quia, delectus fuga sunt itaque?</span>  
                </h1>
                <div class="boxButton">
                    <button class="button1">button1</button>
                    <button class="button2">button2</button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name : "header-2"
}
</script>

<style lang=scss scoped>

    section{
        padding-top: 50px;
        display: flex;
        align-items: center;
        width: 100%;
        min-height: 100vh;
        background: rgb(199, 32, 17);
        background: linear-gradient(90deg, rgb(212, 32, 15) 25%, rgba(0,0,0,1) 25%);
        color: white;
        box-sizing: border-box;
    }
    .col{
        width: 50%;
    }
    img{
        width: 60%;
        height: 70vh;
        object-fit: cover;
        transform: translateX(30%);
        border-radius: 20px;
    }
    .cont{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
    .title{
        position: relative;
        display: block;
        font-size: 40px;
    }
    .title:before{
        content: "";
        position: absolute;
        bottom: 0;
        width: 50%;
        height: 3px;
        background: red;
    }
    .para{
        display: block;
        font-size: 16px;
        font-style: italic;
        padding-right: 20px;
    }
    button{
        padding: 10px 30px;
        margin-right: 20px;
        font-size: 20px;
        cursor: pointer;
        color: white;
        border: none;
    }
    .boxButton{
        margin-top: 20px;
    }
    .button2{
        background: green;
    }
    .button1{
        background: red;
    }

    @media  screen and (max-width:900px) {
        img{
            height: 50vh;
        }
    }

     @media  screen and (max-width:700px) {
        img{
            height: 30vh;
            width: 40vw;
            min-width: 200px;
            transform: translateY(0);
        }
      
        .cont{
            flex-flow: column;
            justify-content: center;
        }
        .col{
            width: 100%;
        }
        .cont{
            margin-left: 0%;
        }
        button{
            margin-bottom: 20px;
            font-size: 16px;
        }
        .text{
            /* transform: translateX(-25%);  */
            width: 100%;
            background: rgba(0, 0, 0, 0.658);
            padding: 20px;

        }
    }

</style>