// console.log('Hello World');

// fetch name from command or fallback
// const nameArg = (process.argv[2] || 'world');

// output message
// console.log(`Hello ${nameArg}!`);

// Linux and macOS devices define a USER variable,
// while Windows sets USERNAME. Ensure your script is
// cross-platform by examining both when declaring nameArg:

// fetch name from command
const nameArg = capitalize(process.argv[2] || process.env.USER || process.env.USERNAME || 'world');

console.log(`Hello ${nameArg}!`);

function capitalize(str) {

    return str
        .trim()
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

}
