

function Footer() {
  return (

    <div >
        <hr />
        <div className='footer'>
        <div >
        <h3>Features</h3>
        <ul className='footer_div'>
            <li><a href="">cool stuff</a></li>
            <li><a href="">random feature</a></li>
            <li><a href="">Team feature</a></li>
        </ul>
        </div> 
       <div >
       <h3>Resources</h3>
       <ul className='footer_div'>
        <li><a href="">Resources</a></li>
        <li><a href="">Resource name</a></li>
       </ul>
       </div>
       <div >
        <h3>About</h3>
         <ul  className='footer_div'>
            <li><a href="">Team</a></li>
            <li><a href="">Locations</a></li>
        </ul>
       </div>
        </div>
      
    </div>
  )
}

export default Footer