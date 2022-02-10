let name = prompt("Name:");
name = name.slice(0,1).toUpperCase() +
    name.slice(1,name.length).toLowerCase();
alert("Hello "+name);