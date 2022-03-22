export function ValidateNumber(element,errorContainer,min,max){
    let number = parseInt(element.value);
    if (number === NaN || number < min || number > max ){
        element.classList.add("is-invalid");
        errorContainer.innerHTML += `<div class="alert alert-danger">L'année n'est pas valide, merci de séléctionner une date entre ${min} et ${max}.</div>`;
        return false;
    }
    return true;
}

export function ValidateString(element,errorContainer,lengthMax){
    if (element.value.length > lengthMax){
        element.classList.add("is-invalid");
        errorContainer.innerHTML += `<div class="alert alert-danger">Le nom n'est pas valide, merci de séléctionner un nom de moin de ${lengthMax} caractères</div>`;
        console.log(errorContainer);
        return false;
    }
    return true;
}