import Image from 'next/image'

export default function PostIndex() {

    return (
        <>
            <article>
                <header>
                    <h2>盛世之下，岂能容你隐入尘烟？</h2>
                    <div className="post-meta">十月21日</div>
                </header>
                <div className='post-content'>
                    <p>“十一”前夕，一部低调的文艺片《隐入尘烟》突然遭到国内院线和各大网络播放平台的下架，事件的轰动性甚至超过了电影本身，冲上网络热搜，成为大家热议的话题。电影到底讲述了些什么？为何被下架？大家又是怎么议论的呢？</p>
                    <div className='image'>
                        <Image src="/3fe56342891843929d27a2d55d4394c3.jpg" alt="me" width="1080" height="720" />
                        <div className='caption'>《隐入尘烟》剧照 来源：网络</div>
                    </div>
                </div>
            </article>
		</>
    )

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
