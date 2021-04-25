function getElementByXpath(path) {
    return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

const delay = ms => new Promise(res => setTimeout(res, ms));

const judge = async () => {
    if(getElementByXpath("/html/body/div[3]/div[3]/div[2]/div[2]/div/div/table/tbody/tr/td[1]/button").innerHTML == "选课"){
        getElementByXpath("/html/body/div[3]/div[3]/div[2]/div[2]/div/div/table/tbody/tr/td[1]/button").click();
        console.log("clicked course select");
    } else {
        console.log("buttion is not course select, exit");
        clearInterval(interval);
    }
    console.log("Waited 5s");
    await delay(5000);
    if(getElementByXpath("/html/body/div[4]/div[3]/div/div/div[2]/h1").innerHTML == "选课成功"){
        console.log("success, exit")
        clearInterval(interval);
    } else {
        console.log("fail, close the window, wait and retry")
        getElementByXpath("/html/body/div[4]/div[3]/div/div/div[3]/button[1]").click();

    }
}

const interval = setInterval(function() {
    judge();
    console.log("Waited an additional 5s");
}, 5000);