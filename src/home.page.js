import { Button} from 'antd';
import { useModalContext } from './modal.context';

function Home(){
    const { openModal } = useModalContext();

    const showModal = () => openModal({message: 'Pior time do mundo Galo!'});

    return(
        <>
            <Button onClick={showModal}>Open Modal</Button>
        </>
    );
}

export default Home;