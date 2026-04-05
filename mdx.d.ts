declare module "*.mdx" {
  import type { MDXComponents } from "mdx/types";
  import type { ComponentType } from "react";

  interface MDXProps {
    components?: MDXComponents;
  }

  const MDXComponent: ComponentType<MDXProps>;
  export default MDXComponent;
}
