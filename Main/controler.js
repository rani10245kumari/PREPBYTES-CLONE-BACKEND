

const JWT = require("jsonwebtoken");

const KEY = "privatekeys";
const registredUserCollection = require("../dataModel/MODEL/SignupSchema");


const userLogin = async (request, response) => {
    const tempUser = request.body;
    let findUser = await registredUserCollection.findOne({ userEmail: { $eq: tempUser.userEmail } });

    if (findUser.length === 0) {
        return response.send({ resMsg: "Sorry, You are not registered with us. Please register." });
    }
    if (tempUser.userpassword === findUser.userpassword) {
        return response.send({ resMsg: "User Login successfully", User: findUser })

    }

}

const userRegister = async (request, response) => {
    let tempUser = request.body;
    let IsRegistred = await registredUserCollection.findOne({ userEmail: { $eq: tempUser.userEmail } });

    if (IsRegistred) {
        return response.send({ "resMsg": "Email already registered. Please login" });
    } else {

        //hashing password using bcrypt


        // saving new user in database
        const registredResult = await registredUserCollection.create(tempUser);
        if (registredResult) {
            // generating JWT token for every new user who try to registred with our website
            const generatedToken = JWT.sign({ "USER": tempUser.userEmail }, KEY);
            console.log(generatedToken);

            // sending response back to client 
            return response.send({ resMsg: "Registred Successfully.", "Your_TOKEN": generatedToken, "userDetails": registredResult });
        } else {
            return response.send({ resMsg: "Something Went Wrong, Try Again" });
        }

    }
}

module.exports = { userLogin, userRegister }