

const mark = [60, 60, 60, 60, 60, 90];


function getResult() {



    for (let j = 0; j < 5; j++) {
        if (mark[j] <= 39) {
            return false;
        }
        else {

            return true;
        }
    }

}

getPercentage = function () {
    getTotalMarks();
    let percent = (total / totalmark) * 100
    console.log("Your Percentage :", percent);

}

function getTotalMarks() {
    var total;
    if (getResult()) {

        for (let i = 0; i < 5; i++) {
            total = total + mark[i];
        }
        console.log("Total Marks :", total)
    }
    else {
        console.log("Fail");
    }
}
function getDivision() {
    getPercentage();
    if (percent < 100 && percent >= 80) {
        console.log("Distinction");
    }
    else if (percent <= 79 && percent >= 60) {
        console.log("First Division");
    }
    else if (percent <= 59 && percent >= 50) {
        console.log("Second Division");
    }
    else {
        console.log("hird Division");
    }


}

getResult();
getTotalMarks();