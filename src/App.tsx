import '../srcl-global.scss';
import './App.scss';
import Card from '@components/Card';
import ActionButton from '@components/ActionButton';

function App() {
  return (
    <div className="container">
      <div className="content">
        <div className="title">
          Coming soon!
        </div>

        <Card title="Connect">
          <div className="connect-links">
            <a href="mailto:me@andrewmullins.com">
              <ActionButton>✉ Email</ActionButton>
            </a>
            <a href="https://www.linkedin.com/in/andrewjlmullins">
              <ActionButton>⚡ LinkedIn</ActionButton>
            </a>
            <a href="https://github.com/andrewjlm">
              <ActionButton>⚙ GitHub</ActionButton>
            </a>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default App;