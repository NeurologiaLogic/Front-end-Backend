const mongoose = require("mongoose");
const Article = require("../models/articleSchema");
const slugify = require("slugify");
const marked = require("marked").marked;

//purify setup from documentation
const createDOMPurify = require('dompurify');
const { JSDOM } = require('jsdom');
const window = new JSDOM('').window;
const DOMPurify = createDOMPurify(window);
//

exports.createArticle = async (req, res) => {
  if (!req.session.name) return res.send("not authenticated");
  //duplikasi form yang sama
  //harus baca documentasi tentang mencari karena ini email gk bisa
  try {
    Article.findOne({ slug: req.body.slug }, async (err, found) => {
      //if the title has been used
      if (found) {
        return res.send("title has been used");
      }
      //right
      //Get mongooseId from user
      const ses = req.session.monggoID;

      const { title, content, hidden, tags, slug } = req.body;
      //make it so that the url is more readable
      const slugTitle = await slugify(title, {
        replacement: "_",
        remove: /[*+~.()'"!:@]/g,
        lower: true,
        strict: true,
      });
      const article = await new Article({
        title: title,
        slug: slugTitle,
        author: mongoose.Types.ObjectId(ses),
        hidden: hidden,
      });
      //  await articles.array.$push()
      await article.tags.push(...tags);

      //converting marked down to html
      article.content = await DOMPurify.sanitize(marked(content));

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
  } catch (err) {
    res.status(500).send(err);
  }
  // res.send(`${req.session.name} has posted an article`);
};
//belom dimasukin keatas
