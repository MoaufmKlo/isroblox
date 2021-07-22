const isroblox = require("isroblox");

isroblox.check("128.116.72.112")
    .then((isRoblox) => {
        console.log(isRoblox);
    })
    .catch((err) => {
        throw err;
    });