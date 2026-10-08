import { profile, receipt } from "../data/content";
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

const Receipt = () => (
  <aside className="receipt-wrap" aria-label="Summary">
    <div className="receipt">
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

      <div className="receipt__barcode" aria-hidden="true" />
      <a className="receipt__email" href={`mailto:${profile.email}`}>
        {profile.email}
      </a>
    </div>
  </aside>
);

export default Receipt;
