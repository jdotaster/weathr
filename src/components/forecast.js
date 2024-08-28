import ElementFactory from "../modules/elementFactory";

const Forecast = () => {
    const elements = ElementFactory();

    const currentConditions = (data) => {
        console.log(data);
    }

    return { currentConditions };
}

export default Forecast;