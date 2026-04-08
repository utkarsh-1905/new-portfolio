import axios from 'axios';
import { env } from '$env/dynamic/private';

export const mediumBlogs = async () => {
	const mediumUrl =
		'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40utripathi2002';
	try {
		const rss = await axios.get(mediumUrl);
		return rss.data.items.map((el: any) => ({
			title: el.title,
			link: el.link,
			categories: el.categories,
			thumbnail: (() => {
				try {
					const match = el.description.match(/src="([^"]+)"/);
					return match ? match[1] : null;
				} catch {
					return null;
				}
			})()
		}));
	} catch {
		return [];
	}
};

export const devtoBlogs = async () => {
	try {
		const res = await axios.get('https://dev.to/api/articles?username=utkarsh1905', {
			headers: {
				'api-key': env.VITE_DEVTO ?? ''
			}
		});
		return res.data.map((el: any) => ({
			title: el.title,
			link: el.url,
			categories: el.tag_list,
			thumbnail: el.social_image
		}));
	} catch {
		return [];
	}
};
