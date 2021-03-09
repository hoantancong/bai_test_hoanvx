//cau hoi A-2
const clubList = [
    { "name":"Arsenal" , "points":99, "GD":45 },
    { "name":"Chelsea" , "points":75, "GD":39 },
    { "name":"Manchester United" , "points":60, "GD":29 },
    { "name":"Liverpool" , "points":88, "GD":39},
    { "name":"ALiverpool" , "points":88, "GD":39},
    { "name":"Liverpool FC" , "points":88, "GD":25}  
];
var rankedList = clubList.sort((a,b)=>a.points<b.points?1:(a.points === b.points) ? ((a.GD < b.GD) ? 1 : (a.GD === b.GD) ?(a.name>b.name)?1:-1:-1) : -1);
var count = 1;
for(c of rankedList){
    c.position = count;
    console.log(c);
    count++;
}



