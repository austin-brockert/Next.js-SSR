export default async function handler(req, res) {
    var response = {
        userId : req.body.userId,
        password : req.body.password
    }

    res.status(200).json(response);
}