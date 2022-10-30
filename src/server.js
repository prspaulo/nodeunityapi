const expresps = require("express");
const bodyParse = require("body-parser");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const app = expresps();

//const port = "3000";
const port = process.env.port || 3000;

app.use(bodyParse.json());
//codifica a url da api
app.use(bodyParse.urlencoded({extended: true}));

//URL DB
mongoose.connect("mongodb+srv://teste:M1f8LQxoEoX2HZpV@cluster0.n9fvmit.mongodb.net/healthlabgame?retryWrites=true&w=majority");

//
const schema_anamnese = new Schema({
    ActorName:{
        type: String
    },
    profileSprite:{
        type: String
    },
    speechText:{
        type: String
    },
    
});

const schema_questions = new Schema({
    ActorName:{
        type: String
    },
    profileSprite:{
        type: String
    },
    correctResponse:{
        type: String
    },
    inCorrectResponse:{
        type: String
    },
    points:{
        type: String
    },
    question_id:{
        type: String
    },
    response1:{
        type: String
    },
    response2:{
        type: String
    },
    response3:{
        type: String
    },
    speechText:{
        type: String
    },
});

const schema_exame = new Schema({
    ActorName:{
        type: String
    },
    profileSprite:{
        type: String
    },
    speechText:{
        type: String
    },
    
});

//Modelo do banco
const Anamnese = mongoose.model('anamnese', schema_anamnese);
const Questions = mongoose.model('questions', schema_questions);
const Exame = mongoose.model('exame', schema_exame);

//Página principal API
app.get("/", function(req, resp, next){

    resp.status(200).send("<h2>Ranjit!</h2> <h1>Hellooooo</h1>");

});

//Busca todos os dados anamnese
app.get("/anamnese", function(req, resp, next){

    Anamnese.find({}).then(data => {   
 
        if (data && data.length != 0) {
            resp.status(200).send(data); 
        }else{
            resp.status(204).send(); 
        }         
 
    }).catch(e => {
        resp.status(500).send(e);
    })

});

//Cadastro anamnese
app.post("/anamnese", function(req, resp, next){

    var anamneseTemp = new Anamnese(req.body);
 
    anamneseTemp.save().then(data => {
        if (data && data.length != 0) {
 
            resp.status(201).send({
                message: "done"
            });    
 
        }else{
            resp.status(400).send({
                message: "check the value"
            });
        }
        
    }).catch(e => {
        resp.status(500).send({
            message: "erro",
            erro: e + " "
        });
 
    });

});


//Cadastro diagnostico
app.post("/questions", function(req, resp, next){

    var questionsTemp = new Questions(req.body);
 
    questionsTemp.save().then(data => {
        if (data && data.length != 0) {
 
            resp.status(201).send({
                message: "done"
            });    
 
        }else{
            resp.status(400).send({
                message: "check the value"
            });
        }
        
    }).catch(e => {
        resp.status(500).send({
            message: "erro",
            erro: e + " "
        });
 
    });

});

//Busca todos os dados questions
app.get("/questions", function(req, resp, next){

    Questions.find({}).then(data => {   
 
        if (data && data.length != 0) {
            resp.status(200).send(data); 
        }else{
            resp.status(204).send(); 
        }         
 
    }).catch(e => {
        resp.status(500).send(e);
    })

});

//Cadastro exame
app.post("/exame", function(req, resp, next){

    var exameTemp = new Exame(req.body);
 
    exameTemp.save().then(data => {
        if (data && data.length != 0) {
 
            resp.status(201).send({
                message: "done"
            });    
 
        }else{
            resp.status(400).send({
                message: "check the value"
            });
        }
        
    }).catch(e => {
        resp.status(500).send({
            message: "erro",
            erro: e + " "
        });
 
    });

});

//Busca todos os dados questions
app.get("/exame", function(req, resp, next){

    Exame.find({}).then(data => {   
 
        if (data && data.length != 0) {
            resp.status(200).send(data); 
        }else{
            resp.status(204).send(); 
        }         
 
    }).catch(e => {
        resp.status(500).send(e);
    })

});

//Atualiza player
/*app.put("/player/:name", function(req, resp, next){
     
    var query = {name: req.params.name};
 
    Player.findOneAndUpdate(query, req.body, (erro, data) => {
        if (erro) {
            resp.status(500).send(erro);
        }else{
            if (data && data.length != 0) {
                resp.status(202).send({message: "done"});
            }else{
                resp.status(204).send();
            }            
        }
    });

});

//Deleta player
app.delete("/player/:name", function(req, resp, next){
    
    var query = {name: req.params.name}
  
    Player.findOneAndDelete(query).then(data => {
        if (data && data.length != 0) {
            resp.status(202).send({message: "done"});
        }else{
            resp.status(204).send();
        }
         
    }).catch(e => {
        resp.status(500).send(e);
    });

});
*/
app.listen(port, function(){
    console.log("Servidor está funfando na porta " + port);
});