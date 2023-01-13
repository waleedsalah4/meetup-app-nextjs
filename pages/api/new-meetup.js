import { MongoClient } from "mongodb";
const user_Pass = process.env.NEXT_PUBLIC_UESER_PASS

// /api/new*meetup

async function handler(req,res) {
    try {
        if(req.method === 'POST'){
            const data = req.body;

            const client = await MongoClient.connect(`mongodb+srv://${user_Pass}@cluster0.g8pdzal.mongodb.net/meetups?retryWrites=true&w=majority`)
            const db = client.db();
    
            const meetupCollections = db.collection('meetups');
    
            const result = await meetupCollections.insertOne(data);
            console.log(result)
    
            client.close()
    
            res.status(201).json({message: "Meetup inserted"})
        }
    } catch (error) {
        res.status(400).json({message: "fialed to insert"})
    }
       

}

export default handler; 