<script setup lang="ts">
import Navbar from '../components/Navbar.vue'
</script>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    data(){
        return{
            hoverSwitch : false,
            projects : [
                {"title":"sarungan", "text":"Sarungan is a website that shows popular sarung in Indonesia.","lang":["HTML","CSS","JS"],"url":"/assets/sarungan.jpg"},
                {"title":"flowerin", "text":"Flowerin is a website that simulate online shop using storageSession.","lang":["HTML","CSS","TS","VueJS"],"url":"/assets/flowerin.jpg"},
                {"title":"ittX", "text":"Python package to convert image into text, and also enhance it.","lang":["Python","EasyOCR"],"url":"/assets/ittx-overview.jpg"},
                {"title":"noteD", "text":"Simple sessionStorage implementation.","lang":["HTML","CSS","JS"],"url":"/assets/noted.jpg"},
                {"title":"ytb-load", "text":"Python apps that allows download youtube videos.","lang":["Python","pytube"],"url":"/assets/ytbload-overview.jpg"}
            ],
            projectSwitch : false,
        }
    },
    methods:{
        stroke(){
            let first = document.getElementById('stroke-on') as HTMLElement;
            let second = document.getElementById('stroke-off') as HTMLElement;
            if (this.hoverSwitch == false){
                first.style.color = 'white';
                second.style.color = 'rgb(24 24 27)';
            } else {
                first.style.color = 'rgb(24 24 27)';
                second.style.color = 'white';
            }
            this.hoverSwitch = !this.hoverSwitch;
        },
        showImage(){
            console.log('anj')
            this.projectSwitch = !this.projectSwitch
        }
    },
})
</script>

<template>
    <div class="font-body">
    <Navbar class="z-10"/>

    <div class="hovertext w-screen h-screen flex flex-col items-center justify-center" id="hovertext">
        <img src="../assets/d1az.png" class="absolute z-10" style="width: 30rem; filter: contrast(110%);" alt="">
        <div class="scroll">
            <div class="rightToleft flex flex-row gap-14" id="stroke-on">
                <h1 class="hero" style="font-size: 9rem;" @mouseover="stroke()">FRONTEND</h1>
                <h1 class="hero" style="font-size: 9rem;" @mouseover="stroke()">FRONTEND</h1>
                <h1 class="hero" style="font-size: 9rem;" @mouseover="stroke()">FRONTEND</h1>
            </div>
            <div class="leftToright flex flex-row gap-14" id="stroke-off">
                <h1 class="hero" style="font-size: 9rem;" @mouseover="stroke()">DEVELOPER</h1>
                <h1 class="hero" style="font-size: 9rem;" @mouseover="stroke()">DEVELOPER</h1>
                <h1 class="hero" style="font-size: 9rem;" @mouseover="stroke()">DEVELOPER</h1>
            </div>
        </div>
        <h1 class="absolute z-20 text-zinc-900 bg-zinc-50 rounded-lg border shadow-md px-20 py-4 text-2xl font-semibold" style="margin-top: 30rem; ">"Craft your design, let <b class="font-semibold bg-yellow-300">every line</b> pulse with life."</h1>
    </div>

    <div class="projects mx-32 mt-20" id="projects">
        <h4 class="text-zinc-700 font-semibold text-xl">This is</h4>
        <h1 class="text-zinc-900 font-semibold text-4xl">My projects</h1>
        <div class="container grid-cols-3 grid gap-10 mt-10">
            
            <div class="card rounded-md border shadow-md p-6 hover:cursor-pointer hover:shadow-lg " v-for="project in projects" @mouseenter="showImage()" @mouseleave="showImage()">
                <div class="images">
                    <img :src="project.url" class="w-full h-40 object-cover mb-4" alt="">
                </div>
                <div class="text">
                    <h1 class="text-xl font-semibold">{{ project.title }}</h1>
                    <p>{{ project.text }}</p>
                    <div class="lang flex gap-2 mt-6 flex-wrap">
                        <p class="rounded-full bg-zinc-300 px-6 py-1" v-for="lang in project.lang">{{ lang }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="scroll items-center justify-center my-20 border-2 py-4">
        <div class="leftToright gap-14 flex" style="width: 2500px;" id="stroke-on">
            <h1 class="hero" style="font-size: 5rem;" @mouseover="stroke()"><a href="https://github.com/d1azdn" target="_blank">SEE ON MY GITHUB - SEE ON MY GITHUB</a></h1>
        </div>
    </div>

    <div class="about mx-32 mt-16" id="about">
        <h4 class="text-zinc-700 font-semibold text-xl">Here we are.</h4>
        <h1 class="text-zinc-900 font-semibold text-4xl">About me</h1>
        <div class="content flex mt-12">
            <div class="images w-1/3">
                <img src="../assets/d1azdn.jpg" class="w-72 h-80 object-cover rounded-xl border shadow-lg" alt="">
            </div>
            <div class="content w-2/3 justify-center content-center">
                <div class="aboutme text-md text-xl">
                    <p>Diaz <i class="text-sm">(d1azdn),</i> a frontend developer driven by his passion for technology, particularly excels in the art of website design. Leveraging <b class="text-xl bg-yellow-300">Vue, Vite and React,</b> he skillfully crafts projects while continually embracing the evolving landscape of web development through his insatiable <b>thirst for knowledge.</b></p>
                </div>
                <div class="plancard flex flex-row gap-6 mt-8">
                    <div class="card border rounded-md shadow-md p-4">
                        <p>Currently learning about</p>
                        <h1 class="font-semibold text-sm">ReactJS, VueJS, Vite, API</h1>
                    </div>
                    <div class="card border rounded-md shadow-md p-4">
                        <p>Plans in the future</p>
                        <h1 class="font-semibold text-sm">Coders, Fullstack, Happy</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="contact mx-32 my-36 text-center" id="contact">
        <h4 class="text-zinc-700 font-semibold text-xl">Catch me up.</h4>
        <h1 class="text-zinc-900 font-semibold text-4xl">Lets work together.</h1>

        <div class="socials grid grid-cols-4 mt-14">
            <div class="githubs flex flex-col justify-center items-center">
                <a href="https://github.com/d1azdn" target="_blank">
                    <div class="github w-20 hover:cursor-pointer">
                    </div>
                </a>
                <p>Github.com/d1azdn</p>
            </div>
            <div class="linkedins flex flex-col justify-center items-center">
                <a href="https://www.linkedin.com/in/diaz-saputra-1b6934288/" target="_blank">
                    <div class="linkedin w-20 hover:cursor-pointer">
                    </div>
                </a>
                <p>Linkedin.com/Diaz-saputra</p>
            </div>
            <div class="gmails flex flex-col justify-center items-center">
                <div class="gmail w-20 hover:cursor-pointer">
                </div>
                <p>diazsaputramc@gmail.com</p>
            </div>
            <div class="houses flex flex-col justify-center items-center">
                <div class="house w-20 hover:cursor-pointer">
                </div>
                <p>Jakarta, Jakarta Selatan</p>
            </div>
        </div>

    </div>

    </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}

.github{
    content: url("data:image/svg+xml,%3C%3Fxml version='1.0' %3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg height='512px' id='Layer_1' style='enable-background:new 0 0 512 512;' version='1.1' viewBox='0 0 512 512' width='512px' xml:space='preserve' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cstyle type='text/css'%3E%3C!%5BCDATA%5B .st0%7Bfill-rule:evenodd;clip-rule:evenodd;%7D%0A%5D%5D%3E%3C/style%3E%3Cg%3E%3Cpath class='st0' d='M256,32C132.3,32,32,134.8,32,261.7c0,101.5,64.2,187.5,153.2,217.9c11.2,2.1,15.3-5,15.3-11.1 c0-5.5-0.2-19.9-0.3-39.1c-62.3,13.9-75.5-30.8-75.5-30.8c-10.2-26.5-24.9-33.6-24.9-33.6c-20.3-14.3,1.5-14,1.5-14 c22.5,1.6,34.3,23.7,34.3,23.7c20,35.1,52.4,25,65.2,19.1c2-14.8,7.8-25,14.2-30.7c-49.7-5.8-102-25.5-102-113.5 c0-25.1,8.7-45.6,23-61.6c-2.3-5.8-10-29.2,2.2-60.8c0,0,18.8-6.2,61.6,23.5c17.9-5.1,37-7.6,56.1-7.7c19,0.1,38.2,2.6,56.1,7.7 c42.8-29.7,61.5-23.5,61.5-23.5c12.2,31.6,4.5,55,2.2,60.8c14.3,16.1,23,36.6,23,61.6c0,88.2-52.4,107.6-102.3,113.3 c8,7.1,15.2,21.1,15.2,42.5c0,30.7-0.3,55.5-0.3,63c0,6.1,4,13.3,15.4,11C415.9,449.1,480,363.1,480,261.7 C480,134.8,379.7,32,256,32z'/%3E%3C/g%3E%3C/svg%3E");
}

.linkedin{
    content: url("data:image/svg+xml,%3C%3Fxml version='1.0' %3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg enable-background='new 0 0 56.693 56.693' height='56.693px' id='Layer_1' version='1.1' viewBox='0 0 56.693 56.693' width='56.693px' xml:space='preserve' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg%3E%3Cpath d='M30.071,27.101v-0.077c-0.016,0.026-0.033,0.052-0.05,0.077H30.071z'/%3E%3Cpath d='M49.265,4.667H7.145c-2.016,0-3.651,1.596-3.651,3.563v42.613c0,1.966,1.635,3.562,3.651,3.562h42.12 c2.019,0,3.654-1.597,3.654-3.562V8.23C52.919,6.262,51.283,4.667,49.265,4.667z M18.475,46.304h-7.465V23.845h7.465V46.304z M14.743,20.777h-0.05c-2.504,0-4.124-1.725-4.124-3.88c0-2.203,1.67-3.88,4.223-3.88c2.554,0,4.125,1.677,4.175,3.88 C18.967,19.052,17.345,20.777,14.743,20.777z M45.394,46.304h-7.465V34.286c0-3.018-1.08-5.078-3.781-5.078 c-2.062,0-3.29,1.389-3.831,2.731c-0.197,0.479-0.245,1.149-0.245,1.821v12.543h-7.465c0,0,0.098-20.354,0-22.459h7.465v3.179 c0.992-1.53,2.766-3.709,6.729-3.709c4.911,0,8.594,3.211,8.594,10.11V46.304z'/%3E%3C/g%3E%3C/svg%3E");
}

.gmail{
    content: url("data:image/svg+xml,%3C%3Fxml version='1.0' %3F%3E%3Csvg height='56.7px' id='Layer_1' style='enable-background:new 0 0 56.7 56.7;' version='1.1' viewBox='0 0 56.7 56.7' width='56.7px' xml:space='preserve' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cpath d='M53.1719,14.5953l0.0011-0.0011l-0.0011,0.0008v-1.184c0-2.2468-1.8384-4.0852-4.0853-4.0852l-0.0012,0.0011l-0.0024,0.0018 l0.0036-0.0029H7.3962l0.0161,0.0131l-0.0161-0.012c-2.2468,0-4.0853,1.8384-4.0853,4.0853v27.9073 c0,2.2468,1.8384,4.0851,4.0853,4.0851h1.4543h38.6578v-0.001c4.2856-0.0498,5.5728-1.1102,5.6702-4.0809L53.1719,14.5953z M46.0429,10.3258L28.1753,23.487L10.4239,10.3258H46.0429z M9.8608,20.5521l16.5508,11.4004l0.0166,0.0115L9.8513,43.4907 L9.8608,20.5521z M10.2886,44.4046l17.0151-11.8314l0.2985,0.2077c0.1716,0.1194,0.3714,0.1792,0.5712,0.1792 c0.1982,0,0.8773-0.39,0.8773-0.39l17.0197,11.8345H10.2886z M46.4973,43.4836L29.9305,31.9641l9.2394-6.3642l7.3274-5.0472V43.4836 z'/%3E%3C/svg%3E");
}

.house{
    content: url("data:image/svg+xml,%3C%3Fxml version='1.0' %3F%3E%3Csvg enable-background='new 0 0 32 32' id='Glyph' version='1.1' viewBox='0 0 32 32' xml:space='preserve' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cpath d='M30.854,16.548C30.523,17.43,29.703,18,28.764,18H28v11c0,0.552-0.448,1-1,1h-6v-7c0-2.757-2.243-5-5-5 s-5,2.243-5,5v7H5c-0.552,0-1-0.448-1-1V18H3.235c-0.939,0-1.759-0.569-2.09-1.451c-0.331-0.882-0.088-1.852,0.62-2.47L13.444,3.019 c1.434-1.357,3.679-1.357,5.112,0l11.707,11.086C30.941,14.696,31.185,15.666,30.854,16.548z' id='XMLID_219_'/%3E%3C/svg%3E");
}

.blackbutton{
    @apply px-4 py-1 font-semibold text-white bg-zinc-900 rounded-md
}
.hero{
    @apply text-center font-extrabold transition-all duration-300;
    line-height: 1;
    letter-spacing: 0.2em;
    -webkit-text-stroke: 3px;
    -webkit-text-stroke-color: rgb(24 24 27);
}
#stroke-on{
    @apply text-zinc-900 hover:cursor-pointer hover:text-white
}
#stroke-off{
    @apply text-white hover:cursor-pointer hover:text-zinc-900 
}

.leftToright{
    animation: leftToright 11s infinite linear;
}

.rightToleft{
    animation: rightToleft 11s infinite linear;
}   

@keyframes leftToright{
    from {
        transform: translateX(0%);
    }
    to {
        transform: translateX(-31.5%);
    }
}

@keyframes rightToleft{
    from {
        transform: translateX(0%);
    }
    to {
        transform: translateX(31.5%);
    }
}


</style>