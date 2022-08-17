const { handleErrorResponse } = require("../utilidades/handleError");

const roles = (roles) => (req, res, next) => {
    const roles_ = roles.split(",")
    if (roles_.some(item => {
        return req.user.rol.includes(item)
    })) {
        next()
    } else {
        handleErrorResponse(res, "NOT_ROL", 409)    }
}

module.exports = roles