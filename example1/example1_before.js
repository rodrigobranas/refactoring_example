// magic numbers
// nomes
// ifs/else aninhados ou desnecessários
// linhas em branco
// excesso de responsabilidade (SRP)

// calculate ride
exports.calc = function(dist, d) {

    // overnight

    if (d.getHours() >= 22) {

        return dist * 3.90; 
    
    } else {
        // sunday
         if (d.getDay() === 0) {

             return dist * 2.9;

         } else {
             return dist * 2.10;

         }
    }

}
