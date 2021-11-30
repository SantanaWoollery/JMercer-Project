export const Blog = (props) => {
    return (
        <div id="blog" className="text-center">
            <div className="container">
                <div className="section-title">
                    <h2>Read More</h2>
                    <p>
                        This is filler text. This is filler text. This is filler text. This is filler text.
                    </p>
                </div>

                <div className='row'>

                    {props.data
                        ? props.data.map((d, i) => (
                            <div key={`${d.name}-${i}`} className='col-md-4'>
                                {' '}
                                <i className={d.icon}></i>
                                <div className='blog-desc'>
                                    <h3>{d.name}</h3>
                                    <p>{d.text}</p>
                                </div>
                            </div>
                        ))
                        : 'loading'}
                </div>
            </div>
        </div>
    );
};
