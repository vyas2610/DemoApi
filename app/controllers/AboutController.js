const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

BigInt.prototype.toJSON = function () {
    const int = Number.parseInt(this.toString());
    return int ?? this.toString();
};

async function index(req, res) {

    try {
        let response = await prisma.category.findMany()
        res.send({
            response

        });

    } catch (error) {
        res.status(500).send({
            error
        })
    }
}

async function create(req, res) {
    let body = req.body;
    console.log('body', body);
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
        console.warn('error', error);
        res.status(500).send({
            error,
        });
    }
}

async function update(req, res) {

    try {
        await prisma.category.update({
            data: req.data,
            where: {
                id: req.params.id,
            },
        })
        res.send({
            msg: "Data updated",

        })

    } catch (error) {
        res.status(500).send({
            error
        })
    }
}

async function destroy(req, res) {
    try {
        await prisma.category.delete({
            where: {
                id: req.params.id,
            },
        })
        res.send({
            msg: "Delete is calling...!"
        })

    } catch (error) {
        res.status(500).send({
            error
        })
    }
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