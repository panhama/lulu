import React from "react";

export default function Input({label,input}) {
    return <div>
        <label>
         {label}
        </label>
        <input>
        {input}
        </input>
    </div>
}