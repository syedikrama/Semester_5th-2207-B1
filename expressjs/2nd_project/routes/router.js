let exp = require("express")
let r = exp.Router()
let cont = require('../logic_function/function')

r.get("/", cont.Home)
r.get("/a", cont.Contact)
r.get("/b", cont.Feedback)
r.get("/c", cont.Help)
r.get("/d", cont.Faq)
r.get("/e", cont.Privacy_policy)
r.post("/save", cont.SaveData)
r.post("/healthsave", cont.SaveHealthdata)

module.exports = r;