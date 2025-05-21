import fs from 'node:fs';
import path from 'node:path';
import { remark } from 'remark';
import html from 'remark-html';

export async function getMarkdownContent(filename: string) {
  const filePath = path.join(process.cwd(), 'app/terms', filename);
  const fileContents = fs.readFileSync(filePath, 'utf8');

  // Use remark to convert markdown into HTML
  const processedContent = await remark()
    .use(html)
    .process(fileContents);

  return processedContent.toString();
} 