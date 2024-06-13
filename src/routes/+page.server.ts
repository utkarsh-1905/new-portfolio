import { loading } from '$lib/loading';
import { getRepos } from '$lib/github_api';
import { createClient } from '@supabase/supabase-js';

export async function load() {
	try {
		const repos = await getRepos();
		repos.sort((a: any, b: any) => {
			const d1: any = new Date(a.updated_at);
			const d2: any = new Date(b.updated_at);
			return d2 - d1;
		});
		repos.map((repo: any, index: number) => {
			repo.id = index + 1;
		});

		const supabase = createClient(
			'https://rvrlhaxjrzkjdzoktvdi.supabase.co',
			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ2cmxoYXhqcnpramR6b2t0dmRpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTcxNzA4NjUsImV4cCI6MjAzMjc0Njg2NX0.6vx6e5506mNHSvlnngwudj3RU5eNzcQqR3mmTKmdKZ4'
		);

		const { data: projects, error } = await supabase
			.from('projects')
			.select('*')
			.filter('should_display', 'eq', true);

		if (error) {
			console.log(error);
		}

		const { data: experience, error: expError } = await supabase.from('experience').select('*');

		if (expError) {
			console.log(expError);
		}

		const { data: blogs, error: blogError } = await supabase.from('blogs').select('*');

		if (blogError) {
			console.log(blogError);
		}

		const resume = supabase.storage.from('resume').getPublicUrl('lts/resume.pdf');

		loading.set(false);
		return {
			blogs,
			repos,
			projects,
			experience,
			resume
		};
	} catch (err) {
		console.log(err);
		return err;
	}
}
