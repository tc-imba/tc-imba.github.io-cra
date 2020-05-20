export interface Config {
  info: {
    author: string;
    bio: string;
    logo: string;
    github?: string;
    location?: string;
    email?: string;
    website?: string;
  };
  wakatime: {
    username?: string;
    activity?: string;
    language?: string;
    editor?: string;
    os?: string;
  };
}
