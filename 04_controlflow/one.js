//when case is matched in switch method then break statement should be there otherwise rest will continue but in case of break as well default will run.
//case can be any value,then you want to compare with


//falsy value//kin kin values ko default false assume kiya jata hai

//false,0,-0,BigInt,0n,"",null,undefined,NaN

//truthy value

//"0",'false'," ",[],{},function(){}

//Nullish coalescing operator(??):null undefined

let val1;
val1=null??10//just in case backend sends value and that becomes nullify after a while,then there should be a value to return
val2=undefined??39

console.table([val1,val2]);
