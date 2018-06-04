import { shape, number, string } from "prop-types";

export const transactionType = shape({
  id: number.isRequired,
  account: shape({
    id: number.isRequired,
    name: string.isRequired,
    initialBalance: string.isRequired,
    currentBalance: string
  }).isRequired,
  date: string.isRequired,
  description: string.isRequired,
  category: shape({
    id: number.isRequired,
    name: string.isRequired,
    color: string.isRequired
  }).isRequired,
  value: string.isRequired,
  transactionType: string.isRequired
});

export const categoryType = shape({
  id: number.isRequired,
  name: string.isRequired,
  color: string.isRequired
});

export const accountType = shape({
  id: number.isRequired,
  name: string.isRequired,
  initialBalance: string.isRequired,
  currentBalance: string
});
