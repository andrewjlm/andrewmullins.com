import '../srcl-global.scss';
import './App.scss';
import Card from '@components/Card';
import ActionButton from '@components/ActionButton';
import packageJson from '../package.json';

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

        <div className="credit">
          Built with <a href="https://sacred.computer" target="_blank" rel="noopener noreferrer">SRCL</a> • v{packageJson.version}
        </div>
      </div>
    </div>
  );
}

export default App;