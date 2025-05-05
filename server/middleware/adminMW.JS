const adminMW = (req, res, next) => {
    if (!req.user || !req.user.roles) {
        return res.status(401).json({ message: 'Unauthorized' })

    }
    console.log(req.user.roles);
    const role = req.user.roles === 'Admin'
    next()
}
module.exports = adminMW