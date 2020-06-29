function aliasGen(first, last){
    // Code Here
    if(!first[0].toLowerCase().match(/[a-z]/) || !last[0].toLowerCase().match(/[a-z]/)) {
      return "Your name must start with a letter from A - Z."
    }
    return first + " " + last;
}