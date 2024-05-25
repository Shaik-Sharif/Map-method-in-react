import User from './User'

function App(){
  let users =[
    {
      id: 323,
      name:"sharif",
      age:'19',
      place:'Vijayawada'
    },
    {
      id:21323,
      name:'Ahehflai',
      age:3434,
      place:"Banglore"
    },
    {
      id:434323,
      name:'Ahehflai',
      age:3434,
      place:"aievjl"
    }
  ]
  
  return (
    <>
    {
      users.map(
        (u) => {
          // with the keyboard u only your mapping the users list 
          return <User key={u.id}  id={u.id} name={u.name} age={u.age} place={u.place}></User>
        }
      )
    }
    </>
  )
}
export default App