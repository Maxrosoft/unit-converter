import convert from "convert-units";

const unitData = {
    Length: { units: ["mm", "cm", "m", "in", "ft-us", "ft", "mi"] },
    Mass: { units: ["mcg", "mg", "g", "kg", "oz", "lb", "mt", "t"] },
    Temperature: { units: ["C", "F", "K", "R"] },
};

class APIController {
    getUnits(req, res, next) {
        try {
            res.json(unitData);
        } catch (error) {
            next(error);
        }
    }

    postConvert(req, res, next) {
        try {
            const { value, from, to } = req.body;
            const result = convert(+value).from(from).to(to);

            res.json({ result: result });
        } catch (error) {
            next(error);
        }
    }
}

export default APIController;
