// A row of small cards where exactly one is selected: the selected card is highlighted and the
// rest are grayed. Keyboard- and screen-reader-friendly because each card is a real radio input.
//
//   <ChoiceCards
//     legend="Category names"
//     name="nameMode"
//     value={nameMode}
//     onChange={setNameMode}
//     options={[{ value: "exact", title: "Exact", hint: "Keep the names" }, …]}
//   />
type Option<T extends string> = { value: T; title: string; hint: string };

type Props<T extends string> = {
  legend: string;
  name: string;
  value: T;
  onChange: (value: T) => void;
  options: Option<T>[];
};

export default function ChoiceCards<T extends string>({ legend, name, value, onChange, options }: Props<T>) {
  return (
    <fieldset className="choice">
      <legend>{legend}</legend>
      <div className="choice-row">
        {options.map((o) => (
          <label key={o.value} className={`choice-card${o.value === value ? " selected" : ""}`}>
            <input type="radio" name={name} value={o.value} checked={o.value === value} onChange={() => onChange(o.value)} />
            <span className="choice-title">{o.title}</span>
            <span className="choice-hint">{o.hint}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}
