<script lang="ts">
	import { onMount } from 'svelte';
	import Theme from '$lib/theme.svelte';
	let drawerStatus: boolean = false;
	function checkDrawer() {
		if (!drawerStatus) {
			openDrawer();
		} else {
			closeDrawer();
		}
	}

	function openDrawer() {
		const drawer: any = document.querySelector('.invert');
		const toggleMenu: any = document.querySelector('.toggleMenu');
		toggleMenu.style.zIndex = '10';
		if (typeof window !== 'undefined' && window.innerWidth < 400) {
			drawer.style.height = '70%';
		} else {
			drawer.style.height = '60%';
		}
		drawerStatus = true;
	}
	function closeDrawer() {
		const toggleMenu: any = document.querySelector('.toggleMenu');
		toggleMenu.style.zIndex = '-10';
		const drawer: any = document.querySelector('.invert');
		drawer.style.height = '0%';
		drawerStatus = false;
	}
	//we apply a check here because it is a ssr app which means
	//the page is first compiled on the server where the window object
	//is not available, then it is sent to the client where the
	//window object is available.
	onMount(() => {
		// if (typeof window !== "undefined") {
		//     const navbar: HTMLElement | null = document.querySelector('.navbar');
		//     // const navHeight: number | undefined = document.getElementById('navbar')?.offsetHeight;
		//     // document.body.style.paddingTop = navHeight + "px";
		//     let lastScrollTop: number;
		//     window.addEventListener('scroll',function(){
		//         const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		//         // if(scrollTop > lastScrollTop){
		//         //     navbar!.style.top='-80px';
		//         // }
		//         // else{
		//         //     navbar!.style.top='0';
		//         // }
		//         // if(scrollTop > lastScrollTop) {
		//         //     navbar?.classList.remove('scrolled-down');
		//         //     navbar?.classList.add('scrolled-up');
		//         // }
		//         // else {
		//         //     navbar?.classList.remove('scrolled-up');
		//         //     navbar?.classList.add('scrolled-down');
		//         // }
		//         // lastScrollTop = scrollTop;
		//     });
		// }
	});
</script>

<nav class="navbar scrolled-up">
	<ul class="normal">
		<li><a href="#contact">contact</a></li>
		<li><a href="#about">about</a></li>
		<li><a href="#"><img src="/favicon-32x32.png" width="24px" alt="utkarsh"/></a></li>
		<li><a href="#blogs">blogs</a></li>
		<Theme />
	</ul>
	<img
		class="hamburger"
		src="/hamburger.svg"
		on:click={checkDrawer}
		on:keydown={checkDrawer}
		width="32px"
		alt="hamburger menu"
	/>
	<div class="themeChangeMobile">
		<Theme />
	</div>
</nav>
<div class="toggleMenu">
	<div class="invert">
		<img src="/shortDown.svg" on:click={closeDrawer} on:keydown={closeDrawer} class="close" width="32px" alt="close" />
		<ul class="responsive">
			<li><a href="#" on:click={closeDrawer}>
				<img src="/favicon-32x32.png" width="24px" alt="utkarsh"/>
			</a></li>
			<li><a href="#about" on:click={closeDrawer}>about</a></li>
			<li><a href="#contact" on:click={closeDrawer}>contact</a></li>
			<li><a href="#blogs" on:click={closeDrawer}>blogs</a></li>
		</ul>
	</div>
</div>

<style>
	.normal {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		list-style: none;
		align-items: center;
		width: 80vw;
		margin: 0 auto;
		padding: 0.5rem;
	}
	a {
		text-decoration: none;
		color: var(--font);
		font-size: large;
		display: block;
		width: 100%;
		height: 100%;
	}

	nav {
		padding-top: 0.5rem;
		position: fixed;
		top: 90%;
		width: 100vw;
		background-color: var(--bg);
		top: 0;
		padding-bottom: 0.5rem;
		user-select: none;
		/* transition: all 0.3s ease-in-out; */
		z-index: 100;
		/* box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px; */
	}
	/* 
    .scrolled-down{
        transform:translateY(-100%) !important; transition: all 0.3s ease-in-out;
    }
    .scrolled-up{
        transform:translateY(0) !important; transition: all 0.3s ease-in-out;
    } */

	li {
		border-radius: 15px;
		background: var(--bg);
		box-shadow: var(--neumorph-distance) var(--neumorph-distance) var(--neumorph-blur-radius)
				var(--neumorph-doffset),
			calc(-1 * var(--neumorph-distance)) calc(-1 * var(--neumorph-distance))
				var(--neumorph-blur-radius) var(--neumorph-loffset);
		padding: 0.5rem;
		width: 10%;
		text-align: center;
	}
	li:hover {
		border-radius: 15px;
		background: var(--bg);
		box-shadow: inset var(--neumorph-distance) var(--neumorph-distance) var(--neumorph-blur-radius)
				var(--neumorph-doffset),
			inset calc(-1 * var(--neumorph-distance)) calc(-1 * var(--neumorph-distance))
				var(--neumorph-blur-radius) var(--neumorph-loffset);
	}
	/* to be applied to nav link of the current page */
	/* .selected{
        border-radius: 15px;
        background: var(--bg);
        box-shadow: inset var(--neumorph-distance) var(--neumorph-distance) var(--neumorph-blur-radius) var(--neumorph-doffset), inset calc(-1*var(--neumorph-distance)) calc(-1*var(--neumorph-distance)) var(--neumorph-blur-radius) var(--neumorph-loffset);
    } */

	.hamburger,
	.toggleMenu,
	.close,
	.themeChangeMobile {
		display: none;
	}

	@media screen and (max-width: 768px) {
		.normal {
			display: none;
		}

		nav {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			transition: top 0.1s ease-out;
		}
		.hamburger {
			display: block;
			padding: 0.5rem;
			border-radius: 50px;
			background: var(--bg);
			box-shadow: var(--neumorph-distance) var(--neumorph-distance) var(--neumorph-blur-radius)
					var(--neumorph-doffset),
				calc(-1 * var(--neumorph-distance)) calc(-1 * var(--neumorph-distance))
					var(--neumorph-blur-radius) var(--neumorph-loffset);
			margin-left: 1.5rem;
			margin-top: 0.25rem;
		}

		.themeChangeMobile {
			display: block;
			margin-right: 2rem;
		}
		.hamburger:active,
		.close:active {
			border-radius: 50px;
			background: var(--bg);
			box-shadow: inset var(--neumorph-distance) var(--neumorph-distance)
					var(--neumorph-blur-radius) var(--neumorph-doffset),
				inset calc(-1 * var(--neumorph-distance)) calc(-1 * var(--neumorph-distance))
					var(--neumorph-blur-radius) var(--neumorph-loffset);
		}

		.toggleMenu {
			display: flex;
			position: fixed;
			flex-direction: column-reverse;
			background-color: transparent;
			width: 100vw;
			z-index: -1;
			user-select: none;
			height: 100vh;
		}

		.invert {
			width: 100%;
			height: 0%;
			background-color: var(--bg);
			border-radius: 50px 50px 0 0;
			box-shadow: 0px -10px 50px 20px rgba(0, 0, 0, 0.3);
			transition-property: height;
			transition-duration: 0.2s;
			transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
		}

		.responsive {
			display: flex;
			height: 60%;
			flex-direction: column;
			justify-content: space-between;
			align-items: center;
			list-style: none;
			padding: 1rem;
		}

		.responsive li {
			width: 50%;
			text-align: center;
		}
		.close {
			display: block;
			text-align: center;
			margin: 1rem auto;
			border-radius: 50px;
			background: var(--bg);
			box-shadow: var(--neumorph-distance) var(--neumorph-distance) var(--neumorph-blur-radius)
					var(--neumorph-doffset),
				calc(-1 * var(--neumorph-distance)) calc(-1 * var(--neumorph-distance))
					var(--neumorph-blur-radius) var(--neumorph-loffset);
		}
	}

	@media screen and (max-width: 1024px) {
		li {
			width: auto;
		}
	}
</style>
