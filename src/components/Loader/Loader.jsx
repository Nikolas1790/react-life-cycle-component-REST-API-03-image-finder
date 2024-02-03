import {Oval} from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.style';

export const Loader = () => {
    return(
        <LoaderWrapper>
            <Oval
                height={40}
                width={40}
                color="#404040"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel='oval-loading'
                secondaryColor="#393939"
                strokeWidth={2}
                strokeWidthSecondary={2}
            />
        </LoaderWrapper>
    )
}