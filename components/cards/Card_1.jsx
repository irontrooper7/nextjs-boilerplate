export default function Card_1({title, image}) {
	return (
		<div className="card_1" style={{background: `url('${image}')`,backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundSize: '300px'}}>
			<div className="cont-info">
				<h6>{title}</h6>
			</div>
		</div>
	)
}