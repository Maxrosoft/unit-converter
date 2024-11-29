class ConverterController {
    getDefault(req, res) {
        res.redirect("/length");
    }

    getControllerByPath(req, res) {
        const active = req.originalUrl.slice(1);
        res.render("index", { active: active });
    }
}

export default ConverterController;
