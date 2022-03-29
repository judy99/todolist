import {ListGroup, Stack} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {ModalConfirmation} from "./Modal";

export const TodoListItem = ({id, status, title, index, length, handleDown, handleStatus, handleUp, handleRemove, showModal, setShowModal}) => {
    return (
        <ListGroup.Item key={id}>
            <Stack gap={3}>
                <Stack direction="horizontal" gap={3}>
                    <h4 style={status ? {textDecoration: 'line-through'} : {textDecoration: 'none'}}>{title}</h4>
                    <Button variant="primary" className='ms-auto'
                            onClick={() => handleStatus(id)}>{status ? 'undone' : 'done'}
                    </Button>
                    <Button variant="primary"
                            onClick={() => setShowModal(true)}>Remove
                    </Button>
                    {/* up | down buttons */}
                    <Button variant="primary" disabled={index === 0}
                            onClick={() => handleUp(id)}>Up
                    </Button>
                    <Button variant="primary" disabled={index === length - 1}
                            onClick={() => handleDown(id)}>Down
                    </Button>
                </Stack>
            </Stack>
            {showModal && <ModalConfirmation handleAction={handleRemove} setShowModal={setShowModal} showModal={showModal} id={id} title={title} />}
        </ListGroup.Item>
    )
}
