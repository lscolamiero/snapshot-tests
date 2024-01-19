import Card from 'react-bootstrap/Card';
import githubimg from '../githubimg.jpeg'

function GithubCard() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={githubimg} />
        <Card.Body>
          <Card.Title>lscolamiero</Card.Title>
          <Card.Text>
            We are young developers with a great future.
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
  
  export default GithubCard;