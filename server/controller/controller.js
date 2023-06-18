import Question from "../models/questionSchema.js"
import Results from "../models/resultSchema.js"
import questions ,{answers} from "../database/data.js"



export async function getQuestions(req,res){
        try {
            const q = await Question.find()
            res.json(q)
        } catch (error) {
            res.json({error})
            
        }
}

export async function insertQuestions(req, res) {
    try {
      await Question.insertMany({ questions , answers});
        res.json({ msg: "Data saved successfully...!" });
    } catch (error) {
      res.json({ error });
    }
  }  

export async function dropQuestions(req,res){
   try {
    await Question.deleteMany();
    res.json({ msg: "Question deleted successfully...!"})
   } catch (error) {
       res.json({ error });
   }
}


export async function getResult(req,res){
   try {
     const r = await Results.find()
     res.json(r);
   } catch (error) {
    res.json({ error });
   }
}

export async function storeResult(req,res){
    try {
       const {username, result,attempts,points,achieved}= req.body;
       if(!username && !result) throw new Error ('Data not provided')

      await Results.create({username, result,attempts,points,achieved})
        res.json({msg:"Result saved successfully.....!"});
      
    } catch (error) {
       res.json({ error });
      }
    }

export async function dropResult(req,res){
   try {
    await Results.deleteMany();
     res.json("Result deleted successfully")
    }
    catch (error) {
    res.json({ error });
   }

  }