import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  ul: (props) => (
    <ul
      className="list-disc pl-8 space-y-2 marker:text-sm marker:text-neutral-500"
      {...props}
    />
  ),
  li: (props) => <li {...props} />,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
