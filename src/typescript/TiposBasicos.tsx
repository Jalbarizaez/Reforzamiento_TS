
export const TiposBasicos = () => {

    const nombre: string = 'Fernando';
    const edad: number = 35;
    const estaActivo: boolean = true;
    const poderes = ['Velocida','Volar','Respirar en el agua']
    //const poderes: string[] = [];

    return (
        <>
            <h3>Tipos Basicos</h3>
            { nombre} , { edad } , { (estaActivo) ? 'activo' : 'no activo' }
            <br />
            { poderes.join(', ') }
        </>
    )
}
