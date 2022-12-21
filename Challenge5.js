/*
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.
*/

function checkCashRegister(price, cash, cid) {

    let result = {status:"OPEN", change:[]};
    let change = cash - price;
    let currency = [["ONE HUNDRED", 100], ["TWENTY", 20], ["TEN", 10],
        ["FIVE", 5], ["ONE", 1], ["QUARTER", 0.25], ["DIME", 0.1],
        ["NICKEL", 0.05]];

    for (let i in currency) {
        if (change >= currency[i][1] && cid[8-i][1] != 0) {
            if (change >= cid[8-i][1]) {
                change -= cid[8-i][1]
                result.change.push(cid[8-i])
            } else {
                let num = Math.floor(change/currency[i][1])
                change -= currency[i][1] * num
                cid[8-i][1] = currency[i][1] * num
                result.change.push(cid[8-i])
            }
        }
    }

    if (change >= 0.01) {
        if (change == cid[0][1]) {
            change -= cid[0][1]
            result.change.push(cid[0],cid[1],cid[2],
                cid[3],cid[4],cid[5],
                cid[6],cid[7],cid[8])
            result.status = "CLOSED"
        }
        else if (change > cid[0][1]) {
            result.status = "INSUFFICIENT_FUNDS"
        } else {
            let dime = Math.round(change/0.01)
            cid[0][1] = 0.01 * dime
            result.change.push(cid[0])
        }
    }

    return result;

}