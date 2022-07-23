import React, { useState } from 'react';
import { app, database } from '../firebaseConfig';
import { collection, addDoc, doc, updateDoc, getDocs,deleteDoc } from 'firebase/firestore';
// import { getAuth, 
// createUserWithEmailAndPassword
// signInWithEmailAndPassword
//     GoogleAuthProvider,
//     signInWithPopup
//  } from 'firebase/auth';

const Home = () => {
    // let auth = getAuth();
    // let googleProvider = new GoogleAuthProvider();
    const [data, setData] = useState({});
    const collectionRef = collection(database, 'users')

    const handleInput = (e) => {
        let newInput = { [e.target.name]: e.target.value };
        setData({ ...data, ...newInput });
    }
    const handleSubmit = () => {
        addDoc(collectionRef, {
            email: data.email,
            password: data.password
        }).then(() => {
            alert("Datat added")
        }).catch((err) => {
            console.log(err.message)
        })
        // signInWithPopup(auth, googleProvider).then((response) => {
        //     console.log(response.user)
        // }).catch((error) => {
        //     alert(error.message)
        // })
    };

    const getData = () => {
        getDocs(collectionRef).then((response) => {
            console.log(response.docs.map((item) => {
                return { ...item.data(), id: item.id };
            }))
        })

    }

    // const updateData = () => {
    //     const docToUpdate = doc(database, 'users', 'bLDkbpxyragrKQ27lT85');
    //     updateData(docToUpdate, {
    //         email: 'abc1342@gmail.com',
    //         password: 12548,
    //     }).then(() => {
    //         alert("Data updated")
    //     }).catch((err) => {
    //         alert(err.message)
    //     })

    // }
    const deleteData = () => {
        const docToUpdate = doc(database, 'users', 'bLDkbpxyragrKQ27lT85');
        deleteData(docToUpdate, {
            email: 'abc1342@gmail.com',
            password: 12548,
        }).then(() => {
            alert("Data deleted")
        }).catch((err) => {
            alert(err.message)
        })

    }

    return (
        <>
            <div>
                <input
                    name='email'
                    placeholder='Email'
                    onChange={(e) => handleInput(e)}
                />
                <input
                    type='password'
                    name='password'
                    placeholder='Password'
                    onChange={(e) => handleInput(e)}
                />
                <button type='submit' onClick={deleteData}>Signup</button>

            </div>
        </>
    )
}

export default Home