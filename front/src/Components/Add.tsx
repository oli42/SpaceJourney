import React, { useContext } from 'react'
import { userContext } from '../Context/userContext';

function Add(data: any) {
    // const user = useContext(userContext);
    const user = localStorage.getItem('data');

    async function handleSavePic() {
        let url: string = 'http://localhost:4000/createPic';
        const response = await fetch(url, { method: "POST",
        headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin' : '*'
        },
        body: JSON.stringify({
        url: data.data.image,
        title: data.data.title,
        explanation: data.data.explanation,
        UserId: user
        })
      })
      const result = await response.json();
    }
  return (
    <>
      <button onClick={()=> handleSavePic()}>Add to My Gallery</button>
    </>
  )
}

export default Add
