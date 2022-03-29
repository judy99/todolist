import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Modal} from "react-bootstrap";

export const ModalConfirmation = ({handleAction, showModal, setShowModal, id, title}) => {

    const handleClose = () => {
        setShowModal(false)
    }
    const handleConfirm = () => {
        handleAction(id)
        setShowModal(false)
    }
    return (
        <>
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Remove Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>{`Are you sure you want to delete the task ${title}?`}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        No
                    </Button>
                    <Button variant="primary" onClick={handleConfirm}>
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}