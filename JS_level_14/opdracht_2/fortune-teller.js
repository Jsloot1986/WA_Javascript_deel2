const tellFortune = function(jobTitle, geoLocation, partner, numKids){
    let future = 'You will be a'+ jobTitle + 'in' 
    + geoLocation +'and married to' + partner + 'with'+ numKids+'kids.';
    console.log(future);
}
tellFortune('dentist', 'The Netherlands', 'Maria', 3);
tellFortune('waiter','Belgium','Stef',2);
tellFortune('houeswife','Germany','Willem',0);