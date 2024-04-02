import React from "react";
import '../pages/Assessment/globalAssessment.css'
import '../pages/Assessment/index.css'
import { Alert, Box, Button, Form, Icon, Input } from "../components";
import { updateFieldHandler } from "../pages/Assessment/index"

export const UserFormAssessment = ({data, updateFieldHandler}) => {
    return (
        <div>
          <div className="form-group">
            <label htmlFor="name">Nome:</label>
            <input className="form-control"
            type="text"
            name="name"
            id="name"
            placeholder="Digite o seu Nome"
            required
            value={data.name || ""}
            onChange={(e) => updateFieldHandler("name", e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Email:</label>
            <input className="form-control"
            type="email"
            name="email"
            id="email"
            placeholder="Digite o seu e-mail"
            required
            value={data.email || ""}
            onChange={(e) => updateFieldHandler("email", e.target.value)}
            />
          </div>
        </div>
    );
};

export default UserFormAssessment;