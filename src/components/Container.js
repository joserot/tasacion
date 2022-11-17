import Head from "next/head";

const Container = ({ children }) => {
	return (
		<main className="container">
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
				<link
					href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
					rel="stylesheet"
				></link>
				<title>Calculadora de tasación</title>
			</Head>
			{children}{" "}
		</main>
	);
};

export default Container;
