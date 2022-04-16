import { memo } from 'react';
import { Button, ButtonToolbar, Panel } from 'rsuite';

const Comment = ({ id,body,onDelete,onPatch }) => {
  return (
    <Panel header={id} bordered style={{ margin: 20 }}>
      {body}

      <ButtonToolbar style={{ marginTop: 10 }}>
        <Button size="lg" color="red" appearance="ghost" onClick={()=>onDelete(id).then((data)=>alert(`comment :${data.payload} deleted` )) }>
          Delete
        </Button>
        <Button size="lg" color="cyan" appearance="ghost" onClick={()=>onPatch(id,{body:'new Text'})}>
          Patch
        </Button>
      </ButtonToolbar>
    </Panel>
  );
};

export default memo(Comment);
