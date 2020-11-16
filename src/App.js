import React, { useState } from "react";
import "./styles.css";

const Accordion = ({ title, rules, open = false }) => {
  const [show, setShow] = useState(open);
  const toggleShow = () => setShow((show) => !show);
  return (
    <div className="ac">
      <button className="ac-title" onClick={toggleShow}>
        {title}
        <span>{show ? "-" : "+"}</span>
      </button>
      {show && (
        <div className="ac-content">
          <ul>
            {rules.map((rule, index) => (
              <li key={index}>{rule}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const rules = {
  Addition: [
    "If either operand is NaN, the result is NaN.",
    "If Infinity is added to Infinity, the result is Infinity.",
    "If –Infinity is added to –Infinity, the result is –Infinity.",
    "If Infinity is added to –Infinity, the result is NaN.",
    "If +0 is added to +0, the result is +0.",
    "If –0 is added to +0, the result is +0.",
    "If –0 is added to –0, the result is –0."
  ],
  Substraction: [
    "If the two operands are numbers, perform arithmetic subtract and return the result.",
    "If either operand is NaN, the result is NaN.",
    "If Infinity is subtracted from Infinity, the result is NaN.",
    "If –Infinity is subtracted from –Infinity, the result is NaN.",
    "If –Infinity is subtracted from Infinity, the result is Infinity.",
    "If Infinity is subtracted from –Infinity, the result is –Infinity.",
    "If +0 is subtracted from +0, the result is +0.",
    "If –0 is subtracted from +0, the result is –0.",
    "If –0 is subtracted from –0, the result is +0."
  ],
  Division: [
    `
    positives or two negatives equal a positive, whereas operands with different signs yield a
    If the operands are numbers, regular arithmetic division is performed, meaning that two negative. If the result can’t be represented in ECMAScript, it returns either Infinity or
    –Infinity.`,
    "If either operand is NaN, the result is NaN.",
    "If Infinity is divided by Infinity, the result is NaN.",
    "If zero is divided by zero, the result is NaN.",
    "If a nonzero finite number is divided by zero, the result is either Infinity or –Infinity, depending on the sign of the first operand.",
    "If infinity is divided by a number the result is either Infinity or -Infinity depending on the sign of the second operand",
    "If either operand isnt a number it is converted to a number behind the scenes using Number() and then the other rules are applied"
  ],
  Multiplication: [
    `If the operand are numbers, regular arithmetic multiplication is performed, meaning that two positives or two negatives equals a positive whereas operand with different signs yield a negative. 
    if the result cannot be represented by ECMAScript, either Infinity of -Infinity is returned`,
    "If either operand is NaN, the result is NaN.",
    "If Infinity is multiplied by 0, the result is NaN.",
    "If Infinity is multiplied by Infinity, the result is Infinity.",
    "If either operand isnt a number it is converted to a number behind the scenes and the other rules rules are applied"
  ]
};

export default function App() {
  return (
    <div className="App">
      <header>
        <h1>Javascript Common Operators Gotchas</h1>
        <p>Extracted from Professional Javascript for Web Developers</p>
      </header>

      <div>
        {Object.keys(rules).map((rule, index) => (
          <Accordion key={index} title={rule} rules={rules[rule]} />
        ))}
      </div>
    </div>
  );
}
