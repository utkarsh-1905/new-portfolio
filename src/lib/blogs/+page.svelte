<script lang="ts">
	import BlogCard from '$lib/blog_card.svelte';
	import { Swiper, SwiperSlide } from 'swiper/svelte';
	import { Keyboard, Pagination, Autoplay } from 'swiper';
	import 'swiper/css';
	import 'swiper/css/bundle';
	export let data: any;
</script>

<div class="container" id="blogs">
	<p style="font-size:1.5rem; color: var(--font);">blogs</p>
	<!-- <p class="blog-about">
		i casually write blogs and tutorials about technical concepts... give it a read
	</p> -->
	<div class="blogs">
		<div class="blog-box">
			<Swiper
				modules={[Keyboard, Pagination, Autoplay]}
				keyboard={true}
				spaceBetween={40}
				slidesPerView={2}
				pagination={{ clickable: true }}
				breakpoints={{
					280: {
						slidesPerView: 1
					},
					586: {
						slidesPerView: 2,
						spaceBetween: 20
					},
					786: {
						spaceBetween: 20,
						slidesPerView: 'auto'
					},
					1048: {
						spaceBetween: 50
					}
				}}
				autoplay={true}
				loop={true}
				speed={1000}
			>
				{#each data.medBlogs as blog}
					<SwiperSlide><BlogCard {...blog} /></SwiperSlide>
				{/each}
				{#each data.devBlogs as blog}
					<SwiperSlide><BlogCard {...blog} /></SwiperSlide>
				{/each}
			</Swiper>
		</div>
	</div>
</div>

<style>
	.container {
		height: fit-content;
		margin-top: 5rem;
	}
	p {
		text-align: center;
		font-size: large;
		padding-top: 0.5rem;
	}

	.blogs {
		padding-top: 1rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}


	.blog-about {
		text-align: left;
		margin-top: 1rem;
		font-size: medium;
	}

	.blog-box {
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
		box-shadow: inset var(--neumorph-distance) var(--neumorph-distance) var(--neumorph-blur-radius)
				var(--neumorph-doffset),
			inset calc(-1 * var(--neumorph-distance)) calc(-1 * var(--neumorph-distance))
				var(--neumorph-blur-radius) var(--neumorph-loffset);
	}
</style>
