// QUESTION 1:
// 1,JSON ITERATE USING FOR LOOP

let keys=['surya','thiru','eswer','mass','vickram']
let values=[1,2,3,4,5]
let person={}
for(let i=0; i<keys.length;i++)
{
    person[keys[i]]=values[i]
}console.log(person)

// 2,JSON ITERATE USING FOR IN

const data={
    name:'surya',
    age :22,
    sex :'male'
}
for(let keys in data)
{
    console.log(keys+":" ,data[keys])
}

// 3,JSON ITERATE USING FOREACH

let fav=['tamil','english','javascript','sql'];
let items=['language','language','scriptinglanguage','qurielanguage'];
let solution={}
fav.forEach((fav,i)=>{
    solution[fav]=items[i]
});
console.log(solution);

// 4,JSON ITERAITON USING FOR OF

let cars={'ford':1,'toyota':2,'honda':3,'volkswagen':'fav'}
let k= Object.keys(cars)
for(let i of k)
{
    console.log(`${i} : ${cars[i]}`);
}

// QUESTION 2:

// EASY RESUME DATA IN JSON FARMAT

let resume={ 
    name         :'surya',
    DOB          : '24.02.2001',
    gender       :'male',
    nationality  :'INDIAN',
    maried_status:'single',
    languages_known:['tamil','english','sourstra'],
    degree        :'BCA',
    university_board:'annauniversity',
    percentage_CGPA : '65%',
    year_of_passing :2022,
}
console.log(resume);


//  Read about the difference between window, screen, and document in javascript

// In JavaScript, window, screen, and document are objects that represent different aspects of a web page and its environment within a browser.

// Window: The window object is the global object in client-side JavaScript and represents the browser window that contains the DOM (Document Object Model) along with various properties and methods. It acts as the global namespace for all JavaScript code running in that particular window. The window object contains properties like document, location, history, and methods like alert(), setTimeout(), etc. It represents the entire browser window and provides control over it.

// Document: The document object is a property of the window object and represents the HTML document loaded in the window. It provides access to the content of the web page and allows manipulation of the document's elements, such as modifying content, adding or removing elements, changing styles, handling events, etc. The document object is an essential part of the DOM, providing methods like getElementById(), querySelector(), createElement(), etc.

// Screen: The screen object is also a property of the window object and represents the user's screen or monitor. It provides information about the user's screen properties such as width, height, color depth, pixel depth, and more. Properties like screen.width, screen.height, screen.availWidth, and screen.availHeight give details about the screen's dimensions and available space.

// window: Represents the browser window and acts as the global object for JavaScript code running within that window. It contains document, screen, and other properties and methods.
// document: Represents the HTML document loaded in the window and provides access to the DOM, allowing manipulation of the document's elements.
// screen: Represents the user's screen or monitor and provides information about its properties like width, height, color depth,












