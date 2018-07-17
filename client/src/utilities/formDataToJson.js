const formDataToJson = (formData) => {
    var formObject = {};
    formData.forEach(function(value, key){
        formObject[key] = value;
    });

    return JSON.stringify(formObject);
};

export default formDataToJson;