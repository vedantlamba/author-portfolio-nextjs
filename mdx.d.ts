declare module "*.mdx" {
  import type { MDXComponents } from "mdx/types";
  import type { ComponentType } from "react";

  interface MDXProps {
    components?: MDXComponents;
  }

  const MDXComponent: ComponentType<MDXProps>;

  export const title: string;
  export const subheading: string | undefined;
  export const author: string;
  export const category: string;
  export const tags: string[];
  export const footnotes: string[] | undefined;

  export default MDXComponent;
}
