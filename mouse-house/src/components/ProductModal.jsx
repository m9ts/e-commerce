function ProductModal({ product, onClose }) {
  const dictionary = {
    // mouse
    dimensions: 'Dimensões',
    shape: 'Formato',
    grip: 'Pegada',
    weight: 'Peso',
    buttons: 'Botões',
    switches: 'Switches principais',
    sensor: 'Sensor',
    sensorType: 'Tipo de sensor',
    dpi: 'DPI',
    ips: 'IPS',
    acceleration: 'Aceleração',
    pollingRate: 'Frequência',
    battery: 'Bateria',

    // teclado
    type: 'Tipo',
    layout: 'Layout',
    material: 'Material',
    lighting: 'Iluminação',
    keycaps: 'Keycaps',
    connection: 'Tipo de conexão',
    antiGhosting: 'Anti-ghosting',
    cable: 'Cabo',
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          ×
        </button>

        <img
          src={product.image}
          alt={product.name}
          className="modal-image"
        />

        <h2>{product.name}</h2>

        <p>{product.description}</p>

        <strong className="modal-price">
          {product.price.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </strong>

        <div className="modal-specifications">
          <h3>Especificações</h3>

          <ul>
            {Object.entries(product.specifications).map(([key, value]) => (
              <li key={key}>
                <strong>{dictionary[key] || key}:</strong> {value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;