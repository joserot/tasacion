import Container from "../components/Container";
import Calculadora from "../components/Calculadora";
import About from "../components/About";

const index = () => {
	return (
		<Container>
			<section className="home-container">
				<Calculadora />
				<About />
			</section>
		</Container>
	);
};

export default index;
