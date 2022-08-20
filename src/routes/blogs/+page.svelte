<script lang="ts">
    import BlogCard from "$lib/blog_card.svelte";
    import { Swiper, SwiperSlide } from "swiper/svelte"
    import { Keyboard, Autoplay } from 'swiper';
    import "swiper/css";
    import "swiper/css/bundle"
    export let data: any;
</script>

<div class="container">
    <p>blogs</p>
    <div class="blogs">
        <div class="info">
            <a href="https://medium.com/@utripathi2002" target="_blank">medium &#x2197;</a>
        </div>
        <div class="medium">
        <Swiper
            modules={[Keyboard, Autoplay]}
            keyboard={true}
            loop={true}
            spaceBetween={40}
            slidesPerView={3}
            breakpoints={
                {
                    280:{
                        slidesPerView: 1,
                    },
                    586:{
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    786:{
                        spaceBetween: 20,
                        slidesPerView: 3,
                    },
                    1048:{
                        spaceBetween: 50,
                    }
                }
            }
        >
            {#each data.medBlogs as blog}
                <SwiperSlide><BlogCard {...blog} /></SwiperSlide>
            {/each}
        </Swiper>
        </div>
        <div class="info">
            <a href="https://dev.to/utkarsh1905" target="_blank">dev.to &#x2197;</a>
        </div>
        <div class="devto">
            <Swiper
            modules={[Keyboard, Autoplay]}
            keyboard={true}
            loop={true}
            spaceBetween={40}
            slidesPerView={3}
            breakpoints={
                {
                    280:{
                        slidesPerView: 1,
                    },
                    586:{
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    786:{
                        spaceBetween: 20,
                        slidesPerView: 3,
                    },
                    1048:{
                        spaceBetween: 50,
                        slidesPerView:1
                    }
                }
            }
        >
        {#each data.devBlogs as blog}
        <SwiperSlide><BlogCard {...blog} /></SwiperSlide>
    {/each}
        </Swiper>
        </div>
        <!-- <div class="info">
            <a href="blog.utkarsh.ninja" target="blank">hashnode</a>
        </div>
        <div class="hashnode">
            <BlogCard />
        </div> -->
    </div>
</div>

<style>
    .container{
        height: fit-content;
    }
    p{
        text-align: center;
        font-size: large;
        padding-top: 0.5rem;
    }

    .blogs{
        padding-top: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .info{
        margin-top: 2rem;
    }

    .medium,.devto{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-top: 1rem;
        margin-bottom: 1rem;
        border-radius: 15px;
        height: 300px;
        padding-left: 1rem;
        padding-right: 1rem;
        box-shadow: inset var(--neumorph-distance) var(--neumorph-distance) var(--neumorph-blur-radius) var(--neumorph-doffset), inset calc(-1*var(--neumorph-distance)) calc(-1*var(--neumorph-distance)) var(--neumorph-blur-radius) var(--neumorph-loffset);
    }
    a{
        font-size: large;
    }
</style>