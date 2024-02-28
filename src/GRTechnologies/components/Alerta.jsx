export const Alerta = ({ mensaje, tipo }) => {
    return (
        <div className={`text-center text-xl my-2 p-2 ${ tipo === 'success' ? 'bg-green-100 text-green-700 border-green-400' : 'bg-red-100 text-red-700 border-red-400' } font-bold rounded-[0.5rem]`}>
            { mensaje }
        </div>
    )
}
