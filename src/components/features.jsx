export const Features = (props) => {
  return (
    <div id='features' className='text-center'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
          <h2>Our Courses</h2>
          <p>
            This is filler text. This is filler text. This is filler text. This is filler text.
          </p>
          
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-xs-6 col-md-6 col-lg-6'>
                  {' '}
                  <i className={d.icon}></i>
                  
                  
                  <h3>{d.title}</h3>
                  <p>{d.text}
                  </p>
                  
                </div>
                
              ))
            : 'Loading...'}
            <a
                  href='https://jmercermarketing.thinkific.com/courses/conquer-your-content' target='_blank' rel='noreferrer'
                  className='btn btn-custom btn-lg page-scroll'
                >Enroll Now</a>
        </div>
        
      </div>
      
    </div>
    
  )
}
