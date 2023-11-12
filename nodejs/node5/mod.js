console.log("This is mod");

function avg(arr){
    let sum = 0;
    for (i=0;i<arr.length;i++)
    {
        sum+=arr[i];
    }
    return sum/arr.length;
}

//module.exports=avg;//Until the function is explicitly exported, this does not appear in the listing when importing mod.

// Inorder to export multiple classes or functions or variables we do this

module.exports= {
    avg:avg, 
    name:"anish",
    repo:"github"
};

//Now the mod module exports the whole above object, which contains the avg func, name and repo name

//This will also print name when called
//module.exports.name="Anish"