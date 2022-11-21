import { useState } from "react";

export const useModal = (initialValue = false) => {
	const [isOpen, setIsOpen] = useState(initialValue);

	const openModal = () => {
		setIsOpen(true);
		document.body.classList.add("scroll-hidden");
	};

	const closeModal = () => {
		setIsOpen(false);
		document.body.classList.remove("scroll-hidden");
	};

	return [isOpen, openModal, closeModal];
};
