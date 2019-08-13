<template>
    <b-container class="background" fluid>
        <h2>Howdy, {{ username }} </h2>
        <b-container >
        <box />
        </b-container>
        <hr class="hr">
    </b-container>
</template>
<script>
import box from '../components/box.vue'
export default {
components: {
    box
},
methods: {
}
}
</script>
<style scoped>
.hr{
    padding-top: 20px;
}
</style>