import express from  'express'

export class HttpServer {
    public app : express.Application

    constructor(){
        this.app = express()
        this.addMiddleware()
        this.addRoutes()
    }

    private addMiddleware(){
        this.app.use(express.json())
        this.app.use(express.urlencoded({extended: true}))
    }
    private addRoutes(){
        this.app.get('/',(req, res) => {
            return res.status(200).json({
                message:'Success',
                statusCode:200,
                status: true,
            })
        })
    }
}

const expressServer = new HttpServer()
export default expressServer.app
