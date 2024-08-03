const { MongoClient } = require('mongodb');

async function createTrigger() {
  const client = await MongoClient.connect('mongodb://localhost:27017');
  const db = client.db('tuBaseDeDatos');

  const collection = db.collection('posts');
  const changeStream = collection.watch();

  changeStream.on('change', (change) => {
    if (change.operationType === 'insert') {
      console.log('Nuevo post creado:', change.fullDocument);
    }
  });
}