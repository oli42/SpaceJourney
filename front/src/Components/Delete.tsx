import { useContext } from 'react'
import { userContext } from '../Context/userContext';


function Delete(data: any) {
    // const user = useContext(userContext);
    const user = localStorage.getItem('data');


    async function handleDeletePic() {
        let url: string = 'http://localhost:4000/deletePic';
        const response = await fetch(url, { method: "POST",
        headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin' : '*'
        },
        body: JSON.stringify({
            title: data.data.title,
            UserId: user,
        })
      })
      const result = await response.json();
      }

  return (
    <>
        <button onClick={()=> handleDeletePic()}>Delete</button>
    </>
  )
}

export default Delete
