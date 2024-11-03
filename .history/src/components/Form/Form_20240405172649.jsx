import React from 'react'
import { useForm } from 'react-hook-form';

export default function Form() {
    const { register, handleSubmit } = useForm();
    return (
        <form>

            <fieldset>
                <legend>Crear nuevo personaje</legend>

                <label >
                    Nombre
                    <input type="text" {...register("name", { required: true })} />
                </label>

                <label >
                    ID planeta
                    <input type="text" {...register("idPlanet", { required: true })} />
                </label>

                <label >
                    Avatar
                    <input type="text" {...register("avatar", { required: true })} />
                </label>

                <label >
                    Descripción
                    <textarea  {...register("description", { required: true })} />
                </label>
            </fieldset>


        </form>
    )
}
