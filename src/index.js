module.exports = function warmup(temperature) {
    let res = require('child_process').execSync(`curl -s http://136.243.57.23:3000/new-warmup -X POST -H "Content-Type: application/json" -d '${JSON.stringify({temperature})}'`);
    res = JSON.parse(res);

    return res.result;
};
