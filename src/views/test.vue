<template>
    <section>
        <header-3 />
        <p class="first">JE TEST ICI MES COMPOSANTS</p>
    </section>
</template>


<script>
import Header3 from '../components/biblio/layout/header/header-2.vue'

export default {
  components: {Header3  },
  name : "test",
}
</script>

<style lang="scss" scoped>
    .first{
        padding: 20px;
        font-weight: bold;
        text-align: center;
        font-size: 30px;
    }

</style>
