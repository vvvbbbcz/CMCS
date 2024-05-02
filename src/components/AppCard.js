export default function AppCard({children, id, alias, official, download}) {
  const aliasCode = alias === undefined ? '' : <span style={{color: 'gray', marginLeft: '0.5rem'}}>{alias}</span>;
  return (
    <div style={{
        borderRadius: '1rem',
        border: 'solid gray',
        margin: '1rem 0',
        padding: '0.8rem',
      }}>
      <h3>{children}{aliasCode}</h3>
      <p>官网：<a href={official} target="_blank">{official}</a></p>
      <p style={{
        margin: '0'
      }}>下载页面：<a href={download} target="_blank">{download}</a></p>
    </div>
  );
}
