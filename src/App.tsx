import { useState } from "react";
import {
  Select,
  Form,
  Input,
  Layout,
  Padding,
  Grid,
  Card,
} from "atomic-design-system-react/lib/src";
import "atomic-design-system-scss/lib/src/global.css";
import { Spacing } from "atomic-design-system-foundation/lib/src";

const options = [
  {
    label: "High",
    value: "High",
  },
  {
    label: "Medium",
    value: "Medium",
  },
  {
    label: "Low",
    value: "Low",
  },
];

export type CardType = {
  label?: string;
  priority?: string;
  id: string | number;
};

export interface PrioritySelectOption {
  label: string;
  value: string;
}
const App = () => {
  const [cards, setCards] = useState<CardType[]>([]);
  const [todoLabel, setTodoLabel] = useState<string>("");
  const [priority, setPriority] = useState<string>("");

  const handleTodoChange = (todo: string) => {
    setTodoLabel(todo);
  };

  const handlePrioritySelected = (option: PrioritySelectOption) => {
    setPriority(option.label);
  };

  const handleAddTodo = () => {
    if (!todoLabel || !priority) return;

    const newTodo: CardType = {
      label: todoLabel,
      id: Date.now(),
      priority,
    };
    setCards([...cards, newTodo]);
  };

  return (
    <Layout label="Todo App With Atomic Design">
      <Padding bottom space={Spacing.sm}>
        <Form label="Add Todo" onSubmit={handleAddTodo}>
          <Padding bottom space={Spacing.sm}>
            <Input value={todoLabel} onHandleChange={handleTodoChange} />
          </Padding>
          <Padding bottom space={Spacing.sm}>
            <Select
              options={options}
              onOptionSelected={handlePrioritySelected}
            />
          </Padding>
        </Form>
      </Padding>
      <Grid>
        {cards.map((card, index) => {
          const { id, label, priority } = card;
          return (
            <Card
              key={card.id}
              index={index}
              label={label}
              id={id}
              description={"Priority:" + priority}
              height={100}
              width={200}
              withCheckbox
            />
          );
        })}
      </Grid>
    </Layout>
  );
};

export default App;
