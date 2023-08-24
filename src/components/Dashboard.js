import React, { useState } from 'react';
import './Dashboard.css'; // Importe o arquivo de estilos
import ReservationForm from './ReservationForm';


function Dashboard() {

  const [reservations, setReservations] = useState([]);

  const handleAddReservation = (newReservation) => {
    setReservations([...reservations, newReservation]);
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-item availability">
        <h2>Disponibilidade</h2>
        {/* Aqui você pode exibir informações sobre a disponibilidade */}
      </div>
      <div className="dashboard-item dirty-rooms">
        <h2>Sujos</h2>
        {/* Aqui você pode exibir informações sobre quartos sujos */}
      </div>
      <div className="dashboard-item occupied-rooms">
        <h2>In house</h2>
        {/* Aqui você pode exibir informações sobre quartos ocupados */}
      </div>
      <div className="dashboard-item check-in">
        <h2>Check-in</h2>
        {/* Aqui você pode exibir informações sobre check-in */}
      </div>
      <div className="dashboard-item check-out">
        <h2>Check-out</h2>
        {/* Aqui você pode exibir informações sobre check-out */}
      </div>
      <div className="dashboard-item maintenance">
        <h2>Manutenção</h2>
        {/* Aqui você pode exibir informações sobre quartos em manutenção */}
      </div>

  <div className="dashboard-item reservations">
        <h2>Reservas</h2>
        <ReservationForm onAddReservation={handleAddReservation} />
        <ul>
          {reservations.map((reservation, index) => (
            <li key={index}>
              {/* Exibir informações da reserva */}
              {/* Exemplo: */}
              {reservation.nome} {reservation.sobrenome}
        
            </li>
    
   
    ))}
                  </ul>
    </div>
    </div>
  );
}

export default Dashboard;