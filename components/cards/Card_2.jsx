export default function Card_2({image, title, content}) {
	return (
		<div className='music-card playing'>
			<div className='image' style={{background: `url('${image}') no-repeat 75%`, backgroundSize: 'cover'}}></div>
			<div className='wave'></div>
			<div className='wave'></div>
			<div className='wave'></div>
			<div className='cont-info'>
				<h6><strong>{title}</strong></h6>
				<p>{content}</p>
			</div>
		</div>
	)
}