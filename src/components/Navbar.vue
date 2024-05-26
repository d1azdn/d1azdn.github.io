<template>
    <div class="justify-center flex content-center">
        <div class="navbar flex flex-row justify-center sm:justify-between mt-2 border shadow-md rounded-md px-6 py-2 absolute w-5/6">
            <div class="images">
                <img src="../assets/Logo-black-HDZ62cod.png" class="w-12" alt="">
            </div>
            <div class="navigation grid-cols-4 sm:grid hidden">
                <button><a href="">Home</a></button>
                <button><a href="#projects">Projects</a></button>
                <button><a href="#about">About</a></button>
                <button class="blackbutton"><a href="#contact">Contact me</a></button>
            </div>
        </div>
    </div>
</template>

<style scoped>
button{
    @apply hover:bg-zinc-200 hover:rounded-md transition-all duration-300
}

</style>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    data(){
        return {
            
        }
    }
})
</script>