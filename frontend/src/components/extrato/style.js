const styles = {
  card: {
    background: '#ffffff',
    border: '1px solid #e5e7eb',
    borderRadius: '12px',
    padding: '16px',
    marginBottom: '12px',
    boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
    transition: '0.2s ease',
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '12px',
  },

  id: {
    fontWeight: 'bold',
    color: '#111827',
  },

  type: {
    padding: '4px 10px',
    borderRadius: '999px',
    fontSize: '12px',
    textTransform: 'uppercase',
    fontWeight: 600,
    background: '#e5e7eb',
    color: '#111827',
  },

  typePix: {
    background: '#dcfce7',
    color: '#166534',
  },

  body: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },

  row: {
    display: 'flex',
    justifyContent: 'space-between',
  },

  label: {
    color: '#6b7280',
    fontSize: '13px',
  },

  value: {
    fontWeight: 500,
    color: '#111827',
  },
}

export default function Transfer({ transfer }) {
  const typeStyle =
    transfer.tipo === 'pix'
      ? { ...styles.type, ...styles.typePix }
      : styles.type

  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <span style={styles.id}>#{transfer.id}</span>
        <span style={typeStyle}>{transfer.tipo}</span>
      </div>

      <div style={styles.body}>
        <div style={styles.row}>
          <span style={styles.label}>Valor:</span>
          <span style={styles.value}>R$ {transfer.valor}</span>
        </div>

        <div style={styles.row}>
          <span style={styles.label}>Criado em:</span>
          <span style={styles.value}>{transfer.created_at}</span>
        </div>

        <div style={styles.row}>
          <span style={styles.label}>Atualizado em:</span>
          <span style={styles.value}>{transfer.updated_at}</span>
        </div>
      </div>
    </div>
  )
}