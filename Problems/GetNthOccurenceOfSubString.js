function getNthOccurence (inputString,word,index) {
    const splitString = inputString.split(word, index);
    console.log("splitString:",splitString);
    const joinString = splitString.join(word);
    console.log("joinString:",joinString);
    return joinString.length;
}
inputString = "Geeks gfg Geeks Geeks Geeks gfg";
console.log("Position:",getNthOccurence(inputString,"Geeks",3));
