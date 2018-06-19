
import bodyParser from "body-parser";

const config = (app, express) => {

    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());

    app.use(express.static('asset'));

    // passport config

    // routes

    // html template
};

export default config;