import './footer.scss'


const Footer = ()=>{
  return(
    <div className='footer_section'>
      <div className='container'>

        <div className='header'>
            <h1>test_test</h1>
            <p>this is merly a test</p>
        </div>
        <div className='portions'>
            
            <div className="left">
                <h1>Holox <i class="fa-solid fa-igloo"></i></h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
            </div>

            <div className="link-grid">
              <div className="single-link">
                  <h1>About</h1>
                  <ul>
                    <li>Email</li>
                    <li>Guest Writing</li>
                    <li>Book</li>
                    <li>Advertise</li>
                  </ul>
              </div>
              <div className="single-link">
                  <h1>About</h1>
                  <ul>
                    <li>Email</li>
                    <li>Guest Writing</li>
                    <li>Book</li>
                    <li>Advertise</li>
                  </ul>
              </div>
              <div className="single-link">
                  <h1>About</h1>
                  <ul>
                    <li>Email</li>
                    <li>Guest Writing</li>
                    <li>Book</li>
                    <li>Advertise</li>
                  </ul>
              </div>

            </div>

            <div className='social-media'>
                <h1>Follow</h1>
                <div className="bunch">
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-twitter"></i>
                </div>
            </div>
            
        </div>

        <div className="under">
          <p>all rights reserved </p>
          <p>terms & agrements </p>
          <p>privacy and policy</p>
        </div>
      </div>
    </div>
  )
}

export default Footer