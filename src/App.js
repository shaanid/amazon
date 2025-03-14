import logo from './logo.svg';
import './App.css';

function App() {
  const name = 'Amazon'  //props

  const message = () => {
    return 'welcome to AMAZON' //its a function method
  }

  return (
    //react fragment
    <>
      <table>
        <Column />
        <Row />
      </table>
    </>
  );

  function Column() {
    return (
      <>
        <tr>
          <th>Name</th>
          <th>Address</th>
        </tr>
      </>
    )
  }

  function Row() {
    return (
      <>
        <tr>
          <td>Shanid</td>
          <td>Pattambi</td>
        </tr>
      </>
    )
  }
}

export default App;
