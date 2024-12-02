import convert from "../utils/unitConverter.js";

class ConverterController {
    getDefault(req, res, next) {
        try {
            res.redirect("/length");
        } catch (error) {
            next(error);
        }
    }

    getControllerByPath(req, res, next) {
        try {
            const active = req.originalUrl.slice(1);
            res.render("index", { active: active });
        } catch (error) {
            next(error);
        }
    }

    makeConversion(req, res, next) {
        try {
            // console.log(...req.body);
            // const {value, deom, to, unit} = req.body;

            const result = convert(Object.entries(req.body));

            res.render("result", { result: result, active: req.body.unit });
        } catch (error) {
            next(error);
        }
    }
}

export default ConverterController;
