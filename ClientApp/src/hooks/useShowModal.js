import { useState, useEffect, useRef } from "react";

const useShowModal = () => {
    const [showModal, setShowModal] = useState(false);
    const openModalRef = useRef(null);
    const closeModalRef = useRef(null);

    const openModal = () => 
        setShowModal(true);
        console.log(showModal);
    

    const closeModal = () => setShowModal(false);

    useEffect(() => {
        openModalRef.current.addEventListener("click", openModal);
    }, []);

    useEffect(() => {
        closeModalRef.current.addEventListener("click", closeModal);
    }, []);

    return [showModal, openModalRef, closeModalRef];


};

export default useShowModal