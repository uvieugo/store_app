const firebase = require("firebase");
require("firebase/firestore");

var firebaseConfig = {
   apiKey: "AIzaSyD0SQv55x60pANWY6r50U88PG2Gl77jPyY",
   authDomain: "my-store-app-9da00.firebaseapp.com",
   databaseURL: "https://my-store-app-9da00.firebaseio.com",
   projectId: "my-store-app-9da00",
   storageBucket: "my-store-app-9da00.appspot.com",
   messagingSenderId: "199369584023",
   appId: "1:199369584023:web:1d8d1d2faee3ef05ee68d2"
};

 firebase.initializeApp(firebaseConfig);

 // Get a reference to the database service
 var db = firebase.firestore();

 const getData = () => {
  return db.collection("menuitems").get()
  .then((querySnapshot) => {
    let data = []
    querySnapshot.forEach((doc) => {
      data.push({
        id: doc.id, 
        name: doc.data().name,
        object_num: doc.data().object_num,
        category: doc.data().category,
        price: doc.data().price
      })
    });
    return data
  })
}

const addOrder = (data) => {
  db.collection("orders").add(data)
  .then(function (docRef) {
    // console.log("Document written with ID: ", docRef.id);
  })
  .catch(function (error) {
    // console.error("Error adding document: ", error);
  });
}
export { getData, addOrder }