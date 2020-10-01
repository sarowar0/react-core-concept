import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const users =[
    {name:"Sarowar", email:"sarowarhosenakib2@gmail.com"},
    {name:"Afsana Jarin", email:"afsanajarinjui@gmail.com"},
    {name:"Somona Begum", email:"sumonabegum@gmail.com"},
    {name:"Meherun Nisha", email:"meherunnishamim@gmail.com"},
    {name:"Samsun Nahar", email:"shamsunnahar@gmail.com"},
    {name:"Beauty Sumaiya", email:"beuatybooksumaiya@gmail.com"},
    {name:"Liton Das", email:"litonkumardas@gmail.com"},
    {name:"Sakib-al Hasan", email:"sakibalhasan@gmail.com"},
    {name:"Masrafee", email:"masrafee@gmail.com"},
    {name:"Sumyou Saker", email:"summyousaker@gmail.com"},
    {name:"Tamim Iqbal", email:"tamimiqbal@gmail.com"},
    {name:"Nasir Ahmed", email:"nasirahmed@gmail.com"},

  ]
  return (
        <div>
          <AddCart></AddCart>
          <Posts></Posts>
          <ul>
            <h3>User name</h3>
            {
              users.map(user => <li>{user.name}</li>)
            }
          </ul>
          <ul>
            <h3>User email</h3>
            {
              users.map(user => <li>{user.email}</li>)
            }
          </ul>
          {
            users.map(user => <User userData = {user}></User>)
          }
        </div>
  );
}

function Posts(){
  const [posts, setPost] = useState([]);
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPost(data));
  })
  return <div>
            <h2>Welcome to dynamic posts</h2>
            <ul>
              {
                posts.map(post => <li>{post.title}</li>)
              }
            </ul>
        </div>
}



function AddCart(){
  const [count, setCount] = useState(0);
  return <div>
            <h2>Count:{count}</h2>
            <button onClick={() => setCount(count-1)}>Decrease Count</button>
            <button onClick={() => setCount(count+1)}>Increase Count</button>
        </div>
}


function User(props){
    const userStyle = {
      backgroundColor:'green',
      color:'white',
      padding:'10px',
      border:'1px solid black',
      margin:'5px',
      borderRadius:'10px',
      width:'300px',
      height:'120px',
      float:'left'
    }
    console.log(props);
    const {name, email} = props.userData;
    return(
      <div style={userStyle}>
        <h1>{name}</h1>
        <p>{email}</p>
      </div>
    )
}

export default App;
