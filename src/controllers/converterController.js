import convert from "convert-units";

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
            const { value, from, to, active } = req.body;
            const result = convert(+value).from(from).to(to);

            res.render("result", { result: result, active: active });
        } catch (error) {
            next(error);
        }
    }
}

export default ConverterController;

