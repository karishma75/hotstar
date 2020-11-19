import React, { Component,Fragment } from "react";
import { Route, Switch,withRouter} from "react-router-dom";
import firebase from "./firebase";
import {ToastContainer} from "react-toastify";
 


import Login from "./HotstarComponent/AuthComponent/Login";
import Register from "./HotstarComponent/AuthComponent/Register";
import HeaderComponent from "./HotstarComponent/HeaderComponent/Header";
import PasswordReset from "./HotstarComponent/AuthComponent/PaswordReset";
import AddMovieForm from "./HotstarComponent/HotstarAdmin/AddMovieForm";
import ListMovie from "./HotstarComponent/HotstarAdmin/ListMovie";
import ListMovies from "./HotstarComponent/HotstarAdmin/ListMovies";
import PhoneAuth from "./HotstarComponent/AuthComponent/PhoneAuth";
import RefExample from "./RefComponent/RefExampleComponent";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { userData: "" };
  }
  
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      // if (user === null) {
      //   console.log("no user");
      // }
      if (user) {
        this.setState({ userData: user });
        this.props.history.push("/list-movies");
      } else {
        this.setState({ userData: "" });
        this.props.history.push("/login");
      }
    });
  }
  async componentDidMount() {
    await firebase.auth().onAuthStateChanged((user) => {
      if (user === null) {
        console.log("no user");
      }
      if (user) {
        this.setState({ userData: user });
        // this.props.history.push("/");
      } else {
        this.setState({ userData: "" });
        this.props.history.push("/login");
      }
    });
  }
  render() {
    
    return (
      <Fragment>
        <header>
          <HeaderComponent user={this.state.userData} />
        </header>
        <main>
          <ToastContainer />
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/password-reset" component={PasswordReset} />
             <Route path="/phone-auth" component={PhoneAuth}/>
              {this.state.userData ? (
              <Fragment>
                 <Route
                  path="/upload-movies"
                  exact
                  component={() => <AddMovieForm user={this.state.userData} />}
                />
                <Route
                  path="/list-movies"
                  exact
                  component={() => <ListMovies user={this.state.userData} />}
                />

                <Route
                  path="/list-movie/:name/:id"
                  exact
                  component={() => <ListMovie user={this.state.userData} />}
                />
                

              </Fragment>
            ) : null}
          </Switch>
        </main>
      </Fragment>
    );
  }
}
export default withRouter(App);
