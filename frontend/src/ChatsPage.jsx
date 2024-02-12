import PropTypes from 'prop-types';
import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
    <div style={{height: '100vh'}}>
      <PrettyChatWindow
        projectId='754bdb2a-7d38-4824-aea7-6c34f14864e9'
        username={props.user.username}
        secret={props.user.secret}
        style={{height: '100%'}}
      />
    </div>
  );
};

ChatsPage.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    secret: PropTypes.string.isRequired
  }).isRequired
};

export default ChatsPage;
