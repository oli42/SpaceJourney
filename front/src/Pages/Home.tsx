import '../Style/style.scss'
import NavBar from '../Components/NavBar';

function Home() {

  return (
   
    <div className="container">
    <div className="header"></div>
    <div className="footer"></div>
    <NavBar/>
    <div className="photo">
      <div className='title'>
        <h1>My Space Journey</h1>
      </div>
        <div className='buz'>
          <p>"That's one small step for man, one giant leap for mankind"</p>
        </div>
    </div>
  </div>
  )
}

export default Home