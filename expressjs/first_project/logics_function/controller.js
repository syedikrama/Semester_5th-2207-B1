let index = async function(req, res) {
    res.send('Index page')
    res.end;
}

let about = async function(req, res) {
    res.send('About page')
    res.end;
}

module.exports = {index , about}