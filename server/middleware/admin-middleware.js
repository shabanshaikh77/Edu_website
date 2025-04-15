const Adminmiddleware = async (req, res, next) => {
    try {
        console.log(req.user);
        const adminrole = req.user.isAdmin
        if (!adminrole) {
            res.status(404).json({ message: "Admin denied User is not a admin" })
        }
        next();
    } catch (error) {
        next(error);
    }


}

module.exports = Adminmiddleware;    