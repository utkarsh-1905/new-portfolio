import axios from 'axios';
import { VITE_DEVTO } from '$env/static/private';

export const mediumBlogs = async () => {
	const mediumUrl: string =
		'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40utripathi2002';
	const rss = await axios.get(mediumUrl);
	const response: any[] = [];
	rss.data.items.map((el: any) => {
		response.push({
			title: el.title,
			link: el.link,
			categories: el.categories,
			thumbnail: ((desc) => {
				try {
					const regex = /src="([^"]+)"/;
					const found = desc.match(regex);
					return found ? found[1] : null;
				} catch {}
			})(el.description)
		});
	});
	return response;
};

export const devtoBlogs = async () => {
	const url = 'https://dev.to/api/articles?username=utkarsh1905';
	const res = await axios.get(url, {
		headers: {
			'api-key': `${VITE_DEVTO}`
		}
	});
	const response: any[] = [];
	res.data.map((el: any) => {
		response.push({
			title: el.title,
			link: el.url,
			categories: el.tag_list,
			thumbnail: el.social_image
		});
	});
	return response;
};
