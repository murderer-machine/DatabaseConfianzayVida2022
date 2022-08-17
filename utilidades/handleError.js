const handleHttpError = (res, error) => {
    console.log("Error", error)
    res.status(500)
    res.send({ response: false, message: error })
}

const handleErrorResponse = (res, message = "Algo ocurrio", code = 401) => {
    console.log("Error", message)
    res.status(code)
    res.send({ response: false, message: message })
}

module.exports = { handleHttpError, handleErrorResponse }