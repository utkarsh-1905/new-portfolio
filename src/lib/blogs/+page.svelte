<script lang="ts">
	import BlogCard from '$lib/blog_card.svelte';
	import { Swiper, SwiperSlide } from 'swiper/svelte';
	import { Keyboard, Pagination, Autoplay } from 'swiper';
	import 'swiper/css';
	import 'swiper/css/pagination';
	export let data: any;
</script>

<section class="blogs-section" id="blogs">
	<h2 class="section-heading">blogs</h2>

	<div class="swiper-wrap">
		<Swiper
			modules={[Keyboard, Pagination, Autoplay]}
			keyboard={true}
			spaceBetween={20}
			slidesPerView={'auto'}
			pagination={{ clickable: true }}
			autoplay={{ delay: 3500, disableOnInteraction: false }}
			loop={true}
			speed={800}
		>
			{#each data.medBlogs as blog}
				<SwiperSlide><BlogCard {...blog} /></SwiperSlide>
			{/each}
			{#each data.devBlogs as blog}
				<SwiperSlide><BlogCard {...blog} /></SwiperSlide>
			{/each}
		</Swiper>
	</div>
</section>

<style>
	.blogs-section {
		margin-top: 4rem;
		padding-bottom: 3rem;
	}

	.swiper-wrap {
		border-radius: var(--radius-lg);
		box-shadow: var(--shadow-inset);
		padding: 1.75rem 1.5rem 1.5rem;
	}

	/* slides need auto width — global override required */
	:global(.swiper-slide) {
		width: auto !important;
	}

	/* push pagination dots below cards */
	:global(.swiper-wrap .swiper) {
		padding-bottom: 2.75rem !important;
	}

	:global(.swiper-wrap .swiper-pagination) {
		bottom: 0.75rem !important;
	}
</style>
