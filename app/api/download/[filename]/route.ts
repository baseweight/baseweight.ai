import { NextResponse } from 'next/server';
import fs from 'node:fs';
import path from 'node:path';

export async function GET(
  request: Request,
  { params }: { params: { filename: string } }
) {
  const filePath = path.join(process.cwd(), 'app/terms', params.filename);
  
  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return new NextResponse(fileContents, {
      headers: {
        'Content-Type': 'text/markdown',
        'Content-Disposition': `attachment; filename="${params.filename}"`,
      },
    });
  } catch (error) {
    return new NextResponse('File not found', { status: 404 });
  }
} 