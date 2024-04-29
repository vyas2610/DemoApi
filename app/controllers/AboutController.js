const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

function index(req, res) {
    res.send({
        msg: 'About Us Page is calling..!',
        item: [{
            title: 'Title',
            des: 'Des'
        }]
    });
}

async function create(req, res) {
    let body = req.body;
    try {
        await prisma.category.create({
            data: {
                name: body.name,
                description: body.description,
            },
        });

        res.send({
            msg: 'Data Added..!',
        });
    }
    catch (error) {
        res.status(500).send({
            error,
        });
    }
}

function update(req, res) {
    res.send({
        msg: "update is calling...!"
    })
}

function destroy(req, res) {
    res.send({
        msg: "Delete is calling...!"
    })
}

function show(req, res) {
    res.send({
        msg: "Detail is calling...!"
    })
}
module.exports = {
    index,
    create,
    update,
    destroy,
    show
}