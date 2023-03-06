// FIZZ BUZZ
// Si un numero es multiplo de 3, como: 3, 6, 9, 12... imprimimos: fizz
// Si un numero es multiplo de 5, como: 5, 10, 15, 20... imprimimos: buzz
// Si un numero es multiplo de 15, como: 15, 30, 45, 60... imprimimos: fizz buzz


for (let i = 1; i < 100; i++){
    if (i % 15 === 0)
        console.log("fizz buzz");
    else if (i % 5 === 0)
        console.log("buzz");
    else if (i % 3 === 0)
        console.log("fizz");
    else
        console.log(i);
    
}