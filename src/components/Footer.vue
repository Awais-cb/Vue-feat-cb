<template>
    <footer>
        <p>Copyright 2018 {{ title }}</p>
    </footer>
</template>
<script>
export default {
    props: {
      title: {
        type: 'Copyright clipbucket 2007-2018',
        required: true
      }
    },
    data(){
        return{
        }
    }
}
</script>
<style scoped>
footer{
    background: #222;
    padding: 6px;
}
p{
        color: lightgreen;
        text-align: center;
}
</style>