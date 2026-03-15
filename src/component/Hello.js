import { useState } from "react";

export default function Hello({age}){
    const [name, setName] = useState("Groom");

    return (
        <div>
            <h2 id="name">{name}({age})</h2>
            <button
                onClick={() => {
                    setName(name === "Groom" ? "mungmung" : "Groom");
                }}
            >
                change
            </button>
        </div>
    );
}