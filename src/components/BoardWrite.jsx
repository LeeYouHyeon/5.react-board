import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function BoardWrite() {
  return <div className="boardWrite board">
    <h2>Board Write Page</h2>
    {/* 제목 작성자 내용 */}
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="제목" />
        <Form.Label>Writer</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label></Form.Label>
        <Form.Control as="textarea" rows={10} />
      </Form.Group>
    </Form>

    <div className="text-center">
      <Button variant="success">등록</Button>
      <Button variant="warning">취소</Button>
    </div>
  </div>;
};