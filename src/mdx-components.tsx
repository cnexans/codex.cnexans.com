import type { MDXComponents } from "mdx/types";
import { Aside } from "@/components/aside";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Aside available globally (callouts are imported per-file)
    Aside,

    // Headings: styled via globals.css (Crimson Text serif)

    // Table override: responsive wrapper
    table: ({ children, ...props }) => (
      <div className="overflow-x-auto my-4">
        <table
          className="min-w-full border-collapse border border-gray-300 text-base"
          {...props}
        >
          {children}
        </table>
      </div>
    ),

    ...components,
  };
}
