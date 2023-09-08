const verifyToken = (reqs, res, next) => {
    try {
        const req = reqs;
        req.user = {};
        (req.user.userType = "Admin"), (req.user.userId = "1234");
        next();
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Error" });
    }
};
export { verifyToken };
