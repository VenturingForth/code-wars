function titleCase(title, exceptions = undefined){
    const titleArray = title.split(" ");
    const exceptionArray = (exceptions ? exceptions.split(" ") : [])
    let titleCaseString = "";

    titleArray.forEach(word => {
        if (exceptionArray.includes(word)){
            titleCaseString += word.toLowerCase();
        } else {
            titleCaseString += `${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`;
        }
        if (word !== titleArray[titleArray.length - 1]){
            titleCaseString += " ";
        }
    });
    return titleCaseString;
}

module.exports = { titleCase };