const mongoose = require("mongoose");
const Article = require("../models/articleSchema");
exports.createArticle = async (req, res) => {
  if (!req.session.name) return res.send("not authenticated");
  //duplikasi form yang sama
  //harus baca documentasi tentang mencari karena ini email gk bisa
  try{
     Article.findOne({ title: req.body.title }, async (err, found) => {
       //FIX THIS SHIT
       if (found) {
         return res.send("title has been used");
       }
       //right
       const ses = req.session.monggoID
       await console.log(ses)
       const { title, content, hidden, tags } = req.body;
       const article = await new Article({
         title: title,
         author: mongoose.Types.ObjectId(ses),
         content: content,
         hidden: hidden,
       });
       //  await articles.array.$push()
       await article.tags.push(...tags);
       //something is wrong here
       await article
         .save()
         .then((rest) => {
           console.log(rest);
         })
         .catch((err) => {
           console.log(err);
           return res.send("error");
         });
       await res.send("article published");
     });
   }
   catch(err){
      res.status(500).send(err)
   }
   // res.send(`${req.session.name} has posted an article`);
};
//belom dimasukin keatas
