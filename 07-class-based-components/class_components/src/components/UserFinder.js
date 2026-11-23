import { Fragment, Component } from 'react';
import Users from './Users';
import classes from './UserFinder.module.css';
import UsersContext from '../store/users-context';
import { ErrorBoundary } from './ErrorBoundary';

class UserFinder extends Component {
  static contextType = UsersContext;

  constructor() {
    super();
    this.state = {
      filteredUsers: [],
      searchTerm: '',
    };
  }

    componentDidUpdate() {
      try {
        // dsaaaaaaaaa
      } catch (err){
        if(this.props.users.lenght === 0 ) {
            throw new Error("No users provided!")
        }     
      }
    
    }


  componentDidMount() {
    this.setState({ filteredUsers: this.context.users });
  }

  // eslint-disable-next-line no-dupe-class-members
  componentDidUpdate(_prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      const searchTerm = this.state.searchTerm.toLowerCase();
      this.setState({
        filteredUsers: this.context.users.filter((user) =>
          user.name.toLowerCase().includes(searchTerm)
        ),
      });
    }
  }

  
   
  searchChangeHandler(event) {
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    return (
      <Fragment>
        <div className={classes.finder}>
          <input type='search' onChange={this.searchChangeHandler.bind(this)} />
        </div>
        <ErrorBoundary>
       <Users users={this.state.filteredUsers} />
        </ErrorBoundary>  
      </Fragment>
    );
  }
}

export default UserFinder;
