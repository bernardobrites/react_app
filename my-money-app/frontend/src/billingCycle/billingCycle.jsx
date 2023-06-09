import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import ContentHeader from "../common/template/contentHeader";
import Content from "../common/template/content";
import Tabs from "../common/tab/tabs";
import TabsHeader from "../common/tab/tabsHeader";
import TabsContent from "../common/tab/tabsContent";
import TabHeader from "../common/tab/tabHeader";
import TabContent from "../common/tab/tabContent";
import { selectTab, showTabs } from "../common/tab/tabAction";
import List from "./billingCycleList";
import Form from "./billingCycleForm";
import { create } from "./billingCyclesActions";
class BillingCycle extends Component {
  componentWillMount() {
    this.props.selectTab("tabList");
    this.props.showTabs("tabList", "tabCreate");
  }

  render() {
    return (
      <div>
        <ContentHeader
          title="Ciclos de Pagamento"
          small="Cadastro"
        ></ContentHeader>
        <Content>
          <Tabs>
            <TabsHeader>
              <TabHeader
                label="Listar"
                icons="bars"
                target="tabList"
              ></TabHeader>
              <TabHeader
                label="Incluir"
                icons="plus"
                target="tabCreate"
              ></TabHeader>
              <TabHeader
                label="Alterar"
                icons="pencil"
                target="tabUpdate"
              ></TabHeader>
              <TabHeader
                label="Excluir"
                icons="trash-0"
                target="tabDelete"
              ></TabHeader>
            </TabsHeader>
            <TabsContent>
              <TabContent id="tabList">
                <List></List>
              </TabContent>
              <TabContent id="tabCreate">
                <Form onSubmit={this.props.create}></Form>
              </TabContent>
              <TabContent id="tabUpdate">
                <h1>Alterar</h1>
              </TabContent>
              <TabContent id="tabDelete">
                <h1>Excluir</h1>
              </TabContent>
            </TabsContent>
          </Tabs>
        </Content>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ selectTab, showTabs, create }, dispatch);
export default connect(null, mapDispatchToProps)(BillingCycle);
