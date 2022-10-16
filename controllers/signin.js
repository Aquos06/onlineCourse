const login = async(req,res) => {
    const {username1:username, password1:password} = req.body;
    if (!username || !password) return res.json({status: "error", error : "Please Enter your Email and Password"});
}
module.exports = login;