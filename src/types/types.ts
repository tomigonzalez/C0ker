export interface VideoSnippet {
  title: string;
  description: string;
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
