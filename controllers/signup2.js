const singup2 = async(req,res)=>{
    const {name,username,age,academylevel,testscore} = req.body;
    if(!name) return res.json({status: "error", error: "Please Enter your name"})
    if(!username) return res.json({status: "error", error: "Please Enter your username"})
    if(!age) return res.json({status: "error", error: "Please Enter your age"})
    if(!academylevel) return res.json({status: "error", error: "Please Enter your Acadeny Leve"})
    if(!testscore) return res.json({status: "error", error: "Please Enter your Test Score"})
}

module.exports = singup2