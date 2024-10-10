const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const Grocery=require("./Schema");
const app = express();



// Middleware

app.use(cors());
app.use(bodyParser.json());

// MongoDB connecna akshttion
mongoose.connect("mongodb+srv://shweta2005:2005@shweta.zmbir.mongodb.net/Grocery", {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));


app.get('/Grocery', async (req, res) => {
    try {
        const result = await Transaction.find();
        res.send(result);
    } catch (error) {
        console.error("Error fetching students:", error);
        res.status(500).send("Internal Server Error");
    }
});


app.post('/Grocery/add',async(req,res)=>{
    const newEntry=new Transaction ({...req.body});
    const result= await newEntry.save();
    res.send(result);
});

app.get('/Grocery/profit-loss/date-wise', async (req, res) => {
    const { startDate, endDate } = req.query;

    try {
        const Grocery = await Transaction.find({
            date: {
                $gte: new Date(startDate), // Greater than or equal to start date
                $lte: new Date(endDate)    // Less than or equal to end date
            }
        });

        const totalSales = Grocery.reduce((acc, Grocery) => acc + (Grocery.sale || 0), 0);
        const totalExpenses = Grocery.reduce((acc, Grocery) => acc + (Grocery.expense || 0), 0);
        const profitLoss = totalSales - totalExpenses;

        res.json({
            totalSales,
            totalExpenses,
            profitLoss,
            Grocery, // You can also send the transactions if needed
        });
    } catch (error) {
        console.error("Error calculating profit and loss:", error);
        res.status(500).send("Internal Server Error");
    }
});

app.listen(5001, () => {
    console.log("sever connected on port 5001");
});