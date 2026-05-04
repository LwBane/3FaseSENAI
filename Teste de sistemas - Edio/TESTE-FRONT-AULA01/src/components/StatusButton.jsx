export function StatusButton({ disabled = false }) {
  return (
    <button
      type="button"
      disabled={disabled}
      style={{
        backgroundColor: disabled ? "red" : "green",
        color: "white",
      }}
    >
      Enviar
    </button>
  );
}