import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const projectsDirectory = path.join(process.cwd(), 'content/projects');

export interface ProjectData {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  image?: string;
  github?: string;
  contentHtml: string;
}

export async function getSortedProjectsData(): Promise<ProjectData[]> {
  // Check if directory exists
  if (!fs.existsSync(projectsDirectory)) {
    return [];
  }
  
  const fileNames = fs.readdirSync(projectsDirectory);
  const allProjectsData = await Promise.all(fileNames.map(async (fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(projectsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    const contentHtml = processedContent.toString();

    return {
      slug,
      title: matterResult.data.title,
      summary: matterResult.data.summary,
      tags: matterResult.data.tags || [],
      image: matterResult.data.image,
      github: matterResult.data.github,
      contentHtml,
    };
  }));

  // Sort projects by date descending (assuming slug starts with date)
  return allProjectsData.sort((a, b) => {
    if (a.slug < b.slug) {
      return 1;
    } else {
      return -1;
    }
  });
}
