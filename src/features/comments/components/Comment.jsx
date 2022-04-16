import { Button, ButtonToolbar, Panel } from 'rsuite';

const Comment = ({ comment }) => {
  return (
    <Panel header={comment.name} bordered style={{ margin: 20 }}>
      {comment.body}

      <ButtonToolbar style={{ marginTop: 10 }}>
        <Button size="lg" color="red" appearance="ghost">
          Delete
        </Button>
        <Button size="lg" color="cyan" appearance="ghost">
          Patch
        </Button>
      </ButtonToolbar>
    </Panel>
  );
};

export default Comment;
