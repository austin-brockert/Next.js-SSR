export default function handler(req, res){
    const sampleData = {
        message: 'Hello from the serverless function!',
        time: new Date().toISOString(),
    }

    res.status(200).json(sampleData);
}