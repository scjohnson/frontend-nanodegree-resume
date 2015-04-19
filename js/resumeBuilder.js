
var bio = {
    "name": "Stephen C. Johnson",
    "role": "Developer",
    "email" : "stephen.c.johnson@gmail.com",
    "picture" : "images/fry.jpg",
    "welcomeMessage" : "Welcome to my simple resume for learning JavaScript",
    "skills" : ["C++, Java, Python, JavaScript"],
};

var work = {
    "position": "Director of Space Programs",
    "employer": "Stellar Science",
    "years": 4,
    "city": "Vienna, VA"
};

var education = [
    {
        "name": "Lawrence University",
        "years": "1989-1993",
        "city": "Appleton, WI",
        "major": "Physics",
        "degree": "BA"
        
    },
    {
        "name": "Stony Brook University",
        "years": "1993-1997",
        "city": "Stony Brook, NY",
        "major": "Physics",
        "degree": "PhD"
        
    }
]

var projects = [
    "A special one"
    ]


var formattedName = HTMLheaderName.replace( "%data%", bio.name );
var formattedRole = HTMLheaderRole.replace( "%data%", bio.role );

$("#header").prepend( formattedRole );
$("#header").prepend( formattedName );


$("#main").append( work.position );
