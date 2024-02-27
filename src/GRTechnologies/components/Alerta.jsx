export const Alerta = ({ mensaje, tipo }) => {
    return (
        <div className={`text-center text-2xl my-2 p-3 ${ tipo === 'success' ? 'bg-green-500' : 'bg-red-500' } text-white font-bold rounded-[0.5rem]`}>
            { mensaje }
        </div>
    )
}
