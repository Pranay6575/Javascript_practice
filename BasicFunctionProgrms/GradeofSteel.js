// Write a program to find the range of a set of numbers. Range
// is the difference between the smallest and biggest number in
// the list.

const gradeofSteel = (hardness, carboncontent, tensilestrength) => {
    hardness = 55;
    carboncontent = 0.6
    tensilestrength = 5851;

    if (hardness > 50 && carboncontent < 0.7 && tensilestrength > 5600) {
        return "The Hardness of steel is " + hardness + " & Carbon Content is " + carboncontent + " & Tensile Strength is " + tensilestrength + " The Grade of Steel is Grade 10";
    }
    else if (hardness > 50 && carboncontent < 0.7 && tensilestrength < 5600) {
        return "The Hardness of steel is " + hardness + " & Carbon Content is " + carboncontent + " & Tensile Strength is " + tensilestrength + " The Grade of Steel is Grade 09";
    }
    else if (hardness < 50 && carboncontent < 0.7 && tensilestrength > 5600) {
        return "The Hardness of steel is " + hardness + " & Carbon Content is " + carboncontent + " & Tensile Strength is " + tensilestrength + " The Grade of Steel is Grade 08";
    }
    else if (hardness > 50 && carboncontent > 0.7 && tensilestrength > 5600) {
        return "The Hardness of steel is " + hardness + " & Carbon Content is " + carboncontent + " & Tensile Strength is " + tensilestrength + " The Grade of Steel is Grade 07";
    }
    else if (hardness > 50 || carboncontent < 0.7 || tensilestrength > 5600) {
        return "The Hardness of steel is " + hardness + " & Carbon Content is " + carboncontent + " & Tensile Strength is " + tensilestrength + " The Grade of Steel is Grade 06";
    }
    else {
        return "Your Grade of steel is out of Range"
    }
}
console.log(gradeofSteel());