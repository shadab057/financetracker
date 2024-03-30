import mongoose from "mongoose";
import  { loadType } from "mongoose-currency";

const Schema = mongoose.Schema;
loadType(mongoose);

const daySchema = new Schema(
  {
    date: String,
    revenue: {
      type: mongoose.Types.Currency,
      currency: "USD",
      get: (v) => v / 100,
    },
    expenses: {
      type: mongoose.Types.Currency,
      currency: "USD",
      get: (v) => v / 100,
    },
  },
  { toJSON: { getters: true } }
);

const monthSchema = new Schema(
  {
    month: String,
    revenue: {
      type: mongoose.Types.Currency,
      currency: "USD",
      get: (v) => v / 100,
    },
    expenses: {
      type: mongoose.Types.Currency,
      currency: "USD",
      get: (v) => v / 100,
    },
    operationalExpenses: {
      type: mongoose.Types.Currency,
      currency: "USD",
      get: (v) => v / 100,
    },
    nonOperationalExpenses: {
      type: mongoose.Types.Currency,
      currency: "USD",
      get: (v) => v / 100,
    },
  },
  { toJSON: { getters: true } }
);
const expenseSchema = new Schema({
  amount: {
    type: mongoose.Types.Currency,
    currency: "USD",
    get: (v) => v / 100,
  }
});

const KPISchema = new Schema({
  totalProfit: {
    type: mongoose.Types.Currency,
    currency: "USD",
    get: (v) => v / 100,
  },
  totalRevenue: {
    type: mongoose.Types.Currency,
    currency: "USD",
    get: (v) => v / 100,
  },
  totalExpenses: {
    type: mongoose.Types.Currency,
    currency: "USD",
    get: (v) => v / 100,
  },
  expensesByCategory: {
    type: Schema.Types.Mixed,
    of: expenseSchema // Reference to the expenseSchema
  }
});

const KPI = mongoose.model("KPI", KPISchema);

export default KPI;