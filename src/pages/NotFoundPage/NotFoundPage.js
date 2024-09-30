import { useEffect } from 'react';
import notFound from './images/NoN.png'


function NotFoundPage(){

    useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

    return(
        <>
            <img  src={notFound} alt='not_found_page_image' />
        </>
    )
}

export default NotFoundPage