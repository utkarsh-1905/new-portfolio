<script lang="ts">
	import BlogCard from '$lib/blog_card.svelte';
	import { Swiper, SwiperSlide } from 'swiper/svelte';
	import { Keyboard, Pagination } from 'swiper';
	import 'swiper/css';
	import 'swiper/css/bundle';
	export let data: any;
</script>

<div class="container">
	<p style="font-size:1.5rem">blogs</p>
	<p class="blog-about">
		i casually write blogs and tutorials about technical concepts... give it a read
	</p>
	<div class="blogs">
		<div class="info">
			<a href="https://medium.com/@utripathi2002" target="_blank" rel="noreferrer"
				>medium &#x2197;</a
			>
		</div>
		<div class="medium">
			<Swiper
				modules={[Keyboard, Pagination]}
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
			>
				{#each data.medBlogs as blog}
					<SwiperSlide><BlogCard {...blog} /></SwiperSlide>
				{/each}
			</Swiper>
		</div>
		<div class="info">
			<a href="https://dev.to/utkarsh1905" target="_blank" rel="noreferrer">dev.to &#x2197;</a>
		</div>
		<div class="devto">
			<Swiper
				modules={[Keyboard, Pagination]}
				keyboard={true}
				slidesPerView="auto"
				spaceBetween={40}
				pagination={{ clickable: true }}
				breakpoints={{
					280: {
						slidesPerView: 1
					},
					586: {
						slidesPerView: 'auto',
						spaceBetween: 20
					},
					786: {
						spaceBetween: 20
					},
					1048: {
						spaceBetween: 50
					}
				}}
			>
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

	.info {
		margin-top: 2rem;
	}

	.blog-about {
		text-align: left;
		margin-top: 1rem;
	}

	.medium,
	.devto {
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
	a {
		font-size: large;
	}
</style>
