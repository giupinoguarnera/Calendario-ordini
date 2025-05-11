const OrderListModal = ({ orders, onClose }) => {
  if (!orders || orders.length === 0) return null;

  const handleOverlayClick = (e) => {
    if (e.target.id === "modal-overlay") onClose();
  };

  return (
    <div
      id="modal-overlay"
      role="dialog"
      aria-modal="true"
      onClick={handleOverlayClick}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div style={{
        backgroundColor: 'white',
        padding: '1.5rem',
        borderRadius: '0.5rem',
        position: 'relative',
        maxWidth: '600px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.3)'
      }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>
          Dettagli Ordini ({orders.length})
        </h2>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ textAlign: 'left', borderBottom: '1px solid #ccc' }}>Cliente</th>
              <th style={{ textAlign: 'left', borderBottom: '1px solid #ccc' }}>Quantità</th>
              <th style={{ textAlign: 'left', borderBottom: '1px solid #ccc' }}>Stato</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, idx) => (
              <tr key={idx}>
                <td>{order.cliente}</td>
                <td>{order.quantità}</td>
                <td>{order.stato}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '0.5rem',
            right: '0.5rem'
          }}
        >
          Chiudi
        </button>
      </div>
    </div>
  );
};

export default OrderListModal;

