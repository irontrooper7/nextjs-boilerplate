import Layout from "../components/Layout";


export default function Home() {
	return (
		<Layout>
			<section className="hero is-fullheight is-link">
				<div className="hero-body">
					<div className="container">
						<h1 className="title">NextJS Boilerplate</h1>
						<div className="columns">
							<div className="column is-3">
								<ul>
									<li><a href="/cards">Cards</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	)
}
