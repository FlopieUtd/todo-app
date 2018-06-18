import { connect } from 'react-redux';
import { toggleTodo, updateTodo, toggleRemovalPrompt, removeTodo } from './../actions';
import TodoList from './../components/TodoList';

const mapStateToProps = state => ({ todos: state.todos });

const mapDispatchToProps = dispatch => ({
  toggleTodo: (id) => {
    dispatch(toggleTodo(id));
  },
  updateTodo: (text, id) => {
    dispatch(updateTodo(text, id));
  },
  toggleRemovalPrompt: (id) => {
    dispatch(toggleRemovalPrompt(id));
  },
  removeTodo: (id) => {
    dispatch(removeTodo(id));
  },
});

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);

export default TodoListContainer;
