const cors = require('cors')
const express = require('express')
const jsonRouter = require('express-json-rpc-router')
const app = express()



clientes = [
    { id: 1, testemunhar: null, pena: null },
    { id: 2, testemunhar: null, pena: null },
]

function clintesResponderam() {
    return clientes[0].testemunhar != null && clientes[1].testemunhar != null;
}

function definirPena() {
    if (clientes[0].testemunhar === 1) {
        if (clientes[1].testemunhar === 0) {
            clientes[0].pena = 0;
            clientes[1].pena = 10;
        } else {
            clientes[0].pena = 5;
            clientes[1].pena = 5;
        }
    } else {
        if (clientes[1].testemunhar === 0) {
            clientes[0].pena = 3;
            clientes[1].pena = 3;
        } else {
            clientes[0].pena = 10;
            clientes[1].pena = 0;
        }
    }
}

const controller = {
    responder({ testemunhar, cliente }) {
        if (cliente != 1 && cliente != 2) {
            throw new Error('Cliente deve ser 1 ou 2!')
        }

        let clienteIndex = cliente - 1

        if (clientes[clienteIndex].testemunhar == null) {
            clientes[clienteIndex].testemunhar = testemunhar;
        } else {
            throw new Error(`Cliente ${cliente} já respondeu!`)
        }

        if (clintesResponderam()) {
            definirPena()
        }

        return clientes;
    },
    consultar() {
        return clientes;
    },
    limpar() {
        clientes = [
            { id: 1, testemunhar: null, pena: null },
            { id: 2, testemunhar: null, pena: null },
        ]

        return clientes;
    }
}

app.use(cors())
app.use(express.json())
app.use(jsonRouter({ methods: controller }))
app.listen(3000, () => console.log('listening on port 3000'))
