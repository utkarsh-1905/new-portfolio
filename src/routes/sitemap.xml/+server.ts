export async function GET() {
	const today = new Date().toISOString().split('T')[0];

	return new Response(
		`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://utkarshtripathi.in/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`,
		{
			headers: {
				'Content-Type': 'application/xml',
				'Cache-Control': 'max-age=86400'
			}
		}
	);
}
