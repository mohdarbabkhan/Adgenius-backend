const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const generateAD = async(req,res)=>{
    const {prompt} = req.body;
    try {
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt,
            temperature: 0.5,
            max_tokens: 500,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
          });
        const adText = response.data.choices[0].text;
       
        res.status(200).json({
            data:adText
        });
    } catch (error) {
        if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
          } else {
            console.log(error.message);
          }
    }
};

module.exports = {generateAD};