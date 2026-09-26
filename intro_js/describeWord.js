function describeWord(word){
    classification = "empty";
    if (word.length > 0){
        classification = "non-empty";
    }
    return classification;  
}
console.log(describeWord(""));
