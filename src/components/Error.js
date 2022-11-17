import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Error = ({ children, closeError }) => {
	setTimeout(() => {
		closeError();
	}, 3000);

	return (
		<article className="error-component">
			<button onClick={closeError}>
				<FontAwesomeIcon icon={faXmark} />{" "}
			</button>
			<p>{children}</p>
		</article>
	);
};

export default Error;
