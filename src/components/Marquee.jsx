const items = ['Landing Pages', 'Dashboards', 'E-Commerce', 'Web3 dApps', 'Company Profiles', 'Responsive Design']

export default function Marquee() {
  const row = [...items, ...items]
  return (
    <div className="marquee">
      <div className="marquee-track">
        <span>
          {row.map((item, i) => (
            <span key={i}>
              {item} <b>◆</b>{' '}
            </span>
          ))}
        </span>
      </div>
    </div>
  )
}
