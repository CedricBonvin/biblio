
*******  FORMULAIRE *********

TEST FORMULAIRE

            nom :       si exisite || - que 2 carc. || plus de 20 carac.
            mail :      si exisite || - que 2 carc. || plus de 40 carac. ( c'est de la merde pour l'instant )
            message :   si exisite || - que 2 carc. || plus de 200 carac. 

            renvoie un message d'erreur sous les input concerné

ENVOIE
-------

- le formulaire est envoyée à --- this.$store.state.HOST/api/contact





<template>
    <section>
        <div class="box">
            <div class="boxFormulaire">
                <div class="headerBox">
                    <div> 
                        <!-- Petite Image -->
                        <img class="imageMin" src="@/assets/images/visage-enfant.jpg" alt="photo">
                        <h3>CONTACTEZ-NOUS....</h3>
                    </div>
                     <p class="sousTitre">Nous vous répondrons dans les plus brefs délais</p>
                     <!-- Couleur haut droite -->
                     <div class="color"></div>
                </div>
                <div class="col1">
                    <!-- Grande Image -->
                    <div class="image"></div>
                </div>
                <form class="col1">
                    <div class="col">
                        <label for="nom">Nom</label>
                        <input type="text" v-model="infoForm.nom">
                        <p class="erreur" v-if="erreur.nom">{{erreur.nom}}</p>
                    </div>
                    <div class="col">
                        <label for="e-mail">E-mail</label>
                        <input type="text" v-model="infoForm.mail">
                        <p class="erreur" v-if="erreur.mail">{{erreur.mail}}</p>
                    </div>
                    <div class="col colMessage">
                        <label for="nom">Message</label>
                        <textarea v-model="infoForm.message"></textarea>
                        <p class="erreur" v-if="erreur.message">{{erreur.message}}</p>
                    </div>
                </form>
                <div class="boxButton">
                        <button class="button button_base" @click="sendForm()" id="submit" >ENVOYER</button>
                 </div>
            </div>
            
        </div>
    </section>
</template>

<script>
export default {
    name : "section-contact",
    props : ["ecole"],
    data(){
        return{
            infoForm : {
                nom : "",
                mail : "",
                message : ""
            },
            erreur : {
                nom : "",
                mail : "",
                message : ""
            }
        }
    },
    methods : {
        testForm(){
            for (let item in this.infoForm){
                this.erreur[item] = ""
            }
            let valid = true

            // NOM
            if (this.infoForm.nom){
                if (this.infoForm.nom.length < 2 ||  this.infoForm.nom.length > 20){
                    valid = false
                    this.erreur.nom = "Entre 2 et 20 caractères"
                }
            } else { 
                valid = false
                this.erreur.nom = "Veuillez remplir le champ"
            }

             // MAIL
            if (this.infoForm.mail){
                if (this.infoForm.mail.length < 2 ||  this.infoForm.mail.length > 40){
                    valid = false
                    this.erreur.mail = "Ça ne ressemble pas un mail ?"
                }
            } else { 
                valid = false
                this.erreur.mail = "Veuillez remplir le champ"
            }

             // message
            if (this.infoForm.message){
                if (this.infoForm.message.length < 2 ||  this.infoForm.message.length > 200){
                    valid = false
                    this.erreur.message = "Entre 2 et 200 caractères max.?"
                }
            } else { 
                valid = false
                this.erreur.message = "Veuillez remplir le champ"
            }


            return valid
        },
        sendForm(){
            if(this.testForm()){
                console.log("ok pour le formulaire")
            }else{
                console.log("ERREUR DANS LE FORMULAIRE...!")
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    //   @import "@/scss/_variables.scss";

    section{
        padding: 80px 0;
         width: 100%;
        margin: auto;
    }
   
    h3{
        font-size: 40px;
        padding-bottom: 20px;
    }
    h4{
        font-size: 30px;
        text-align: center;
        width: 100%;
        padding: 10px;
      
    }
    .box{
        // box-shadow: 0 0 15px 5px gray;
        padding: 30px;
        background: white;
        width: 90%;
        margin: auto;
    }
    .headerBox{
        position: relative;
        width: 100%;
        margin-bottom: 30px;
        border-bottom: solid 2px lightgray;
        color: rgb(75, 74, 74);
        padding-bottom: 20px;

        h3{
            margin: 0;
            padding: 0;
            padding-right: 20px;
        }

        .color{
            position: absolute;
            top: 0;
            right: 0;
            height: 50%;
            width: 30%;
            background: $color-secondary;
        }
        .sousTitre{
            font-style: italic;
            font-size: 16px;
            padding-right: 20px;
        }
    }
    .boxFormulaire{
        display: flex;
        flex-flow: wrap;
        // border: solid 3px rgb(219, 219, 219);
        border-radius: 5px;
        padding: 20px;
    }
    form{
        display: flex;
        justify-content: space-between;
        flex-flow: wrap;
        width: 50%;
        padding-left: 20px;
    }
    label{
        display: block;
        font-weight: bold;
    }
    label:before{
        content: "*";
        color: red;
        padding-right: 5px;
    }
    .col{
        width: 100%;
        min-width: 250px;
        margin: 10px 0;
       
    }
    .col1{
        width: 50%;
        .image{
            width: 100%;
            height: 100%;
            background: url("../../../assets/images/montagne.jpg") no-repeat;
            background-size: cover;
            background-position: center;
        }
    }
    .colMessage{
        width: 100%;
    }
    .boxButton{
        display: flex;
        justify-content: right;
        width: 100%;
        margin-top: 50px;

       
    }
    input{
        width: 100%;
        border: solid 1px rgb(202, 199, 199);
        background: rgb(241, 240, 240);
        padding: 5px;
    }
    textarea{
        border: solid 1px rgb(202, 199, 199);
        background: rgb(240, 240, 240);
        padding: 5px;
        width: 100%;
        height: 200px;
    }
    .imageMin{
        width: 70px;
        height: 70px;
        object-fit: cover;
    }
    .erreur{
        font-size: 12px;
        color: red ;
    }

    @media screen and (max-width : 600px){
        section{
            width: 100%;
           
        }
        .box{
            width: 100%; 
            padding: 0px;
        }
        .boxFormulaire{
            padding: 0;
            flex-direction: column;
        }
        .headerBox{
            .color{
                height: 80%;
                width: 10px;
            }
            h3{
                font-size: 30px;
            } 
        }
        form{
            width: 100% !important;
        }
        .col1{
            width: 100%;
            padding: 0;

            .image{
                height: 200px;
            }
        }
        
    }

    @media screen and (max-width : 800px){
        .box{
            width: 100%; 
            padding: 20px;
        }
        .headerBox{
            .color{
                height: 80%;
                width: 10px;
            }
            h3{
                font-size: 35px;
            } 
        }
    }

</style>