import Layout from '../components/Layout'
import Card_1 from '../components/cards/Card_1'

export default function Cards() {
	return (
		<Layout>
			<section className='hero is-medium is-link'>
				<div className='hero-body'>
					<div className='container'>
						<h1 className='title'>Cards</h1>
					</div>
				</div>
			</section>
			<section className='section'>
				<div className='container'>
					<div className='columns'>
						<div className='column is-4'>
							<h3 className='subtitle has-text-centered'>Card_1</h3>
							<Card_1
								title='John Doe'
								image='/assets/asset_card.jpg'
							/>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	)
}