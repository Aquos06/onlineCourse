const login = async(req,res)=>{
    const {username,password} = req.body;

    if(!email || !password) return res.json({status: "error", error: "Please Enter your Email or Password"})
}

module.exports = login;