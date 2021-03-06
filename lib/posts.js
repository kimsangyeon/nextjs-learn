import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allpostsData = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    console.log(matterResult);

    return {
      id,
      ...matterResult.data,
    };
  });

  return allpostsData.sort((a, b) => {
    return a.data < b.data ? 1 : -1;
  });


  /**
   * const res await fetch('..');
   * return res.json();
   */
}