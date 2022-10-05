import Layout from '../components/Layout'
import Card_1 from '../components/cards/Card_1'
import Card_2 from '../components/cards/Card_2'

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
						<div className='column is-4'>
							<h3 className='subtitle has-text-centered'>Card_2</h3>
							<Card_2
								title='John Doe'
								content='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
								image='http://static1.squarespace.com/static/530b728de4b04fc9b23a5988/t/569880381a5203aa7d44c1a8/1452834873397/00.jpg?format=1000w'
							/>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	)
}