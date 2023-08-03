function BMI(weight, height) {
    let result = weight / (height * height);
    return result;
}

console.log(BMI(70, 1.7));

function Status(BMI) {
    if (BMI < 18.5) {
        return ("you are under weight")
    }

    else if (BMI >= 18.5 && BMI < 25)
        return "you are healthy"

    else {
        return "you are overweight"
    }

}

function calculate() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;

    let bmi = BMI(weight, height);

    let desc = Status(bmi);
    let div = document.getElementById("result");

    div.innerText = bmi + " == " + desc;
}