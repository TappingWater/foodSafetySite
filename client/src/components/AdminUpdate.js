import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getFood, addItem, deleteItem, updateItem } from "../actions/adminActions";
import './css/AdminUpdatePage.css';
import classnames from "classnames";

class AdminUpdate extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onCancel = this.onCancel.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.addReference = this.addReference.bind(this);
        this.remReference = this.remReference.bind(this);
        this.refChange = this.refChange.bind(this);
        this.props.getFood();
        this.state = {
            admin: {},
            name: "",
            foodType: "",
            references: [],
            errors: {}
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.admin !== prevState.admin) {
            return {
                admin: nextProps.admin
            };
        }
        if (nextProps.errors !== prevState.errors) {
            return {
                errors: nextProps.errors
            };
        }
        return null;
    }

    //Adding an empty input field for adding new food reference links
    addReference() {
        this.setState({ references: [...this.state.references, ""] });
    }

    //Removing an input field from reference links
    remReference(index) {
        this.state.references.splice(index, 1)
        this.setState({ references: this.state.references });
    }

    //Updating the state for a new food item in the form
    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
        this.setState({ errors: {} });
    }

    //Updating the changes for the reference input fields in form
    refChange(e, index) {
        this.state.references[index] = e.target.value;
        this.setState({ references: this.state.references });
    }

    //Submitting a new food item to the database
    onSubmit = e => {
        e.preventDefault();
        const newFood = {
            name: this.state.name,
            foodType: this.state.foodType,
            references: this.state.references,
        };
        console.log("blah" + newFood.name);
        this.props.addItem(newFood, this.props.history);
        window.scrollTo(0, 0);
        this.setState({
            errors: {}
        });
        this.props.history.push("/adminUpdate");
    }

    //Cancel the creation of new food item, clear the form fields
    onCancel() {
        window.scrollTo(0, 0);
        this.props.history.push("/adminUpdate");
    }

    //Delete an item from the admin table and from the database
    onDelete(foodItem) {
        this.props.deleteItem(foodItem, this.props.history);
        window.scrollTo(0, 0);
        this.setState({
            errors: {}
        });
        this.props.history.push("/adminUpdate");
    }

    //Gettin the food from the foods table in DB and displaying for admin CRUD
    createTable = () => {
        let table = [];
        var listLength = this.state.admin.foodList.length;
        var foodList = this.state.admin.foodList;
        for (let i = 0; i < listLength; i++) {
            let row = [];
            var item = foodList[i];
            row.push(<td>{item.name}</td>);
            row.push(<td>{item.foodType}</td>);
            var links = item.references;
            let ref = [];
            for (let j = 0; j < links.length; j++) {
                ref.push(<ul><a target="_blank" href={links[j]}>{links[j]}</a></ul>);
            }
            row.push(<td>{ref}</td>)
            row.push(<td className="button"><button className="deleteButton"
                onClick={() => this.onDelete(item)}>Delete</button></td>);
            //create the parent and add the children
            table.push(<tr>{row}</tr>);
        }
        return table;
    }

    //UI for the Admin Update page
    render() {
        const { errors } = this.state;
        return (
            <form>
                <div className="adminContainer">
                    <div className="adminTable">
                        <table>
                            <thead>
                                <tr>
                                    <th className="foodName">Food Name</th>
                                    <th className="foodType">Food Type</th>
                                    <th className="refLinks">Reference Links</th>
                                    <th className="deleteEntry">Delete</th>
                                </tr>
                            </thead>
                            {this.createTable()}
                        </table>
                    </div>
                    <br />
                    <form onSubmit={this.onSubmit}>
                        <div className="addItem">
                            <h3>Create New Food Item</h3>
                            <hr />
                            <div>
                                <label htmlFor="name"><b>Food Name</b></label>
                                <input
                                    type="text"
                                    placeholder="Enter Food Name"
                                    value={this.state.name}
                                    onChange={this.onChange}
                                    id="name"
                                    name="name"
                                    required
                                    className={classnames("", { invalid: errors.name })}
                                />
                                <div className="red-text">
                                    {errors.name}
                                </div>
                            </div>

                            <div>
                                <label htmlFor="foodType"><b>Food Type</b></label>
                                <input
                                    type="text"
                                    placeholder="Food Type (i.e. Raw Agricultural Comodity)"
                                    value={this.state.foodType}
                                    onChange={this.onChange}
                                    id="foodType"
                                    name="foodType"
                                    required
                                    className={classnames("", { invalid: errors.foodType })}
                                />
                                <div className="red-text">
                                    {errors.foodType}
                                </div>
                            </div>

                            <div>
                                <label htmlFor="references"><b>Food's Reference Links</b></label>
                                {
                                    this.state.references.map((reference, index) => {
                                        return (
                                            <div key={index+1}>
                                                <input
                                                    type="text"
                                                    placeholder="Food's Reference Link (Limit One)"
                                                    value={reference}
                                                    onChange={(e) => this.refChange(e, index)}
                                                    required
                                                    id="references"
                                                    name="references"
                                                    className={classnames("", { invalid: errors.references })}
                                                />
                                                <button onClick={() => this.remReference(index)} className="remRef">Remove Reference Link</button>
                                            </div>
                                        )
                                    })
                                }
                                <br/>
                                <button type="button" onClick={() => this.addReference()} className="addRef">Add Reference Link</button>
                                <div className="red-text">
                                    {errors.references}
                                </div>
                            </div>

                            <div className="clearfix">
                                <button type="button" onClick={this.onCancel} className="cancelbtn">Cancel</button>
                                <button type="submit" className="signupbtn">Submit</button>
                            </div>
                        </div>
                    </form>
                </ div>
            </form>
        )
    }

}

AdminUpdate.propTypes = {
    getFood: PropTypes.func.isRequired,
    updateItem: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired,
    addItem: PropTypes.func.isRequired,
    admin: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    admin: state.admin,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { getFood, updateItem, deleteItem, addItem }
)(withRouter(AdminUpdate));
