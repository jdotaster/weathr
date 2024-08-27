const ElementFactory = () => {
    const create = (type, attributes) => {
        const element = document.createElement(type);
        for (const a in attributes) {
            element[a] = attributes[a];
        }

        return element;
    }
    return { create };
}

export default ElementFactory;