// problem one
function kilometerToMeter(kilometer){        //required function
    if(kilometer<0){
        return "Distence can't be negetive";
    }
    else
        return kilometer*1000;
}
var meter = kilometerToMeter(60);
console.log(meter);


// problem two
function budgetCalculator(watch,phone,laptop){      //required function
    if(watch <0 || phone<0 || laptop<0 ){
          return "Money can't be negative"
    }
    else{
    var total = watch*50 + phone*100 + laptop*500 ;
    return total;
}
}

var result = budgetCalculator(0,-1,9);
console.log(result);


// problen three 
function hotelCost(days){        //required function
    var total = 0;
     
   if(days<0) 
    return "days can't be negative";
 
  else if(days<=10){
      total = days*100;
  }
  else if(days <=20){
      var first = 10*100;
      var remaining = days -10;
      var second = remaining*80;
      total = first+second;
  }
  else{
      var first = 100*10;
      var second = 80*10;
      var remaining = days - 20;
      var third = remaining*50;
      total = first + second + third ;
  }
  return total;
}
var totalCost = hotelCost(22);
console.log(totalCost);


// problem four 
function  megaFriend(friend){   //required function
   var i;
var max = friend[0].length;
var max2 = friend[0];

for(i=0;i<friend.length;i++){

    var length1 = friend[i].length;
    var length2 = friend[i];

    if(max<length1){
       max=length1;
       max2=friend[i];
    }
}
   return max2;
}
var friend = megaFriend(["Rakib","Sakib","Shovon","Shawon","Zubair","Rakibul","sakibul"]);
console.log(friend);