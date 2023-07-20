import Image from 'next/image'
import { useRouter } from 'next/router'
import { CodeBlock,CopyBlock,dracula } from "react-code-blocks";

export default function PostIndex() {

    const router = useRouter()

    if (router.query.category == 'technology') {

    const code1 = `
    <img src="icon.svg" />
    `
    const code2 = `
    .icon {
        background-image: url("icon.svg");
    }
    `

    return (
        <>
            <article>
                <header>
                    <h2>使用SVG制作网页图标的一些用法</h2>
                    <div className="post-meta">七月20日</div>
                </header>
                <div className='post-content'>
                    <p>现在大家都越来越多地使用SVG来做网页上的图标了。SVG的好处毋庸置疑：不仅绘制方便，兼容性好，占用字节空间少，矢量图形可以无损缩放等等，还因为它本质上是xml，因此对于前端coder来说格外友好，当需要对它进行一些简单的修改时，用支持xml的代码编辑器就能轻松完成。</p>
                    <p>SVG太简单直观了，几乎无需学习就可以上手，这也恰恰使得包括本人在内的大部分使用者都不会去深究其用法。我在写作本文之前对SVG的用法仅限于两种方式：</p>
                    <p>1. 直接作为图片显示：</p>
                    <div className="code-block-wrapper"><CopyBlock
      text={code1}
      language='html'
      showLineNumbers={false}
      theme={dracula}
    /></div>
                    <p>2. 作为元素的图片背景：</p>
    <div className="code-block-wrapper"><CopyBlock
      text={code2}
      language='css'
      showLineNumbers={false}
      theme={dracula}
    /></div>
                </div>
            </article>
		</>
    )
    }

}

export async function getStaticPaths() {
    const paths = []
    Object.keys(process.env.categories).map(slug => paths.push({ params: { category: slug } }))
    return {
        paths: paths,
        fallback: false,
    }
}

export async function getStaticProps(context) {
    return {
        props: {
            title: process.env.categories[context.params.category]
        }
    }
}
