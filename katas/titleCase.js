function titleCase(title, exceptions = undefined){
    const titleArray = title.split(" ");
    let titleCaseString = "";
    titleArray.forEach(word => {
        console.log(word);
        titleCaseString += `${word[0].toUpperCase()}${word.slice(1)}`;
        if (word !== titleArray[titleArray.length - 1]){
            titleCaseString += " ";
        }
    });
    return titleCaseString;
}

module.exports = { titleCase };