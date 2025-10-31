import { getAllProjectIds } from '@/data/projects';

export default function sitemap() {
  const baseUrl = 'https://www.abhishekthatguy.in';
  const currentDate = new Date();
  
  // Generate project URLs
  const projectUrls = getAllProjectIds().map(id => ({
    url: `${baseUrl}/projects/${id}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));
  
  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    ...projectUrls,
  ];
}

