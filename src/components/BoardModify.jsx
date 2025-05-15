import { Link, useParams } from "react-router-dom"
import { boardList } from "../data/data";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/esm/Button";

export default function BoardModify() {
  const { id } = useParams();
  const idx = boardList.findIndex(b => b.id === Number(id));
  const article = boardList[idx];

  return <div className="boardModify">
    <h2>Board Modify Page</h2>
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" value={article.title}/>
        <Form.Label>Writer</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" value={article.writer} readOnly/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label></Form.Label>
        <Form.Control as="textarea" rows={10} value={article.contents}/>
      </Form.Group>
    </Form>

    <div className="text-center">
      <Button variant="warning">수정</Button>
       <Link to={`/view/${article.id}`}><Button variant="primary">취소</Button></Link>
    </div>
  </div>
};