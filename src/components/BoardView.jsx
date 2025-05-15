import { Link, useParams } from "react-router-dom"
import { boardList } from "../data/data";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/esm/Button";

export default function BoardView() {
  const { id } = useParams();

  // id에 해당하는 배열의 번지의 객체를 뿌려주기
  // findIndex : 특정 조건을 만족하는 요소의 index 리턴
  const idx = boardList.findIndex(b => b.id === Number(id));
  const article = boardList[idx];

  if (idx === -1) return <div className="boardView">
    <h2>Board View page</h2>
    <p>게시글이 없습니다.</p>
  </div>

  return <div className="boardView board">
    <h2>Board View page</h2>
    <Card style={{ width: '800px', margin: '30px auto' }}>
      <Card.Body>
        <Card.Title
          style={{
            fontWeight: '700',
            marginBottom: '20px'
          }}>[{article.id}] {article.title}</Card.Title>
        <Card.Text style={{
          textAlign: "left"
        }}>{article.contents}</Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Text>
          Created on {article.reg_date.substring(0, 10)} by {article.writer}
        </Card.Text>
      </Card.Body>
      <Card.Body style={{
        display: 'flex',
        justifyContent: 'right'
      }}>
        <Link to={`/modify/${article.id}`}>
          <Button variant="warning" style={{
            marginRight: "10px"
          }}>수정</Button>
        </Link>
        <Button variant="danger">삭제</Button>
      </Card.Body>
    </Card>
    <Link to="/"><Button variant="primary">목록</Button></Link>
  </div >
};