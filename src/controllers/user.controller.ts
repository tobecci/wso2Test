import { Express } from "express"

export default function init(app: Express){
    app.get('/users', function(req, res){
        res.json({
            route: "/users",
            msg: [
                { user: "test user", password: "test pass" },
                { user: "test user", password: "test pass" },
                { user: "test user", password: "test pass" },
                { user: "test user", password: "test pass" },
                { user: "test user", password: "test pass" },
                { user: "test user", password: "test pass" },
                { user: "test user", password: "test pass" },
                { user: "test user", password: "test pass" },
            ]
        });
    });
}