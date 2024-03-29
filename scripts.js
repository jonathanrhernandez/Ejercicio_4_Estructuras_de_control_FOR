//  1. Crea un programa que imprima en consola los números impares del 1 al 50.

console.log("Números impares del 1 al 50");
for (let index = 1; index < 51; index++) {
    if(index % 2 != 0)
    console.log(index);    
}

// 2. Crea un programa que pregunte al usuario un número. Usando el archivo de arreglo de Pokémons, mostrar solo los nombres de los Pokémons cuyos números que son múltiplos de 5 desde 1 hasta el número introducido por el usuario. https://pastebin.com/Zzk8g7Z6.

let pokemons = [ 'bulbasaur','ivysaur','venusaur','charmander','charmeleon','charizard','squirtle','wartortle','blastoise','caterpie','metapod','butterfree','weedle','kakuna','beedrill','pidgey','pidgeotto','pidgeot','rattata','raticate','spearow','fearow','ekans','arbok','pikachu','raichu','sandshrew','sandslash','nidoran-f','nidorina','nidoqueen','nidoran-m','nidorino','nidoking','clefairy','clefable','vulpix','ninetales','jigglypuff','wigglytuff','zubat','golbat','oddish','gloom','vileplume','paras','parasect','venonat','venomoth','diglett','dugtrio','meowth','persian','psyduck','golduck','mankey','primeape','growlithe','arcanine','poliwag','poliwhirl','poliwrath','abra','kadabra','alakazam','machop','machoke','machamp','bellsprout','weepinbell','victreebel','tentacool','tentacruel','geodude','graveler','golem','ponyta','rapidash','slowpoke','slowbro','magnemite','magneton','farfetchd','doduo','dodrio','seel','dewgong','grimer','muk','shellder','cloyster','gastly','haunter','gengar','onix','drowzee','hypno','krabby','kingler','voltorb' ]

let numero = Number(prompt("Ingresa un nùmero y te dire los nombres de los pokemons cuyos nùmeros son múltiplos de 5 desde el 1 hasta tu nùmero introducido"));
let nuevoArreglo= [];
for (let index = 0; index < pokemons.length; index++) {
    if (!isNaN(numero)) {
        if(index <= numero && (index+1) % 5 == 0)
        {
            nuevoArreglo.push(pokemons[index]);
        }
    }
    else{
        console.log("No ingresaste un nùmero");
        break;
    }
    
}

console.log("Tu resultado es: " + nuevoArreglo);

// 3. Crea un programa que recorra el arreglo [4,”dos”,8,”tres”,5,9,1,”cero”] y muestre en consola solo los elementos que son tipo número.

let arreglo = [4,"dos",8,"tres",5,9,1,"cero"];

for (let index = 0; index < arreglo.length; index++) {
    if ( !isNaN(arreglo[index])) {
        console.log(arreglo[index]);
    }
    
}