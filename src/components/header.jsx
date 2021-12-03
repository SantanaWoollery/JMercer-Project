export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
              <img src='img/logo.png' className='img-responsive' alt='j mercer marketing logo' />{' '}
                {/*<h1>
                  {props.data ? props.data.title : 'Loading'}
                  <span></span>
                  
                </h1>*/}
                <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                
                <a
                  href='https://marketingcompany21611.hbportal.co/schedule/608562c28ba27d002ac88db3' target='_blank' rel='noreferrer'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  Book A Consultation
                </a>{' '}
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
