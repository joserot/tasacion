import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalculator } from "@fortawesome/free-solid-svg-icons";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";
import { faHandshake } from "@fortawesome/free-solid-svg-icons";

const About = () => {
	return (
		<section className="about">
			<div className="about-icons">
				<article>
					<div className="icon-container icon-first">
						<FontAwesomeIcon icon={faCalculator} />
					</div>
					<h3>Tasá</h3>
				</article>
				<article>
					<div className="icon-container">
						<FontAwesomeIcon icon={faHeadset} />
					</div>
					<h3>Contactate con un profesional</h3>
				</article>
				<article>
					<div className="icon-container">
						<FontAwesomeIcon icon={faHandshake} />
					</div>
					<h3>Vendé</h3>
				</article>
			</div>
			<div className="about-numbers">
				<span>1</span>
				<span>2</span>
				<span>3</span>
			</div>
			<div className="about-text">
				<p>
					Este valor lo estimamos en base a las propiedades de caracteristicas
					similares que se encuentran publicadas en los portales inmobiliarios.
				</p>
				<p>
					Recordá que se trata de un valor promedio y con él podrás obtener un
					precio estimado de tu casa. No representa el valor real de la
					propiedad, en solo un estimativo del precio.
				</p>
			</div>
			<div className="about-img">
				<img src="/img/about.svg" />
			</div>
		</section>
	);
};

export default About;
