const http = require("http");

module.exports = {
    /**
     * Check if an IP belongs to Roblox.
     * @param {string} ip IP of the request
     * @returns {Promise.<Boolean>} Whether IP belongs to Roblox or not
     */
    "check": (ip) => {
        return new Promise((promiseRes, promiseRej) => {
            if (!ip) promiseRej("IP (argument 0) missing or null");

            http.get(`http://ip-api.com/json/${ip}`, (res) => {
                var data = "";

                res.on("data", (chunk) => {
                    data += chunk;
                });

                res.on("end", () => {
                    const json = JSON.parse(data);

                    if (json.status === "success") {
                        promiseRes(json.org.toLowerCase() === "roblox");
                    } else if (json.status === "fail") {
                        promiseRej(`Invalid query (${json.query})`);
                    }
                });
            }).on("error", (err) => {
                promiseRej(data);
            });
        });
    }
};