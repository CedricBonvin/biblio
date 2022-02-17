<template>
    <div class="topBar">
        <div class="logo">BIBLIOTHEQUE</div>
        <ul>
            <li><a href="/">layout</a></li>
            <li><a href="#">header</a></li>
            <li><a href="#">citation</a></li>
            <li><a href="test">Test</a></li>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .topBar{
        position: fixed;
        z-index: 10000;
        width: 100%;
        background: black;
        color: white;
        height: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .logo{
        padding-left: 20px;
    }
    ul{
        display: flex;
        padding-right: 20px;
        list-style-type: none;
        a{
            padding: 0 20px;
            color: white;
            text-decoration: none;
        }
        a:hover{
            cursor: pointer;
            color: rgb(166, 167, 166);
        }
    }

</style>