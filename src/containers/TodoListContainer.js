import { connect } from 'react-redux';
import { toggleTodo, removeTodo } from './../actions';
import TodoList from './../components/TodoList';

const mapStateToProps = state => ({ todos: state.todos });

const mapDispatchToProps = dispatch => ({
  toggleTodo: (id) => {
    dispatch(toggleTodo(id));
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
