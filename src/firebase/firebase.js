import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCBcMoyVqsI6Fnzmdvlfgs2paaPswJDmMM",
    authDomain: "expensify-62f7c.firebaseapp.com",
    databaseURL: "https://expensify-62f7c.firebaseio.com",
    projectId: "expensify-62f7c",
    storageBucket: "expensify-62f7c.appspot.com",
    messagingSenderId: "17673661639"
};

firebase.initializeApp(config);

const database = firebase.database();

export  { firebase, database as default };




// child_removed

// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// child_changed

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });


// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     });

//     console.log(expenses);
// });

// database.ref('expenses')
//     .once('value')
    // .then( (snapshot) => {
        // const expenses = [];

        // snapshot.forEach((childSnapshot) => {
        //     expenses.push({
        //         id: childSnapshot.key,
        //         ...childSnapshot.val()
        //     })
        // });

    // });

// database.ref('expenses').push({
//     description: 'third item againg!',
//     note: 'third! note',
//     amount: 10000,
//     createdAt: 10
// })





// database.ref('notes').push({
//     title: 'To do',
//     body:'go for a run'
// });

// database.ref('notes').push({
//     title: 'Course topics',
//     body:'React Native, Angular, Python'
// });

// const firebaseNotes = {
//     notes:{

//     }
// }

// const notes = [{
//     id: 12,
//     body: 'This is my note',
//     title: 'First note'
// },
// {
//     id: 56,
//     body: 'This is my note 2',
//     title: 'Second note'
// }];

// database.ref('notes').set(notes)


// database.ref().set({
//     name: 'Ailin Reler',
//     age: 26,
//     stressLevel: 6,
//     job: {
//         title: 'web developer',
//         company: 'google'
//     },
//     isSingle: false,
//     location: {
//         city: 'Buenos Aires',
//         country: 'Argentina'
//     }
// }).then(() => {
//     // console.log('data is saved!');
// }).catch((e) => {
//     console.log('This failed ', e)
// });

// database.ref('isSingle').set(null);
// remove is also called on your ref.

// database.ref('isSingle')
//     .remove()
//     .then(() => {
//         console.log('removed succeeded');
// })
//     .catch((e) => {
//         console.log('An error ocurred ', e);
// })

// database.ref('location').update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// });

// database.ref()
//     .once('value')
//     .then((snapshot)=>{
//         const val = snapshot.val();
//         console.log(val)
//     }).catch((e) => {
//         console.log('Error:' , e)
//     });

// const onChangeData = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val())
// }, (e) => {
//     console.log('Error with data fetching ', e);
// });

// setTimeout(() => {
//     database.ref().update({
//         name: 'Aiki'
//     })
// }, 3000);

// setTimeout(() => {
//     database.ref().off('value', onChangeData);
// }, 6000);


// setTimeout(() => {
//     database.ref().update({
//         name: 'Aiki 2'
//     })
// }, 9000);

// we can also unsubscribe, so if the user navigates to another page, and we don't want to wate resouces, we can use the off method.

// const onDataChange = database.ref().on('value', (snapshot) => {
//     const snapshotVal = snapshot.val();
//     console.log(`${snapshotVal.name} is a ${snapshotVal.job.title} at ${snapshotVal.job.company}`)
// });

// database.ref().update({
//     name: 'Sarlanga'
// })
