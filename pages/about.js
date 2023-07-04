import Link from "next/link";

export default function About() {
	return (
		<>
			<article>
				<p>张爱玲把她的随笔集子叫作《流言》，取意“水上写的字”，不求持久，但求传得快。这其中当然有文人自谦的成分，但另外一层意思似乎是说：我就随便写写，你别太当真，尤其不要日后拿它们作把柄来打我的脸是最好的。用今天流行的说法，这叫做“求生欲”。更不用说，在一个不能自由发表言论的社会，说错话的后果远比打脸要严重得多。所以尽管可能显得多余，我还是写下以上的声明，来解释一下我为本站命名的初衷。</p>
				<p>还有另一个有点难为情的理由——我有个小名叫作“胡闹”，儿时每当有人要拿长辈的口气训斥我时总会说：“真是胡闹！”。这句一语双关的幽默以及它所引发的旁观者的哄笑，至今回想起来仍心有戚戚焉。这对我的人生多少造成了一些困扰，以致于时至今日，每当我认为自己在做一些不着边际的事，或是抱有一些不切实际的想法时，耳边总能响起它。</p>
				<p>2022年5月 记于全城封锁期间的上海</p>
				<h2>与我联系</h2>
				<ul>
					<li>电子邮箱：<Link href="mailto:hu1980@gmail.com">hu1980@gmail.com</Link></li>
					<li>Twitter：<Link href="https://twitter.com/hu1980">@hu1980</Link></li>
				</ul>
			</article>
		</>
	)
}

export async function getStaticProps() {
    return {
        props: {
            title: "关于"
        }
    }
}
