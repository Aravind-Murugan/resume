
const defaultAPIPageFunction = async (Request, Response) => {
  Response.status(200).json({Message: "Welcome to the backend application.."})
}

module.exports = { defaultAPIPageFunction }