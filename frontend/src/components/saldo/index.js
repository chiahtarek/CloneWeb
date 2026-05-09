import styles from './style'

export default function Saldo({ saldo }) {
  return (
    <div style={styles.card}>
      <div style={styles.label}>Seu saldo disponível</div>

      <div style={styles.value}>
        R$ {Number(saldo).toFixed(2)}
      </div>

      <div style={styles.footer}>
        Atualizado em tempo real
      </div>
    </div>
  )
}