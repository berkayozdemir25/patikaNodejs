function circleArea(piNumber,r){
    area=piNumber*r*r;
    console.log(area)
}

function circleCircumference(piNumber,r){
    circumference=piNumber*r*2;
    console.log(circumference);
}

module.exports={
    circleArea,
    circleCircumference
}