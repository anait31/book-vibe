import book from '../../assets/books.jpg'
const Hero = () => {
    return (
        <div className="hero py-11">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img className='rounded-lg' src={book}/>
                <div className='space-y-6'>
                    <h1 className="text-5xl font-bold">Books to freshen up your bookshelf!</h1>
                    <button className="btn btn-primary">View The List</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;