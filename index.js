function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}
console.log(saturdayFun("bathe my dog"));
console.log(saturdayFun());

function mondayWork(activity="go to the office"){
    return `This Monday, I will ${activity}.`;
}
console.log(mondayWork());
console.log(mondayWork("work from home"));

function wrapAdjective(adjective="*"){
        return function(symbol="a hard worker"){
            return `You are ${adjective}${symbol}${adjective}!`;
    }
}
console.log(wrapAdjective()());
console.log(wrapAdjective("a dedicated programmer")("||"));


