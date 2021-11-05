// Mr.Phileas Fogg is a very perfect man. He saves money even on petite things. One day he heard a discount offer announced in a mall. 
// He wants to purchase lot of items to save his money. The discount is given only when atleast two items are bought. 
// Since each item has different discount prices , he finds difficult to check the amount he has saved.  
// So he approaches you to device a automated discount calculator to make him easy while billing.


//Write a function to return the Discount Amount
function find_DiscountAmount(item1,item2,disc_precent){
    let disc1=item1-((item1*disc_precent)/100);
    let disc2=item2-((item2*disc_precent)/100);
return disc1+disc2;
}

//Write a function to return the discount percent
function find_Discount(item1,item2,disc_precent){
return parseFloat((item1+item2-find_DiscountAmount(item1,item2,disc_precent)).toFixed(1));
}
