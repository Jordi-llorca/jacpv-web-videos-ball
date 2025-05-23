import type { Video } from './Video';

declare module "*.json" {
  const value: {
    [key: string]: Video[];
  };
  export default value;
}
