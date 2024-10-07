import { useEffect } from 'react';
import notFound from './images/error-404.jpg'
import './notpage.scss'

function NotFoundPage(){

    useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

    return(
        <>
            <img className='notPageImg'src={notFound} alt='not_found_page_image' />
        </>
    )
}

export default NotFoundPage