'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MarkdownProps {
  content: string;
  className?: string;
}

export function Markdown({ content, className = '' }: MarkdownProps) {
  return (
    <div className={className}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ ...props }) => (
            <h1 className="text-3xl font-bold mt-8 mb-4 text-foreground" {...props} />
          ),
          h2: ({ ...props }) => (
            <h2 className="text-2xl font-semibold mt-6 mb-3 text-foreground" {...props} />
          ),
          h3: ({ ...props }) => (
            <h3 className="text-xl font-semibold mt-4 mb-2 text-foreground" {...props} />
          ),
          p: ({ ...props }) => (
            <p className="my-4 text-foreground leading-7" {...props} />
          ),
          ul: ({ ...props }) => (
            <ul className="my-4 ml-6 list-disc text-foreground" {...props} />
          ),
          ol: ({ ...props }) => (
            <ol className="my-4 ml-6 list-decimal text-foreground" {...props} />
          ),
          li: ({ ...props }) => (
            <li className="my-1 text-foreground" {...props} />
          ),
          strong: ({ ...props }) => (
            <strong className="font-bold text-foreground" {...props} />
          ),
          em: ({ ...props }) => (
            <em className="italic text-foreground" {...props} />
          ),
          code: ({ ...props }) => (
            <code
              className="px-2 py-1 bg-[rgb(206,206,206)] dark:bg-[rgb(60,59,74)] text-[rgb(39,38,53)] dark:text-[rgb(232,233,243)] rounded text-sm font-mono"
              {...props}
            />
          ),
          pre: ({ ...props }) => (
            <pre
              className="my-4 p-4 bg-[rgb(206,206,206)] dark:bg-[rgb(60,59,74)] rounded-lg overflow-x-auto"
              {...props}
            />
          ),
          blockquote: ({ ...props }) => (
            <blockquote
              className="my-4 pl-4 border-l-4 border-[rgb(177,229,242)] italic text-muted-foreground"
              {...props}
            />
          ),
          a: ({ ...props }) => (
            <a
              className="text-[rgb(177,229,242)] hover:text-[rgb(206,206,206)] underline transition-colors"
              {...props}
            />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
