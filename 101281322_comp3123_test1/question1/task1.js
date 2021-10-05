const { doesNotReject } = require("assert");

const mixedArray= ['PIZZA',  10,true,25,false,'Wings']

function  lowerCaseWords(mixedArray){
    return new Promise((resolve, reject) => {
      if (!mixedArray || mixedArray.length === 0 || !Array.isArray(mixedArray)) reject("Invalid input array");
      mixedArray = mixedArray.filter(word => typeof word === 'string'  );
      mixedArray = mixedArray.map(word => word.toLowerCase());
      resolve(console.log(mixedArray));
    });
};

lowerCaseWords(mixedArray)
      .then((value) =>(value)
      )
      .catch((error) =>
        console.log("Error : "+error)
      );

     
