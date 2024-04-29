function index(req, res) {
    res.send({
        msg: "Running Server",
    });
}

module.exports = {
    index
}