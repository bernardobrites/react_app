import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getList } from "./billingCyclesActions";

class BillingCycleList extends Component {
  componentWillMount() {
    this.props.getList();
  }
  renderRows() {
    const list = this.props.list || [];
    return list.map((bc) => (
      <tr key={bc._id}>
        <td>{bc.name}</td>
        <td>{bc.month}</td>
        <td>{bc.year}</td>
      </tr>
    ));
  }
  render() {
    console.log(this.props.list); // não consegue chamar o array com os objetos
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Mês</th>
              <th>Ano</th>
            </tr>
          </thead>
          <tbody>{this.renderRows()}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ list: state.billingCycle.list });
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ getList }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList);
