const { validationResult } = require('express-validator')

const validateResult = (req, res, next) => {
    const errorFormatter = ({ msg }) => {
        return msg
    }
    try {
        validationResult(req).formatWith(errorFormatter).throw()
        return next()
    } catch (err) {
        res.status(403)
        res.send({
            response: false,
            message: err.array()
        })
    }
}

module.exports = { validateResult }