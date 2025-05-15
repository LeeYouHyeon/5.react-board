import Table from 'react-bootstrap/Table';
import { boardList } from '../data/data';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export default function BoardList() {
  return (
    <div className="boardList">
      <h2>Board List Page</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Writer</th>
            <th>Reg_Date</th>
          </tr>
        </thead>
        <tbody>
          {
            boardList.map(article =>
              <tr key={article.id}>
                <td>{article.id}</td>
                <td>
                  <Link to={`/view/${article.id}`}>{article.title}</Link>
                </td>
                <td>{article.writer}</td>
                <td>{article.reg_date}</td>
              </tr>)
          }
        </tbody>
      </Table>

      {/* 글쓰기 버튼 추가 */}
      <Link to="/write"><Button variant="primary">글쓰기</Button></Link>
    </div>
  );
};