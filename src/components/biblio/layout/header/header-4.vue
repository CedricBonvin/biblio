<template>
    <section>
        <div class="col">
            <h1>
                <span class="title">MON TITRE</span> <br>
                <span class="sousTitre"> Nihil similique eaque sapiente reprehenderit. Aperiam facere alias sunt soluta repudiandae quis rem minus, blanditiis libero laborum. Delectus quidem incidunt saepe earum?</span>
            </h1>
            <div class="boxIcone">
                <i class="icone fa-brands fa-facebook-f"></i>
                <i class="icone fa-brands fa-twitter"></i>
                <i class="icone fa-brands fa-instagram"></i>
            </div>
        </div>
        <div class="col col2 text">
            <img class="img1" src="@/assets/images/header.jpg" alt="">
            <div class="secondBox">
                <img class="img2" src="@/assets/images/visage-enfant.jpg" alt="">
                <p class="text2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque magnam velit incidunt omnis sit quas cum iste? Consequuntur laborum natus, veniam perferendis suscipit neque officiis. Labore ullam exercitationem aliquid deserunt?</p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name : "header-4"
}
</script>

<style lang="scss" scoped>

    section{
        position: relative;
        display: flex;
        width: 100%;
        min-height: 100vh;
    }
    section:before{
        position: absolute;
        z-index: -2;
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left : 0;
        background-repeat: no-repeat;
        background:
            linear-gradient(149deg, rgba(70, 58, 75, 0.534) 50%, rgba(0, 0, 0, 0.938) 50%),
             url("../../../../assets/images/montagne.jpg") 
        ;
        background-size: cover ;
        background-position: left top;
    }
    .col{
        width: 50%;
    }
    .col2{
        display: flex;
        flex-flow: column;
        justify-content: space-between;

        .img1{
            display: block;
            width: 350px;
            height: 350px;
            object-fit: cover;
            margin: auto;
            margin-top: 80px;
            border: solid 5px white ;
            border-radius: 50%;
        }

        .img2{
            width: 30%;
        }
    }
    .sousTitre{
        display: block;
    }
    .boxIcone{
        margin-top: 50px;
        display: flex;
    }
    .text{
        color: rgb(255, 255, 255);
    }
    .text2{
        position: relative;
        font-size: 20px;
        margin: 20px 0;
    }
    h1{
        padding-top: 80px;
        color: rgb(255, 255, 255);
        padding-left: 2vw;   
    }
    .icone{
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 40px;
        width: 70px;
        height: 70px;
        background: purple;
        border: solid 2px white;
        color: white;
        border-radius: 10px;
        margin: 20px;
        cursor: pointer; 
        transition: .3s;    
    }
    .icone:hover{
        transform: scale(1.1);
        color: red;
    }
    .title{
        font-size: 8vw;
    }

    @media screen and (max-width:900px) {
        .col2{
            .img1{
                width: 300px;
                height: 300px;
                margin-top: 80px;
            }
        }  
    }

    @media screen and (max-width:700px) {
        section{
            min-height: 100vh;
            flex-flow: column;
           
        } 
        section:before{
           background : 
            linear-gradient(180deg, rgba(70, 58, 75, 0.534) 50%, rgba(0, 0, 0, 0.938) 50%),
            url("../../../../assets/images/montagne.jpg") 
        }
        .col{
            width: 100%;
            height: 50% !important;
        }
        .col2{
            display: flex;
            flex-flow: row;
            justify-content: space-between;
            align-items: center;
            text-align: right;
            padding-right: 20px;
            margin-top: 30px;
            
            height: 100%;

            .text2{
                font-size: 16px;
            }
            .img2{
                display: block;
                width: 130px;
            }
            .secondBox{
                display: flex;
                flex-flow: column;
                align-items: flex-end;
            }
        }
        .col2 .img1{
            width: 250px;
            height: 250px;
            margin: 0 auto;
        }
        .boxIcone{
            display: flex;
            justify-content: center;
            margin-top: 0;
        }
    }

    @media screen and (max-width:500px){
        section{
            min-height: 500px;
        }
        .icone{
            transform: scale(.7);
        }
        .col2{
            display: flex;
            flex-flow: column;
            justify-content: center;
            position: relative;
            padding: 0 20px;
            height: 100%;
            .img1{
                width: 150px;
                height: 150px;
            }
            .img2{
                width: 80px;
                height: 80px;
                object-fit: cover;
            }
            .secondBox{
                display: flex;
                flex-flow: row;
                align-items: flex-start;
            }
            .text2{
                padding-left: 20px;
            }
        }
        @media screen and (max-width:400px){
            .col2{
                .img1{
                    width: 100px;
                    height: 100px;
                    border: solid 3px white;
                    left: 10px;
                    bottom: 10px;
                }
            }
            .title{
                font-size: 40px;
            }
        }
    }

</style>