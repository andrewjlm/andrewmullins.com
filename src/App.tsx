import '../srcl-global.scss';
import './App.scss';
import Card from '@components/Card';
import ActionButton from '@components/ActionButton';
import ListItem from '@components/ListItem';
import packageJson from '../package.json';

function App() {
  return (
    <div className="container">
      <div className="content">

        <Card title="About">
          <p>Data scientist and strategic practitioner focused on data and AI. I enjoy applying emerging technologies to real-world applications. When not working, I'm cycling, diving deep into music, cooking, or watching the NBA.</p>
        </Card>

        <Card title="Work">
          <Card title="Current">
            <div className="job-section">
              <div className="job-item">
                <strong>Solution Architect @ Databricks</strong>
                <ul>
                  <li>Work with strategic enterprise accounts to solve complex problems using Databricks. Focus on leading-edge applications like Agentic AI for real business cases.</li>
                </ul>
              </div>
            </div>
          </Card>
          <Card title="Previous">
            <div className="job-section">
              <div className="job-item">
                <strong>Director of Data Science @ Valtech</strong>
                <ul>
                  <li>Worked with major consumer brands like GM and Starbucks on diverse projects: cloud transformation, leading-class personalized marketing platforms, and frameworks for embedding experimentation into organizations.</li>
                </ul>
              </div>
              <div className="job-item">
                <strong>Masters Student, Statistics @ University of Georgia</strong>
                <ul>
                  <li>Advanced studies in statistical methods, experimental design, and data analysis with focus on applied research.</li>
                </ul>
              </div>
              <div className="job-item">
                <strong>Data Fellow @ Achievement First</strong>
                <ul>
                  <li>Data analytics and insights for educational outcomes, supporting evidence-based decision making across charter school network.</li>
                </ul>
              </div>
            </div>
          </Card>
        </Card>

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
