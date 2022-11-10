const { findOneAndUpdate } = require('../models/user');
const User = require('../models/user');


module.exports.profile = function(req,res){
    // res.end('<h1>User profile</h1>');

    // return res.render('profile',{
    //     title:"Home"
    // });

    //check if user login cookie is present or not
    if(req.cookies.user_id){
        User.findById(req.cookies.user_id,function(err,user){
            if(err){
                console.log('user not found!');
                return;
            }
            if(user){
                return res.render('profile',{
                    title:"User Profile",
                    user:user
                });

            }
        })

    }else{
        return res.redirect('/users/login');
    }

};
//rendering the pages
module.exports.profile1=function(req,res){
    return res.render('profile1',{
        title:"User Profile",
                    
    });
}

//rendering sign up page
module.exports.signUp = function(req,res){
    return res.render('user_signup',{
        title: "Codeial | Sign Up"
    });
};

//rendering login page
module.exports.login = function(req,res){
    return res.render('user_login',{
        title: "Codeial | Login"
    });
};

//sign up data
module.exports.create = function(req,res){
    if(req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }

    User.findOne({email:req.body.email},function(err,user){
        if(err){
            console.log('Error finding user');
            return;
        }

        if(!user){
            User.create(req.body,function(err,user){
                if(err){
                    console.log('Error signing in by user');
                    return;
                }

                return res.redirect('/users/login');
            });
        }else{
            return res.redirect('back');
        }
    })
};

//get login data session creation
module.exports.createSession = function(req,res){
    //find the user
    User.findOne({email:req.body.email},function(err,user){
        if(err){
            console.log('Error signin in');
            return;
        }

        //handle user found
        
        if(user){
            //handle password not match
            if(user.password!= req.body.password){
                return res.redirect('back');
            }

            //handle session created
            res.cookie('user_id',user.id);
            return res.redirect('/users/profile');


        }else{

            //handle user not found

            return res.redirect('back');

        }
    });

    

  


};