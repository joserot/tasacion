import "../../public/styles/styles.css";
import { ResultProvider } from "../context/resultContext";

function MyApp({ Component, pageProps }) {
	return (
		<ResultProvider>
			<Component {...pageProps} />
		</ResultProvider>
	);
}

export default MyApp;
