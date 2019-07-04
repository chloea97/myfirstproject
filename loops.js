/*for( i = 0 ; i < 10 ; i++ ){
    console.log(i);
   } 

for( i=9 ; i>=0 ; i-- ){
   console.log(i)
   }
   */

let favFilms = [
    "Gladiator",
    "50 First Dates",
    "Forrest Gump",
    "Ghostbusters",
    "The Lorax",
    "10 Things I Hate About You"
]
console.log(favFilms);
favFilms.push("300","Mulan")
console.log(favFilms);
for ( filmList=0 ; filmList < favFilms.length ; filmList++ ){
    console.log(favFilms[filmList])
}
const filmCheck=()=>{
if(favFilms[3]=="Ghostbusters"){
    console.log("Yay it's Ghostbusters")
}
else {
    console.log("Booo, we want Ghostbusters")
}
}
console.log(filmCheck());