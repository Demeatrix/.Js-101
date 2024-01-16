const anObj = {
    "js": "javascript",
    "cpp": "C++",
    "ruby": "ruby on rails"
}

for (const key in anObj) {
    console.log(`${key} for the ${anObj[key]}`);
}