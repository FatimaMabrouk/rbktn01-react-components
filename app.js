// TODO


// class GroceryListItem extends React.Component {
// 	 constructor(props) {
//       super(props);
//       this.state = {done : false, hover: false}


//   }

//   onListClick(){
//   	this.setState({done :!this.state.done});
//   }
//   toggleHover() {
//   	this.setState({hover: !this.state.hover})
//   }
//   render(){
//   	  var style = {
//       textDecoration: this.state.done ? 'line-through' : 'none', 
//       color: this.state.done ?  'red' : 'blue' 
//     };
//     var style = {
//       textDecoration: this.state.hover ? 'line-through' : 'none', 
//       color: this.state.hover ?  'red' : 'blue' 
//     };
//   	return(
//   		<li style={style}  onMouseEnter={this.toggleHover.bind(this)}   >{this.props.list}</li>
//   		);
//   }

// };
//  var GroceryList =  (props) => (

// 		<ul>
// 			{props.list.map(ele => <GroceryListItem list = {ele} /> )}

// 	    </ul>
// 			);
// ReactDOM.render(<GroceryList list={["Class 1","class 2","class 3"]}/>,document.getElementById('app'))

// )


// var App = () => (
// 		  <div>

// 		  <h2> testing react </h2> 
// 		  <TodoList todos={['Learn React', 'Crush Recast.ly', 'Maybe sleep']} />

// 		  </div>
		
// )

// var TodoList = (props) => (
// 	<ul>
//         <li>{props.todos[0]} </li>
//         <li>{props.todos[1]} </li>
//         <li>{props.todos[2]} </li>
// 	 </ul>
// )
class  GroceryListItem extends React.Component {
	constructor(props) {
	super(props);

	this.state = {
		done: false,
		hover: false
	   }

  };
    onListItemClick(event) {
	    this.setState({
	    	done: !this.state.done,
	    	hover: !this.state.hover
	    });
	}
	onMouseEnterrs(event) {
		this.setState({ hover: !this.state.hover })
	}
	render() {
          var style = {
          	color: this.state.done ? 'red' : 'green',
          	fontSize: this.state.hover ? 70 : 40
          };
		
	 	 return (
	        
	       <li style={style} onMouseEnter={this.onMouseEnterrs.bind(this)} onClick={this.onListItemClick.bind(this)}>{this.props.list}</li>  
	     
    );
}
	}

var GroceryList = (props) => (
	
	    <ul>
			{props.lists.map(ele => <GroceryListItem list = {ele} /> )}

	    </ul>


)


// ReactDOM.render(<App />, document.getElementById("app"));

ReactDOM.render(<GroceryList lists={['efe',33,44,32]}/>, document.getElementById("app"));




