import { Link } from 'react-router-dom';

function Masažas({ massage }) {
	if (!massage) return null;
	return (
		<div className="card-content">
			<div className="text-right">
				<h3 className="service-title">
					<Link to={`/masazas/${massage.slug}`} className="service-link">{massage.title}</Link>
				</h3>
				<div className="service-detail">Trukmė: {massage.duration}</div>
				<div className="service-detail">Kaina: {massage.price}</div>
			</div>
		</div>
	);
}

export default Masažas;
