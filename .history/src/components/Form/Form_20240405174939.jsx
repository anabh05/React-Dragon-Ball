import React from 'react'
import { useForm } from 'react-hook-form';

export default function Form({onSubmit, data}) {
    const { register, handleSubmit } = useForm({defaultValues:data});
    return (
        <form onSubmit={handleSubmit(onSubmit)}>

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
