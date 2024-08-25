const TemperatureConversion = () => {
    const toFahrenheit = (c) => {
        return (((9 * c) / 5) + 32);
    }

    const toCelcius = (f) => {
        return (((f - 32) * 5) / 9);
    }
    return { toFahrenheit, toCelcius };
}

export default TemperatureConversion;