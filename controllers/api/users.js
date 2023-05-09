module.exports = {
    create
};

function create(req, res) {
    //baby steps
    //this completes the flow from component to server and back!
    res.json({
        user: {
            name: req.body.name,
            email: req.body.email
        }
    });
}