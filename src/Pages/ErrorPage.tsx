import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error: any = useRouteError();
    console.log(error);

    return ( 
        <div className="container flex items-center justify-center flex-col">
            <h1 className="text-bold text-4xl">Oops</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
     );
}
 
export default ErrorPage;