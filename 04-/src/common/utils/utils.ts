export const queryStringToJSON = (qs) => {
    const pares = qs.slice(1).split('&');
    
    let resultado = {};
    pares.forEach(function(par) {
        par = par.split('=');
        resultado[par[0]] = decodeURIComponent(par[1] || '');
    });

    return JSON.parse(JSON.stringify(resultado));
}

export const objectToQuerystring = (obj) => {
    let result = "?"

    obj.forEach( (value, key) => {
        if(value && value != ""){
            result += result === "?" ? `${key}=${value}` :`&${key}=${value}`
        }
    })

    return result
}