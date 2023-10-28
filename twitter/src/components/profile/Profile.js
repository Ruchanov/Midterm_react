import React, { useState } from "react";
import Header from "../main/Header";
import "./Profile.css"

export default function Profile() {
  const [user, setUser] = useState({
    name: "Яслан",
    surname: "Ручанов",
    birthDate: "14 июля 2004 года",
    interests: "Программировать на реакте",
  });

  return (
    <div>
        <Header></Header>
        <h1>Профиль</h1>
      <div className="profile-info">
        <h2>Имя: {user.name}</h2>
        <h2>Фамилия: {user.surname}</h2>
        <h2>Дата рождения: {user.birthDate}</h2>
        <h2>Интересы: {user.interests}</h2>
      </div>
    </div>
  );
}


