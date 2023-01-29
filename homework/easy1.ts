// Задание первого уровня 1
// В функцию приходит массив состояний заказа и фильтруется
// Нужно заменить FIXME на тип который вычисляется на основе OrderState

// eslint-disable-next-line @typescript-eslint/no-explicit-any
// type FIXME = any;

const orderStates = [
  "initial",
  "inWork",
  "buyingSupplies",
  "producing",
  "fullfilled",
] as const;

type OrderState = typeof orderStates[number];

// solution
type UserOrderState = Array<Exclude<OrderState, "buyingSupplies" | "producing">>;

export const getUserOrderStates = (orderStates: OrderState[]): UserOrderState => {
  const filteredStates = [] as UserOrderState;
  orderStates.forEach((element) => {
    if (element !== "buyingSupplies" && element !== "producing") {
      filteredStates.push(element);
    }
  });
  return filteredStates;
};
