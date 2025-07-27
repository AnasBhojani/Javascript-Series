const Movies=[
     {
        "title":"DDLJ",
        "releaseYear":1995,
        "Hero":"Shah Rukh Khan",
    },
     {
        "title":"Ready",
        "releaseYear":2011,
        "Hero":"Salman Khan",

    },
    {
        
        "title":"Bang Bang",
        "releaseYear":2014,
        "Hero":"Hrithik Roshan",

    },
    {
        
        "title":"Kabir Singh",
        "releaseYear":2019,
        "Hero":"Shahid Kapoor",

    },
    {
        "id":4,
        "title":"Kick",
        "releaseYear":2014,
        "Hero":"Salman Khan",
    }
]

let movie=Movies.filter((movie)=>{
    return movie.Hero.toLowerCase()==="salman khan"&& movie.releaseYear>2011;
})
let movie1=[...Movies]
.filter((movie)=>{
    return movie.Hero.toLowerCase()==="salman khan"&& movie.releaseYear>2011;
}).map((movie)=>{
    return {
        Hero:movie.Hero,
        title:movie.title,
        releaseYear:movie.releaseYear,
        id:movie.id
    }
})
console.log(movie);
console.log(movie1);

