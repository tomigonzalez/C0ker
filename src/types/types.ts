export interface VideoSnippet {
  title: string;
  description: string;
  publishedAt: string;
  resourceId: {
    videoId: string;
  };
  thumbnails: {
    default: {
      url: string;
    };
    maxres: {
      url: string;
    };
  };
}

export interface VideoItem {
  id: string;
  snippet: VideoSnippet;
}
