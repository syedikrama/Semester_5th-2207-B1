let user = require('../collection/user_model')
let health = require('../collection/health_info')
let functions = {
    Home: async function (req, res) {
        res.send('home')
        res.end()
    },
    Contact: async function (req, res) {
        res.send('contact')
        res.end()
    },
    Feedback: async function (req, res) {
        res.send('feedback')
        res.end()
    },
    Help: async function (req, res) {
        res.send('help')
        res.end()
    },
    Faq: async function (req, res) {
        res.send('faq')
        res.end()
    },
    Privacy_policy: async function (req, res) {
        res.send('privacy_policy')
        res.end()
    },

    // save data to db
    SaveData: async function (req, res) {
        try {
            console.log("recive data:", req.body);
            let user_data = new user(req.body);
            let save = await user_data.save();
            res.status(200).json({ msg: "data saved successfully", data: save });
        } catch (error) {
            console.log(error)
            res.status(500).json({ msg: "error while saving data", data: error });
        }
    },

    // save data to db
    SaveHealthdata: async function (req, res) {
        try {
            console.log("recive data:", req.body);
            let health_data = new health(req.body);
            let save = await health_data.save();
            res.status(200).json({ msg: "data saved successfully", data: save });
        } catch (error) {
            console.log(error)
            res.status(500).json({ msg: "error while saving data", data: error });
        }
    }

}
module.exports = functions