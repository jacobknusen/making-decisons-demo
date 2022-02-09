/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between eowyn and
    witch king.
*/ 

let eowynAttack = 50; 
let witchkingAttack = 45;

if (eowynAttack > witchkingAttack){
    console.log('eowyn is stronger');
} else if ( witchkingAttack> eowynAttack){
    console.log("witch king is stronger ");
}
else if ( witchkingAttack === eowynAttack){
    console.log('theyre the same"');
} else {
    console.log('everyone is dead');
};

let eowynhealth = 100;
let eowyndefense = 0;
 
if (eowynhealth + eowyndefense <= witchkingAttack){
    console.log("she dead");
} else if (eowynhealth + eowyndefense >= witchkingAttack){
    // eowynhealth = eowynhealth - witchkingAttack;
    console.log(`she's down to ${eowynhealth}.`)
};

let coinlandsheads = true;

if (coinlandsheads === true){
    console.log('witch king gets to run away');

}else {
    console.log('witch king got stabbed in the face.')
};

// for(let i = 0; i <5; i++){
//     if(eowynhealth > 0 ){
//         eowynhealth = eowynhealth - witchkingAttack;
//     console.log(`eowyn has ${eowynhealth} left.`);
//     } else {
//         console.log('eowyn is dead.');
//     };
    
// };

while(eowynhealth > 0){
    eowynhealth -= witchkingAttack
    console.log(`eowyn has ${eowynhealth} left.`);
    if(eowynhealth <= 0 ) {
        console.log('eowyn has been slain.')
    }

};


//created by jacob knudsen 02/09/2022
// Always follow your dream's.
// You're the stock 


////////// //////////////   ///////    ////////
///    /// /     //    /    //// //   //    ////
///    ///      //          ///  //  //     ///
//////////      //         ///   // //     ///
///    ///      //        ///    ////     ///
///    ///      //       ///    ///      ///
///    ///    //////    ////   ///      /////