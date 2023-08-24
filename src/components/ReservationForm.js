import React, { useState } from 'react';

function ReservationForm({ onAddReservation }) {
  const [formData, setFormData] = useState({
    nome: '',
    sobrenome: '',
    telefone: '',
    tipoQuarto: '',
    quantidadePessoas: '',
    dataCheckIn: '',
    dataCheckOut: '',
    comGarantia: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddReservation(formData);
    setFormData({
      nome: '',
      sobrenome: '',
      telefone: '',
      tipoQuarto: '',
      quantidadePessoas: '',
      dataCheckIn: '',
      dataCheckOut: '',
      comGarantia: false
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome"
        value={formData.nome}
        onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
      />
      <input
        type="text"
        placeholder="Sobrenome"
        value={formData.sobrenome}
        onChange={(e) => setFormData({ ...formData, sobrenome: e.target.value })}
      />
      <input
        type="tel"
        placeholder="Telefone"
        value={formData.telefone}
        onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
      />
      <input
        type="text"
        placeholder="Tipo de Quarto"
        value={formData.tipoQuarto}
        onChange={(e) => setFormData({ ...formData, tipoQuarto: e.target.value })}
      />
      <input
        type="number"
        placeholder="Quantidade de Pessoas"
        value={formData.quantidadePessoas}
        onChange={(e) => setFormData({ ...formData, quantidadePessoas: e.target.value })}
      />
      <input
        type="date"
        placeholder="Data Check-in"
        value={formData.dataCheckIn}
        onChange={(e) => setFormData({ ...formData, dataCheckIn: e.target.value })}
      />
      <input
        type="date"
        placeholder="Data Check-out"
        value={formData.dataCheckOut}
        onChange={(e) => setFormData({ ...formData, dataCheckOut: e.target.value })}
      />
      <label>
        Com Garantia:
        <input
          type="checkbox"
          checked={formData.comGarantia}
          onChange={(e) => setFormData({ ...formData, comGarantia: e.target.checked })}
        />
      </label>
      <button type="submit">Adicionar Reserva</button>
    </form>
  );
}

export default ReservationForm;