// code your solution here
function saturdayFun (activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`
}

function mondayWork (activity2 = 'go to the office'){
    return `This Monday, I will ${activity2}.`
}

function wrapAdjective(parameter = '*'){
    return function(single = 'special'){
        return `You are ${parameter}${single}${parameter}!`
    }
}