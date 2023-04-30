const getNovedades = async () => {
    const response = await fetch('../data/novedades.json')
    const data = response.json()

    return data   
};

