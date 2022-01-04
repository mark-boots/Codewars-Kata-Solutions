//[8 kyu] Hello, Name or World!
const hello = n => 'Hello, '+ (n && n!==""? n[0].toUpperCase() + n.slice(1).toLowerCase() : 'World') +"!"