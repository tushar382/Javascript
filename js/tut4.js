// String methods
let name = `Tushar`
let html = `MY name is Tushar Ghadi`;
console.log(html.length)
console.log(html.substr(8));
console.log(html.replace('Tushar', 'Santosh'));
console.log(html.toLowerCase());
console.log(html.toLocaleUpperCase());
console.log(html.slice(9))
console.log(html.indexOf('Tushar'))
console.log(html.endsWith('Ghadi'))
console.log(html.includes('Tushar'))
 // Tamplete literals

 let fruit1 = `Apple`
 let fruit2 = `Mango`
 let html1 = `Hello ${name}
 <h1> This is heading</h1>
 <p> you like ${fruit1} and ${fruit2}</p>`
  document.body.innerHTML = html1