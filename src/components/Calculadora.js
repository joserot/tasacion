import Error from "../components/Error";
import Loader from "../components/Loader";
import json from "../datos/props.json";
import { useEffect, useState, useRef, useContext } from "react";
import { InputSuggestions } from "react-input-suggestions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import ResultContext from "../context/resultContext";
import { useRouter } from "next/router";

const Calculadora = () => {
	const [locations, setLocations] = useState([]);
	const [tags, setTags] = useState([]);
	const [error, setError] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const form = useRef(null);
	const router = useRouter();
	//context
	const { result, setResult } = useContext(ResultContext);

	const suggestions = locations;

	const getPrice = (price) => {
		const priceUSD = new Intl.NumberFormat("en-US", {
			currency: "USD",
		}).format(price);
		return priceUSD;
	};

	useEffect(() => {
		setResult(null);
	}, []);

	useEffect(() => {
		form.current.reset();
		document.querySelector("#guardar-btn").focus();
	}, [tags]);

	const resetForm = (e) => {
		e.preventDefault();
		if (tags.length < 9 && !tags.includes(e.target.textContent)) {
			setTags([...tags, e.target.textContent]);
		}
		e.target.parentNode.parentNode.style.display = "none";
	};

	const deleteTag = (e) => {
		e.preventDefault();
		const tag = e.target.parentNode.getAttribute("id");
		const filterTags = tags.filter((t) => {
			return t !== tag;
		});

		setTags(filterTags);
	};

	useEffect(() => {
		let locationsArray = [];

		json.props.forEach((j) => {
			locationsArray.push(j.location);
		});

		setLocations(locationsArray);
	}, [json]);

	const calculo = (e) => {
		e.preventDefault();

		if (!tags.length) {
			setError("Seleccione una zona");
			return;
		}

		const ubicacion = tags[0];
		const superficie = e.target.total.value;
		const cubierta = e.target.cubierta.value;
		const cochera = e.target.cochera.value;
		const ambientes = e.target.ambientes.value;

		if (
			!superficie.length ||
			!cubierta.length ||
			!cochera.length ||
			!ambientes.length
		) {
			setError("Complete todos los campos");
			return;
		}

		if (parseInt(cubierta) > parseInt(superficie)) {
			setError("La superfie cubierta no puede ser mayor a la total");
			return;
		}

		json.props.forEach((j) => {
			if (j.location === ubicacion) {
				const precio = j.price;
				const superficieNoCubierta = superficie - cubierta;
				const resultado =
					precio * cubierta + (precio * superficieNoCubierta) / 2;

				if (cochera === "si") {
					resultado = resultado + 15000;
				}

				setResult(getPrice(resultado));

				setIsLoading(true);

				setTimeout(() => {
					setIsLoading(false);
					router.push("/contacto");
				}, 3000);
			}
		});
	};

	const closeError = () => {
		setError(false);
	};

	return (
		<div>
			{error ? <Error closeError={closeError}>{error} </Error> : null}
			{isLoading ? <Loader /> : null}
			<div className="calculadora">
				<form ref={form} onSubmit={calculo}>
					<h1>Calculá el valor de tu propiedad</h1>
					<label>
						Selecciona el barrio
						{tags.length ? (
							tags.map((tag) => {
								return (
									<span className="result-location" key={tag} id={tag}>
										{tag}
										<button onClick={deleteTag}>
											<FontAwesomeIcon icon={faXmark} />
										</button>
									</span>
								);
							})
						) : (
							<InputSuggestions
								autoFocus
								name="input"
								placeholder="Ej. Recoleta, Nuñez etc."
								className="input-search"
								suggestions={suggestions.map((word) => (
									<span
										key={word}
										onKeyDown={(e) => {
											if (e.key === "Enter") {
												resetForm(e);
											}
										}}
										onClick={resetForm}
									>
										{word}
									</span>
								))}
							/>
						)}
					</label>
					<label>
						Superficie Total
						<input name="total" type="number" placeholder="Superficie En m2" />
					</label>
					<label>
						Superficie Cubierta
						<input
							name="cubierta"
							type="number"
							placeholder="Superficie En m2"
						/>
					</label>
					<label>
						Número de ambientes
						<input
							name="ambientes"
							type="number"
							placeholder="Introduce un número"
						/>
					</label>
					<div className="cochera">
						<p>¿Cuenta con cochera?</p>
						<div>
							  <input type="radio" id="si" name="cochera" value="si" /> 
							<label htmlFor="si">SI</label>
							  <input type="radio" id="no" name="cochera" value="no" /> 
							<label htmlFor="no">NO</label>
						</div>
					</div>
					<button id="guardar-btn" type="submit">
						Calcular
					</button>
				</form>
			</div>
		</div>
	);
};

export default Calculadora;
