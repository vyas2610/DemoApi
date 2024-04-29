function index(req, res) {
    res.send({
        msg: 'About Us Page is calling..!',
        item: [{
            title: 'Title',
            des: 'Des'
        }]
    });
}

function create(req, res) {
    res.send({
        msg: 'PostMan',
        body: req.body
    })
}


module.exports = {
    index,
    create
}