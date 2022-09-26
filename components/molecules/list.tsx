type ListProps = {
    items: Array<{
        name: string;
        id: string;
    }>
}

export const List: React.FC<ListProps> = ({ items }) => {
    return (
        <div className="overflow-hidden h-full ">
            {items.map((item) => (
                <p key={item.id} 
                className="border-b-2 border-gray-100 p-2 cursor-crosshair">{item.name}</p>
            ))}
        </div>
    )
}