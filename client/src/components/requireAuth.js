import React, { Component } from 'react';
import { connect } from 'react-redux';

export default (ChildComponent) => {
    class ComposedComonent extends Component {
        //component just got render
        componentDidMount() {
            this.shouldNavigateAway();
        }

        //component just got updated
        componentDidUpdate() {
            this.shouldNavigateAway();
        }

        shouldNavigateAway() {
            if (!this.props.auth) {
                //console.log('need to leave the page!')
                this.props.history.push('/');
            }
        }
        render() {
            //Pass all props from parent hierarchy to child
            return <ChildComponent {...this.props}/>;
        }
    }

    function mapStateToProps(state) {
        return { auth: state.auth.authenticated }
    }

    return connect(mapStateToProps)(ComposedComonent);
};