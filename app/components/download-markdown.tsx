'use client';

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export function DownloadMarkdown({ filename }: { filename: string }) {
  const handleDownload = async () => {
    try {
      const response = await fetch(`/api/download/${filename}`);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Error downloading file:', error);
    }
  };

  return (
    <Button 
      onClick={handleDownload}
      variant="outline"
      className="mb-8"
    >
      <Download className="mr-2 h-4 w-4" />
      Download Markdown
    </Button>
  );
} 