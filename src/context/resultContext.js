import { createContext, useState, useEffect } from "react";

const ResultContext = createContext();

const ResultProvider = ({ children }) => {
	const [result, setResult] = useState(null);

	const data = { result, setResult };

	return (
		<ResultContext.Provider value={data}>{children}</ResultContext.Provider>
	);
};

export { ResultProvider };
export default ResultContext;
