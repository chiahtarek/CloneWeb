import './style'

export default function Transfer({ transfer }) {
  return (
    <div className="transfer-card">
      <div className="transfer-header">
        <span className="transfer-id">#{transfer.id}</span>
        <span className={`transfer-type ${transfer.tipo}`}>
          {transfer.tipo}
        </span>
      </div>

      <div className="transfer-body">
        <div className="transfer-row">
          <span className="label">Valor:</span>
          <span className="value">R$ {transfer.valor}</span>
        </div>

        <div className="transfer-row">
          <span className="label">Criado em:</span>
          <span className="value">{transfer.created_at}</span>
        </div>

        <div className="transfer-row">
          <span className="label">Atualizado em:</span>
          <span className="value">{transfer.updated_at}</span>
        </div>
      </div>
    </div>
  )
}