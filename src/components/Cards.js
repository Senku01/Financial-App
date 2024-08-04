import React from "react";
import { Card, Row } from "antd";
import CreateBudgetModal from "./Modals/CreateBudget";

function Cards({
  currentBalance,
  income,
  expenses,
  budget,
  showExpenseModal,
  showIncomeModal,
  showBudgetModal,
  cardStyle,
  reset,
}) {
  return (
    <Row
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "16px",
        justifyContent: "space-between",
      }}
    >
      <Card bordered={true} style={cardStyle}>
        <h2>Current Balance</h2>
        <p>₹{currentBalance}</p>
        <div class="btn btn-blue" style={{ margin: 0 }} onClick={reset}>
          Reset Balance
        </div>
      </Card>

      <Card bordered={true} style={cardStyle}>
        <h2>Total Income</h2>
        <p>₹{income}</p>
        <div
          class="btn btn-blue"
          style={{ margin: 0 }}
          onClick={showIncomeModal}
        >
          Add Income
        </div>
      </Card>

      <Card bordered={true} style={cardStyle}>
        <h2>Total Expenses</h2>
        <p>₹{expenses}</p>
        <div className="btn btn-blue" onClick={showExpenseModal}>
          Add Expense
        </div>
      </Card>
      <Card bordered={true} style={cardStyle}>
        <h2>Your Budget</h2>
        <p>₹{budget}</p>
        <div className="btn btn-blue" onClick={showBudgetModal}> 
          Create Budget
        </div>
      </Card>
    </Row>
  );
}

export default Cards;
