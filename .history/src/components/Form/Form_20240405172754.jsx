import React from 'react'
import { useForm } from 'react-hook-form';

export default function Form() {
    const { register, handleSubmit } = useForm();
    return (
        <form onSubmit={handleSubmit()}>

            <fieldset>
                <legend>Crear nuevo personaje</legend>

                <div>
                    <label >
                        Nombre
                        <input type="text" {...register("name", { required: true })} />
                    </label>
                </div>

                <div>
                    <label >
                        ID planeta
                        <input type="text" {...register("idPlanet", { required: true })} />
                    </label>
                </div>

                <div>
                    <label >
                        Avatar
                        <input type="text" {...register("avatar", { required: true })} />
                    </label>
                </div>

                <div>
                    <label >
                        Descripción
                        <textarea  {...register("description", { required: true })} />
                    </label>
                </div>
            </fieldset>

            <button>Crear</button>
        </form>
    )
}
