const EmptyState = ({mensaje, icono}) => {
    return (
        <div style= {{ textAlign: "center", padding: "40px 20px", color: "#64748b"}}>
            <div style={{ fontSize: "3rem", marginBottom: "16px"}}>{icono}</div>
            <p style={{ fontSize: "1.125 rem", margin: 0, fontWeight: 500}}>{mensaje}</p>
        </div>
    );
};

export default EmptyState;