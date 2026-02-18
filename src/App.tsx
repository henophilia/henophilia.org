import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import content from '../content/index.md?raw'

function App() {
  return (
    <article className="min-h-screen py-20 px-6 font-serif">
      <div className="mx-auto max-w-2xl prose prose-lg prose-stone prose-headings:font-serif prose-headings:tracking-tight prose-headings:text-stone-900 prose-p:leading-[1.75] prose-p:text-stone-700 prose-li:leading-relaxed prose-li:text-stone-700 prose-blockquote:border-l-amber-400 prose-blockquote:bg-amber-50/50 prose-blockquote:py-2 prose-blockquote:px-5 prose-blockquote:rounded-r prose-blockquote:italic prose-blockquote:text-stone-600 prose-a:text-amber-700 prose-a:no-underline hover:prose-a:underline prose-a:transition-all prose-hr:border-stone-200">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {content}
        </ReactMarkdown>
      </div>
    </article>
  )
}

export default App
