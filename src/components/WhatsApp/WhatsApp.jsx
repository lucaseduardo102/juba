export function WhatsApp() {
  return (
    <a
      style={style.btnWhats}
      href="https://wa.me/5561991445945?text=Olá, quero agendar um atendimento."
      target="_blank"
    >
      <div style={style.iconContainer}>
        <i className="bi bi-whatsapp" style={style.icon}></i>
      </div>
    </a>
  );
}

const style = {
  btnWhats: {
    backgroundColor: "#25D366",
    position: "absolute",
    width: "70px",
    height: "70px",
    borderRadius: "800px",
    bottom: 50,
    right: 30,
  },
  iconContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  icon: {
    color: "white",
    fontSize: "2.0rem",
  },
};
