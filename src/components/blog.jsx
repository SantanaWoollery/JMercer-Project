import { Card, Button, CardGroup } from 'react-bootstrap'



export const Blog = (props) => {
    return (
        <div id='blog' className='text-center'>
            <div className='container'>
                <div className='section-title'>
                    <h2>Read More</h2>
                    <p>
                        This is filler text. This is filler text. This is filler text. This is filler text.
                    </p>
                </div>
                <div className='row'>
                    <CardGroup>
                        <Card>
                            <div className='col-sm-6 col-md-4 col-lg-4'>
                                <Card.Img variant="top" src="holder.js/100px160" />
                                <Card.Body>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                        This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer.
                                    </Card.Text>
                                </Card.Body>
                                <a
                                    href='https://www.instagram.com/tv/CKeWMDBBHbk/' target='_blank' rel='noreferrer'
                                    className='btn btn-custom btn-lg page-scroll'
                                >Learn More</a>
                            </div>
                        </Card>
                        <Card>
                            <div className='col-sm-6 col-md-4 col-lg-4'>
                                <Card.Img variant="top" src="holder.js/100px160" />
                                <Card.Body>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                        This card has supporting text below as a natural lead-in to additional
                                        content.{' '}
                                    </Card.Text>
                                </Card.Body>
                                <a
                                    href='https://www.instagram.com/tv/CL6tEfxK2pj/' target='_blank' rel='noreferrer'
                                    className='btn btn-custom btn-lg page-scroll'
                                >Learn More</a>
                            </div>
                        </Card>
                        <Card>
                            <div className='col-sm-6 col-md-4 col-lg-4'>
                                <Card.Img variant="top" src="holder.js/100px160" />
                                <Card.Body>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                        This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This card has even longer content than the first to
                                        show that equal height action.
                                    </Card.Text>
                                </Card.Body>
                                <a
                                    href='https://www.instagram.com/p/CWdeNx3Af6j/' target='_blank' rel='noreferrer'
                                    className='btn btn-custom btn-lg page-scroll'
                                >Learn More</a>
                            </div>
                        </Card>
                    </CardGroup>

                    {/*<div className='col-xs-6 col-md-3 col-lg-4'>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant='top' src='holder.js/100px180' />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant='primary'>Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    </div>
                    <div className='col-xs-6 col-md-3 col-lg-4'>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant='top' src='holder.js/100px180' />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant='primary'>Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    </div>
                    <div className='col-xs-6 col-md-3 col-lg-4'>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant='top' src='holder.js/100px180' />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant='primary'>Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </div>*/}
                </div>
            </div>

        </div>
    );
};
