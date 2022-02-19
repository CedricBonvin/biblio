<template>
    <section>
        <h3 class="title"> {{ecole.nomComplet}}</h3>
        <div class="col">
            <div class="boxAdresse">
                <h3>ADRESSE:</h3>
                <address>
                    {{ecole.nomComplet}} <br>
                    {{ecole.adresse}} <br>
                    {{ecole.npaVille}} <br> <br>
                    E-mail : {{ecole.mail}} <br>
                    Téléphonne : {{ecole.phone}} <br>
                </address>
            </div>
            <div v-if="ecole.nom === 'Uvrier'"  class="mapouter">
                <div class="gmap_canvas">
                    <iframe class="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=rue du Joncs 1958 uvrier&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                    </iframe><a href="https://kokagames.com/">FNF Mods</a>
                </div>
            </div>
            <div v-if="ecole.nom === 'Bex'" class="mapouter"><div class="gmap_canvas"><iframe class="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=bex gare&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href="https://kokagames.com/">FNF Mods</a></div></div>
        </div>
    </section>
</template>

<script>
export default {
    name : "section-nousTrouver",
    props :["ecole"],
}
</script>

<style scoped>
    section{
        width: 80%;
        margin: auto;
        margin-top: 0 !important;
        background: linear-gradient(356deg, rgba(2,0,36,1) 83%, rgba(2,0,36,0)  83%);

        /* background: rgb(51, 51, 51); */
        padding: 50px 20px;
        padding-top: 150px;
        color: white;
    }
    .col{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        flex-flow: wrap;
    }
    
    .title{
        text-align: center;
        font-size: 50px;
        padding-bottom: 50px;
    }
    h3{
        font-size: 30px;
        padding-bottom: 30px;
    }
    .mapouter{
        position:relative;
        text-align:right;
        width:50%;
        height:300px;
    }
    .gmap_canvas {overflow:hidden;background:none!important;width:100%; height: 100%;}
    .gmap_iframe {width:100%!important;height:100%!important;}

    @media screen and (max-width: 600px){
        section{
            padding-top: 200px;
            margin-top: 0px !important;
        }
        .col{
            flex-flow: column;
            align-items: flex-start;
        }
        .mapouter{
            width: 100%;
            margin-top: 50px;

        }
        .title{
            padding-bottom: 30px;
            font-size: 40px;
        }
        h3{
            font-size: 20px;
            padding-bottom: 10px;
        }
        
    }

</style>