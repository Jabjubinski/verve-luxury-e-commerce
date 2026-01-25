import { useModal } from "@/hooks/use-modal-store";

const InititalModal = () => {
    const {onOpen, isOpen, onClose, type, data} = useModal();

    return ( 
        <div>
            Hello Modal
        </div>
     );
}
 
export default InititalModal;