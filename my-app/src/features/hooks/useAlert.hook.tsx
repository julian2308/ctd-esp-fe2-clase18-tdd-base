
// Podemos cambiar la implementacion a nuestra propia libreria de alerts, gracias al principio solid de inversion de dependencia
const useAlert = () => {
    const dispatchSuccessAlert = (message: string) => {
        window.onload
        alert(`SUCCESS: ${message}`)
    };

    const dispatchErrorAlert = (message: string) => {
        window.onload
        alert(`ERROR: ${message}`)

    };

    return {
        dispatchSuccessAlert,
        dispatchErrorAlert
    };
};

export default useAlert;
