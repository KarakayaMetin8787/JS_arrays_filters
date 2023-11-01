// ----------------- Codeflow_uebung_lvl_1_8:filter()---------------

const zahlen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const geradeZahlen = zahlen.filter((element) => {
    if(element % 2 === 0) {
        return element;
    } else {
        console.log("ungerade Zahlen");
    }
})

console.log("Die gerade Zahlen sind " + geradeZahlen);

const ungeradeZahlen = zahlen.filter((element) => {
    if(element % 2 === 1) {
        return element;
    } else {
        console.log("gerade Zahlen");
    }
})

console.log("Die ungeraden Zahlen sind " + ungeradeZahlen);

//------------ Codeflow_uebung_lvl_1_8:filter()-2 ----------------------

const woerter = ["Banane", "Kaktus", "Flausch", "Ente", "Apfel", "Auto", "Giraffe", "Schmetterling", "Krokodil", "Lampe"];

const woerterLang = woerter.filter((element) => {
    if (element.length < 7) {
        return element
    } 
})

console.log(woerterLang);

// --------------- Codeflow_uebung_lvl_1_8:filter()-4 ---------------------

const zahlen2 = [12, 25, 7, 18, 30, 5];

const zahlenGefiltert = zahlen2.filter((element) => {
    if (element < 20) {
        console.log(element);
        return element;
    }
})

zahlenGefiltert.filter((element) => {
    const mal2 = element * 2;
    console.log(mal2);
});

// ------------ Codeflow_uebung_lvl_1_8:filter()-3 -------------------------

const heroArr = ["Superman", "Batman", undefined, , "Wonder Woman", "Spider-Man", "Black Widow", "Iron Man", "Thor", "Catwoman", , null];

const myHeroes = heroArr.filter((element) => {
    return element;
})
console.log(myHeroes);