export default  {
    methods : {

    coding : function (text){
    const arrayText= text.split("");
    let arraySplit= arrayText.map(function(letra){
    switch (letra) {
       case 'a': letra = 'u'
         break;
        case 'e': letra = 'o'
            break;
       case 'o': letra = 'e'
            break;
        case 'u': letra = 'a'
          break;
       case 'i': letra = 'i'
          break;
     }
     return letra;
});
    return arraySplit.join('').toUpperCase();
}
}
}