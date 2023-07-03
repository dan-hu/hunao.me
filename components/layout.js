import Head from "next/head";
import Link from "next/link";
import { useRouter } from 'next/router'

export default function Layout({ children }) {

    const router = useRouter()
    const {locale, locales, asPath} = router

    return (
        <>
            <Head>
                <title>{ children.props.title ? children.props.title + " ｜ " + process.env.siteTitle : process.env.siteTitle }</title>
            </Head>
            <header>
                <nav>
                    <div className="branding">
                        <div className="logo">
                            <Link href="/">{ process.env.siteTitle }</Link>
                        </div>
                        <p className="tagline">{ process.env.siteTagline }</p>
                    </div>
                    <ul>
                        {Object.keys(process.env.categories).map( slug => <li key={slug} className={asPath=="/"+slug?"active":""}><Link href={slug}> { process.env.categories[slug] } </Link></li>)}
                        <li className={asPath=="/about"?"active":""}><Link href="/about">关于</Link></li>
                    </ul>
                </nav>
            </header>
            <main id="main">
                { asPath !== "/" && <div className="main-header"><ol className="breadcrumb"><li><Link href="/">首页</Link></li></ol><h1 className="page-title">{ children.props.title }</h1></div> }
                <div className="main-content">{ children }</div>
            </main>
            <footer>
                <p>&copy; { process.env.siteTitle }</p>
                <p><small>除标明引用或转载之外，本站所有内容均为原创，其所有权属于文章作者。引用或转载内容均已标明出处，若有冒犯或侵权，请与本站联系。</small></p>
            </footer>
        </>
    )

}