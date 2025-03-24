import './App.css';
import School from './components/School';
import ClickCounter from './components/ClickCounter';
import TextInput from './components/TextInput';
import TodoList from './components/TodoList';
import Effect from './components/Effect';
import Users from './components/Users';
import UsersAxios from './components/UsersAxios';

function App() {
    return (
        <>
            <UsersAxios />
{/*             <Users />
 */}            {/* <Effect/>
    <TodoList/>
    <TextInput/>
    <ClickCounter/>
    <School/> */}
        </>
    );
}

export default App;
