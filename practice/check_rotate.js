console.log("Hello, World!");   
function checkRotation(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    return (str1 + str1).includes(str2);
}   
console.log(checkRotation("Aman", "nmaA"));
console.log(checkRotation("hello", "llohe"));
