import {Col, Form, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {useRef, useState} from "react";

export const TodoForm = ({addItem, updateItem}) => {
    const inputEl = useRef(null);
    return (
        <Form>
            <Row>
                <Col>
                    <Form.Control placeholder="Input task" onChange={updateItem} ref={inputEl}/>
                </Col>
                <Col>
                    <Button variant="primary" type="submit" onClick={(e) => {
                        addItem(e);
                        inputEl.current.value = ''
                    }}>
                        Add Item
                    </Button>
                </Col>
            </Row>
        </Form>
    )
}
