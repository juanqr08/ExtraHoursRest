const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config');

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.connectionDB();
        this.middlewares();
        this.routes();
    }
    
    async connectionDB(){
        await dbConnection().catch( err => {
            console.error(err);
            process.exit()
        });
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.static('public'));
        this.app.use(express.json());
    }

    routes(){
        this.app.get('/' , (req , res)=>{
            res.sendFile(__dirname + '/public/index.html');
        })
        this.app.use('/api/hours', require('../routes/hours.routes'));        
    }

    listen(){
        this.app.listen(this.port, () => console.log(`Servidor corriendo por el puerto: ${this.port}`));
    }
}

module.exports = Server;