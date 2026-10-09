import { profile, receipt } from "../data/content";
import { useSway } from "../hooks/useSway";
import "./Receipt.css";

const Rows = ({ rows }) => (
  <dl className="receipt__rows">
    {rows.map(({ label, value }) => (
      <div key={label} className="receipt__row">
        <dt>{label}</dt>
        <dd>{value}</dd>
      </div>
    ))}
  </dl>
);

const Receipt = () => {
  const swayRef = useSway();

  return (
    <aside className="printer" aria-label="Summary">
      <div className="printer__slot" aria-hidden="true" />
      <div className="printer__output">
        <div className="receipt" ref={swayRef}>
          <p className="receipt__head">
            <strong>{profile.name}</strong>
            <br />
            {profile.role}
            <br />
            {profile.location}
          </p>

          <Rows rows={receipt.roles} />
          <Rows rows={receipt.items} />

          <div className="receipt__row receipt__total">
            <span>Total</span>
            <span>{receipt.total}</span>
          </div>

          <p className="receipt__thanks">{receipt.thanks}</p>

          <div className="receipt__barcode" aria-hidden="true" />
          <a className="receipt__email" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Receipt;
