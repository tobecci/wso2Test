import { Express } from "express"

export default function init(app: Express){
    app.get('/', function(req, res){
        res.json({
            route: "/",
            msg: "welcome"
        });
    });
}